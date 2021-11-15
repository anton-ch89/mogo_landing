'use strict'
const accordionHandler = () => {
    const buttons = document.querySelectorAll('.wedo-button'),
        wrappers = document.querySelectorAll('.wedo-text-wrapper');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach(button => {
                button.classList.remove('active')
            });
            wrappers.forEach(wrapper => {
                wrapper.classList.add('hidden')
            });
            button.classList.add('active');
            wrappers[index].classList.remove('hidden')
        });
    });
};

accordionHandler();




const togglePictureHandler = () => {
    const ourWorkPictures = document.querySelectorAll('.our-work-picture'),
        ourWorkTitles = document.querySelectorAll('.our-work-title');


    ourWorkPictures.forEach((picture, index) => {
        picture.addEventListener('mouseover', () => {
            ourWorkTitles[index].classList.remove('hidden');
        })
    })

    ourWorkPictures.forEach((picture, index) => {
        picture.addEventListener('mouseout', () => {
            ourWorkTitles[index].classList.add('hidden');
        })
    })

};

togglePictureHandler();