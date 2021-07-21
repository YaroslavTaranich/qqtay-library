import $ from '../core';

$.prototype.carousel = function() {
    for(let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesFiels = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesFiels.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });
        let offset = 0;
        let slideIndex = 0;

         $(this[i].querySelector('[data-slide="next"]')).click((e) => {
             e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length -1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesFiels.style.transform = `translateX(-${offset}px)`;

            if (slideIndex  == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
         });

         $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = (+width.replace(/\D/g, '') * (slides.length -1));
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesFiels.style.transform = `translateX(-${offset}px)`;
            
            if (slideIndex  == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
         });

         const sliderId = this[i].getAttribute('id');
         $(`#${sliderId} .carousel-indicators li`).click((e) => {
            const slideTo = e.target.getAttribute("data-slide-to");

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            slidesFiels.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
         });
    }
};

$.prototype.createCarousel = function({content} = {}, wrapper = '#carousel-wrapper') {
    for(let i = 0; i < this.length; i++) {
        const wrap = document.querySelector(wrapper);
        
        wrap.innerHTML = `
        <div class="carousel mb-20" id="example">
            <ol class="carousel-indicators">

            </ol>
            <div class="carousel-inner">
                <div class="carousel-slides">
                    
                </div>
            </div>
            <a href="#" class="carousel-prev" data-slide="prev">


                <span class="carousel-prev-icon">&lt;</span>
            </a>            
            <a href="#" class="carousel-next" data-slide="next">
                <span class="carousel-next-icon">&gt;</span>
            </a>
        </div>
        `

        let items = [];
        let dots = [];
        for (let j = 0; j < content.length; j++){
            let item = document.createElement('div');
            item.classList.add('carousel-item');
            let slide = document.createElement('img');
            let dot = document.createElement('li');
            slide.setAttribute('src', content[j][0]);
            slide.setAttribute('alt', content[j][1]);
            item.appendChild(slide);
            items.push(item);
            dot.setAttribute('data-slide-to', j);
            if (j == 0) {
                dot.classList.add('active');
            }
            dots.push(dot);
        }

        wrap.querySelector('.carousel-slides').append(...items);
        wrap.querySelector('.carousel-indicators').append(...dots);
        $(this[i].querySelector('.carousel')).carousel();

    }
};


// $('.carousel').carousel();

