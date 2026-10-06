#!/usr/bin/env bash
# Re-encodes a screen recording for the web: H.264 (plays everywhere), no audio, max 1600px wide,
# plus a .webp poster. Usage: scripts/encode-video.sh <input.mp4> <output.mp4>
set -euo pipefail

in="$1"
out="$2"
poster="${out%.*}.webp"

ffmpeg -y -hide_banner -loglevel error -i "$in" -an \
    -vf "scale='min(1600,iw)':-2" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p \
    -movflags +faststart "$out"

ffmpeg -y -hide_banner -loglevel error -ss 1 -i "$out" -frames:v 1 \
    -c:v libwebp -quality 80 "$poster"

ls -l "$out" "$poster"
