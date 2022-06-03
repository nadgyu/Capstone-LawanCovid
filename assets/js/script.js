const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.ul-links');
    const navLinks = document.querySelectorAll('.ul-links li');

    
    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

         //Animated link
            navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
         });

         //burger animation
         burger.classList.toggle('toggle');
    });

   
}

navSlide();