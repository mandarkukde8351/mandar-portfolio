"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 240;

export default function CursorCharacter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const images: HTMLImageElement[] = [];

    let mouseX = window.innerWidth * 0.7;
    let mouseY = window.innerHeight * 0.5;

    let currentFrame = 120;
    let targetFrame = 120;

    let animationFrame = 0;

    const loadImage = (src: string) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve(img);

        img.onerror = () => {
          console.error("Failed to load:", src);
          reject(new Error(`Failed to load ${src}`));
        };

        img.src = src;
      });
    };

    const loadImages = async () => {
      try {
        console.log("Loading character frames...");

        const loadedFrames = await Promise.all(
          Array.from({ length: FRAME_COUNT }, (_, index) =>
            loadImage(
              `/frames/frame-${String(index).padStart(4, "0")}.webp`
            )
          )
        );

        images.push(...loadedFrames);

        console.log(
          `Character frames loaded successfully: ${images.length}`
        );

        resizeCanvas();

        animationFrame = requestAnimationFrame(render);
      } catch (error) {
        console.error("Character animation failed to load:", error);
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      if (images.length === 0) {
        animationFrame = requestAnimationFrame(render);
        return;
      }

      /*
       * Calculate cursor direction relative
       * to the character.
       */

      const centerX = width * 0.70;
      const centerY = height * 0.50;

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;

      let angle = Math.atan2(dy, dx);

      /*
       * Convert angle from -PI → PI
       * into 0 → 2PI.
       */

      if (angle < 0) {
        angle += Math.PI * 2;
      }

      /*
       * Convert angle into frame number.
       */

      targetFrame = Math.floor(
        (angle / (Math.PI * 2)) * FRAME_COUNT
      );

      /*
       * Smooth frame transition.
       */

      let difference = targetFrame - currentFrame;

      if (difference > FRAME_COUNT / 2) {
        difference -= FRAME_COUNT;
      }

      if (difference < -FRAME_COUNT / 2) {
        difference += FRAME_COUNT;
      }

      currentFrame += difference * 0.15;

      currentFrame =
        (currentFrame + FRAME_COUNT) % FRAME_COUNT;

      const frame = images[Math.floor(currentFrame)];

      if (frame) {
        drawCharacter(frame);
      }

      animationFrame = requestAnimationFrame(render);
    };

    const drawCharacter = (image: HTMLImageElement) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      /*
       * Character size.
       *
       * Change 0.72 later if you want
       * the character bigger/smaller.
       */

      const characterHeight = Math.min(
        height * 0.72,
        780
      );

      const ratio = image.width / image.height;

      const characterWidth =
        characterHeight * ratio;

      /*
       * Position character on right side.
       */

      const x =
        width * 0.70 -
        characterWidth / 2;

      const y =
        height * 0.50 -
        characterHeight / 2;

      ctx.drawImage(
        image,
        x,
        y,
        characterWidth,
        characterHeight
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    loadImages();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}