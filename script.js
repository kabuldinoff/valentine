const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');
let currentYesSize = 1;

noBtn.addEventListener( 'mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    currentYesSize = currentYesSize * 1.2;
    yesBtn.style.transform = `scale(${currentYesSize})`;
});