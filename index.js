document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.answer1');
    const answer = document.querySelector('#answer1');
    const button2 = document.querySelector('.answer2');
    const answer2 = document.querySelector('#answer2');
    const bookmarkLink = document.getElementById('bookmark-link');
    const bookmarkIcon = document.querySelector('.bookmark-icon');

    let answerShown = false;
    button.addEventListener('click', () => {
        if (answerShown) {
            answer.style.display = 'none';
            answerShown = false;
        } else {
            answer.style.display = 'block';
            answerShown = true;
        }
    });

    button2.addEventListener('click', () => {
        if (answerShown) {
            answer2.style.display = 'none';
            answerShown = false;
        } else {
            answer2.style.display = 'block';
            answerShown = true;
        }
    });

    bookmarkLink.addEventListener('click', () => {
        bookmarkIcon.classList.toggle('active');
    });

    bookmarkIcon.addEventListener('click', () => {
        bookmarkIcon.classList.toggle('active');
    });
});
