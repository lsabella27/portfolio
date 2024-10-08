document.addEventListener("DOMContentLoaded", function () {
    const projectSection = document.querySelector('#project');
    const leftSection = projectSection.querySelector('.scroll_box');
    const readySection = document.querySelector('#ready');
    const boxes = leftSection.querySelectorAll('.pro_txt1_position');
    
    let isProjectSectionFixed = false;
    let isTransitioning = false;
    let lastScrollTop = 0;
    let ticking = false;

    function handleWheel(event) {
        if (isProjectSectionFixed && !isTransitioning) {
            event.preventDefault();
            const delta = event.deltaY;
            
            if (delta > 0) { // Scrolling down
                scrollDown();
            } else { // Scrolling up
                scrollUp();
            }
        }
    }

    function scrollDown() {
        const currentVisibleIndex = Math.floor(leftSection.scrollTop / boxes[0].offsetHeight);
        if (currentVisibleIndex < boxes.length - 1) {
            leftSection.scrollTo({
                top: (currentVisibleIndex + 1) * boxes[0].offsetHeight,
                behavior: 'smooth'
            });
        } else {
            smoothScrollToReady();
        }
    }

    function scrollUp() {
        const currentVisibleIndex = Math.ceil(leftSection.scrollTop / boxes[0].offsetHeight);
        if (currentVisibleIndex > 0) {
            leftSection.scrollTo({
                top: (currentVisibleIndex - 1) * boxes[0].offsetHeight,
                behavior: 'smooth'
            });
        } else if (!isProjectSectionFixed) {
            window.scrollTo({
                top: projectSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    function smoothScrollToReady() {
        if (isTransitioning) return;
        isTransitioning = true;
        isProjectSectionFixed = false;
        projectSection.style.position = 'relative';
        
        window.scrollTo({
            top: readySection.offsetTop,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isTransitioning = false;
        }, 1000);
    }

    function handleScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (isTransitioning) return;

                const scrollPosition = window.pageYOffset;
                const projectSectionTop = projectSection.offsetTop;
                const projectSectionBottom = projectSectionTop + projectSection.offsetHeight;

                if (scrollPosition >= projectSectionTop && scrollPosition < projectSectionBottom) {
                    if (!isProjectSectionFixed) {
                        projectSection.style.position = 'fixed';
                        projectSection.style.top = '0';
                        projectSection.style.left = '0';
                        projectSection.style.width = '100%';
                        isProjectSectionFixed = true;
                        window.scrollTo(0, projectSectionTop);
                    }
                } else if (scrollPosition < projectSectionTop) {
                    if (isProjectSectionFixed) {
                        projectSection.style.position = 'relative';
                        isProjectSectionFixed = false;
                        leftSection.scrollTop = 0; // Reset to the first box
                    }
                } else {
                    if (isProjectSectionFixed) {
                        projectSection.style.position = 'relative';
                        isProjectSectionFixed = false;
                    }
                }

                lastScrollTop = scrollPosition;
                ticking = false;
            });

            ticking = true;
        }
    }

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
});