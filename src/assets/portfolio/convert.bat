@echo off
echo Starting WebP Conversion...
mkdir webp_optimized

for %%i in (*.jpg *.jpeg *.png *.JPG *.JPEG *.PNG) do (
    echo Converting: %%i
    ffmpeg -i "%%i" -q:v 75 "webp_optimized/%%~ni.webp"
)

echo Done! Optimized images are in the /webp_optimized folder.
pause