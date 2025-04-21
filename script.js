// Certificate Lightbox
const certificateItems = document.querySelectorAll('.certificate-item');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <span class="close">&times;</span>
    <div class="modal-content">
        <img class="modal-img" src="" alt="">
    </div>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-img');
const closeBtn = modal.querySelector('.close');

certificateItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        modal.style.display = 'block';
        modalImg.src = imgSrc;
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});