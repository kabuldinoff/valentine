const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');
let currentYesSize = 1;

yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html';
});

noBtn.addEventListener('click', () => {
    window.location.href = 'no.html';
});

noBtn.addEventListener( 'mouseover', () => {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxWidth = window.innerWidth - btnWidth;
    const maxHeight = window.innerHeight - btnHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.zIndex = '100';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    currentYesSize = currentYesSize * 1.2;
    yesBtn.style.transform = `scale(${currentYesSize})`;
});