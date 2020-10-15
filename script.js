let heart = document.querySelector('.like');
let likesNumber = document.querySelector('.likes__number');


heart.onclick = function () {
    if (heart.classList.contains('added')) {
        likesNumber.textContent--;
    } else {
        likesNumber.textContent++;
    }

    heart.classList.toggle('added');
};
