const mainImages = document.querySelectorAll('.cardsProjeto img');

mainImages.forEach((img) => {
    const modalId = img.getAttribute('data-modal'); 
    const modal = document.getElementById(modalId);
    const closeModal = modal.querySelector('.closeModal');

    img.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
