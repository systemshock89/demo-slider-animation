# Slider animation
Smooth video animation when scrolling the slider.

[See demo](https://systemshock89.github.io/demo-slider-animation/)

## Used features
* Swiper
* Gsap
* Lazyload
* vite + native js

## Video requirements

1. video 60 fps
2. full hd (1080p)
3. converted as: `ffmpeg -i background-60.mp4 -vf scale=1920:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p background.mp4`

## How to use

* `git clone`
* `npm install`
* `npm run dev`