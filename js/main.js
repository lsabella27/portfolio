$(document).ready(function () {
    
        // 비디오 재생 함수
        function playVideo() {
            const video = document.getElementById('myVideo');
            video.play();
        }


    const must_list = new Swiper('.must_list', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000, // 슬라이드 넘어가는 속도 ms
        slidesPerView: 3,
        spaceBetween: 0,
        scrollbar: {
            el: ".swiper-scrollbar",

        },
        navigation: {
            nextEl: ".swiper-button-next", // 다음버튼
            prevEl: ".swiper-button-prev", // 이전버튼
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1200: {
                slidesPerView: 4.8,
                spaceBetween: 30,
            },
        },
    });


    const textElement = $('.text');
    const text = textElement.text();
    textElement.text(''); // 초기화

    let index = 0;
    let isDeleting = false;
    let speed = 400; // 타이핑 속도

    function type() {
        if (isDeleting) {
            index--;
        } else {
            index++;
        }

        textElement.text(text.substring(0, index));

        if (index === text.length) {
            isDeleting = true; // 전체 텍스트가 나타나면 삭제 모드로 전환
        } else if (index === 0) {
            isDeleting = false; // 텍스트가 모두 지워지면 타이핑 모드로 전환
        }

        setTimeout(type, isDeleting ? speed / 2 : speed);
    }

    type(); // 함수 호출



// 프로젝트 슬라이드
const pro1= new Swiper('.pro1', {
    slidesPerView: 2.4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next", // 다음버튼
        prevEl: ".swiper-button-prev", // 이전버튼
    },
    mousewheel: true,
    breakpoints: {
        300: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2.4,
            spaceBetween: 20,
        },

        1000: {
            slidesPerView: 2.4,
            spaceBetween: 30,
        },
    },
});




    
    
});
