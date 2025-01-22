import './gallery.scss';

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('modal-close');

// Add click event listeners to all images
document.querySelectorAll('.grid-item img').forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src; // Set modal image source
        modal.style.display = 'flex'; // Show modal
    });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});