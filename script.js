// ایجاد یک کتاب از صفحات
const flipbook = new St.PageFlip(document.getElementById('myFlipBook'), {
    width: 400,  
    height: 300,  
    size: 'fixed',
    minWidth: 315,
    minHeight: 220,
    maxWidth: 1000,
    maxHeight: 800,
    showCover: true,  
    mobileScrollSupport: false, 
});

flipbook.loadFromHTML(document.querySelectorAll('.page'));

document.getElementById('prev-btn').addEventListener('click', () => {
    flipbook.flipPrev();
    playFlipSound();
});

document.getElementById('next-btn').addEventListener('click', () => {
    flipbook.flipNext();
    playFlipSound();
});

function playFlipSound() {
    const flipSound = document.getElementById('flip-sound');
    flipSound.currentTime = 0;
    flipSound.play();
}
