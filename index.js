let toClickOnStar = function () {
    const stars = Array.from(document.querySelectorAll('.star'));
    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', (event) => {
            event.currentTarget.classList.add('star_active');
        });
    }   
}

const star = document.querySelector('.star');
star.addEventListener("click", toClickOnStar);