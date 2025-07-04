document.addEventListener('DOMContentLoaded', function() {
    // Modal contacto
    const openModal = document.getElementById('open-modal');
    const closeModal = document.getElementById('close-modal');
    const contactModal = document.getElementById('contact-modal');
    if (openModal && closeModal && contactModal) {
        openModal.onclick = function() {
            contactModal.classList.remove('hidden');
        };
        closeModal.onclick = function() {
            contactModal.classList.add('hidden');
        };
        contactModal.onclick = function(e) {
            if (e.target === contactModal) contactModal.classList.add('hidden');
        };
    }

    // Switch header
    const headerSwitch = document.getElementById('header-switch');
    const header = document.getElementById('main-header');
    if (headerSwitch && header) {
        headerSwitch.addEventListener('change', function() {
            header.style.display = this.checked ? '' : 'none';
        });
    }
});
    
// const btn = document.getElementById('menu-btn');
// const menu = document.getElementById('mobile-menu');

// btn.addEventListener('click', () => {
//     menu.classList.toggle('hidden');
//     menu.classList.toggle('flex');
// });