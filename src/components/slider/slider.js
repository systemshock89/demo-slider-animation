'use strict';

import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel, A11y } from 'swiper/modules';
import { gsap, Power2 } from "gsap";
import lazyLoad from "../../js/lazyLoad.js";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import './slider.scss'

function slider() {
    const slider = new Swiper('.swiper', {
        // modules: [Navigation, Pagination, A11y, Autoplay],
        modules: [Navigation, Pagination, Mousewheel, A11y],
        rewind: true,
        speed: 1600,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        a11y: {
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
            firstSlideMessage: 'Это первый слайд',
            lastSlideMessage: 'Это последний слайд',
            paginationBulletMessage: 'К слайду №{{index}}'
        },
    })

    /*
    Требования к видео:
    1. Видео должно быть 60 кадров/сек

    2. full hd (1080p)

    3. Видео должно быть подготовлено командой:
    ffmpeg -i background-60.mp4 -vf scale=1920:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p background.mp4
    */
    const videoBg = document.querySelector('.slider__video');

    // проигрывать видео при перелистывании слайдов
    slider.on('slideChange', function() {
        gsap.to(videoBg, 1.6, { // скорость 1.6
            // анимацию будем проигрывать на протяжении пролистывания всех слайдов:
            // берем продолжительность видео (video.duration)
            // делим на кол-во слайдов - 1 (тк индексация слайдов начинается с 0)
            // и умножаем на индекс текущего слайда: this.realIndex
            currentTime: (videoBg.duration / (this.slides.length - 1)) * this.realIndex,
            ease: Power2.easeOut, // параметр скорости анимации
        })
    })

    // гасим огонь при завершении анимации, чтоб лучше читался текст:
    // (поставим для видео прозрачность)
    // для этого при начале анимации добавим класс change
    // при завершении анимации убираем класс
    slider.on('slideChangeTransitionStart', function() {
        videoBg.classList.add('slider__video_change')
    }).on('slideChangeTransitionEnd', function() {
        videoBg.classList.remove('slider__video_change')
    })

    lazyLoad();
}

export default slider;
