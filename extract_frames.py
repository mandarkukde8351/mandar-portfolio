from pathlib import Path
from PIL import Image
import cv2

# --------------------------------------------------
# FIND PROJECT AND VIDEO
# --------------------------------------------------

PROJECT_DIR = Path(__file__).resolve().parent

VIDEO_PATH = PROJECT_DIR / "public" / "character.mp4"
OUTPUT_DIR = PROJECT_DIR / "public" / "frames"

# Create the frames folder automatically
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# --------------------------------------------------
# CHECK VIDEO
# --------------------------------------------------

if not VIDEO_PATH.exists():
    print("ERROR: character.mp4 was not found.")
    print(f"Expected location: {VIDEO_PATH}")
    raise SystemExit(1)

print("Video found:")
print(VIDEO_PATH)
print()

# --------------------------------------------------
# OPEN VIDEO
# --------------------------------------------------

cap = cv2.VideoCapture(str(VIDEO_PATH))

if not cap.isOpened():
    print("ERROR: Could not open character.mp4")
    raise SystemExit(1)

fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

print(f"Video FPS: {fps}")
print(f"Total video frames: {total_frames}")
print()
print("Extracting frames...")
print()

# --------------------------------------------------
# EXTRACT FRAMES
# --------------------------------------------------

frame_number = 0

while True:

    success, frame = cap.read()

    if not success:
        break

    # OpenCV uses BGR.
    # Convert to RGB for PIL.
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Convert to PIL image
    image = Image.fromarray(frame_rgb)

    # Save as WebP
    output_file = OUTPUT_DIR / f"frame-{frame_number:04d}.webp"

    image.save(
        output_file,
        "WEBP",
        quality=80,
        method=6
    )

    frame_number += 1

cap.release()

print()
print("--------------------------------")
print("FRAME EXTRACTION COMPLETE")
print("--------------------------------")
print(f"Frames created: {frame_number}")
print(f"Saved to: {OUTPUT_DIR}")
print("--------------------------------")