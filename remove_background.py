import cv2
import os
import numpy as np

VIDEO_PATH = "public/character.mp4"
OUTPUT_DIR = "public/frames"

os.makedirs(OUTPUT_DIR, exist_ok=True)

cap = cv2.VideoCapture(VIDEO_PATH)

if not cap.isOpened():
    print("Could not open video")
    exit()

frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

NUM_FRAMES = 64

usable_frames = frame_count - 1

frame_numbers = [
    round(i * (usable_frames - 1) / (NUM_FRAMES - 1))
    for i in range(NUM_FRAMES)
]


def remove_red_background(frame):

    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # Red hue ranges
    lower_red1 = np.array([0, 80, 40])
    upper_red1 = np.array([12, 255, 255])

    lower_red2 = np.array([170, 80, 40])
    upper_red2 = np.array([179, 255, 255])

    mask1 = cv2.inRange(
        hsv,
        lower_red1,
        upper_red1
    )

    mask2 = cv2.inRange(
        hsv,
        lower_red2,
        upper_red2
    )

    mask = cv2.bitwise_or(
        mask1,
        mask2
    )

    # Slightly expand the background mask
    kernel = np.ones((3, 3), np.uint8)

    mask = cv2.morphologyEx(
        mask,
        cv2.MORPH_OPEN,
        kernel
    )

    mask = cv2.GaussianBlur(
        mask,
        (5, 5),
        0
    )

    # Convert BGR → BGRA
    bgra = cv2.cvtColor(
        frame,
        cv2.COLOR_BGR2BGRA
    )

    # Transparent where red
    bgra[:, :, 3] = 255 - mask

    return bgra


for index, frame_number in enumerate(frame_numbers):

    cap.set(
        cv2.CAP_PROP_POS_FRAMES,
        frame_number
    )

    success, frame = cap.read()

    if not success:
        continue

    result = remove_red_background(frame)

    output_path = os.path.join(
        OUTPUT_DIR,
        f"frame-{index:02d}.webp"
    )

    cv2.imwrite(
        output_path,
        result,
        [
            cv2.IMWRITE_WEBP_QUALITY,
            90
        ]
    )

    print(
        f"Created frame-{index:02d}.webp"
    )


# Center frame

cap.set(
    cv2.CAP_PROP_POS_FRAMES,
    frame_count - 1
)

success, frame = cap.read()

if success:

    result = remove_red_background(frame)

    center_path = os.path.join(
        OUTPUT_DIR,
        "center.webp"
    )

    cv2.imwrite(
        center_path,
        result,
        [
            cv2.IMWRITE_WEBP_QUALITY,
            90
        ]
    )

    print("Created center.webp")


cap.release()

print("DONE")