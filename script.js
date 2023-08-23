function copyText(button,codeBlock) {
    button.classList.add('copied');
    const text = codeBlock.textContent;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

   
    setTimeout(() => {
        button.classList.remove('copied');
    }, 1500);
}
const navbar = document.querySelector('.navbar');
let isMouseDown = false;
let startX;

navbar.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - navbar.offsetLeft;
});

navbar.addEventListener('mouseup', () => {
    isMouseDown = false;
});

navbar.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const scrollX = e.pageX - navbar.offsetLeft - startX;
    navbar.scrollLeft = scrollX;
});