const btnOpen = document.getElementById('btn-open'),
    btnClose = document.getElementById('btn-close'),
    overlay = document.getElementById('overlay'),
    modal = document.getElementById('wrapper-modal');
    
btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
})

const closeModal = () => {
    modal.classList.remove('active');
}
overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
