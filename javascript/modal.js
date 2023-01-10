const body = document.body;
const modal = document.getElementsByClassName('Modal')[0];

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
});

function ModalAlert(obj){
    modal.style.display = 'block';

    if (modal.style.display == 'block') {
        body.style.overflow = 'hidden';
    }
}

function ModalExit(){
    modal.style.display = 'none';
    body.style.overflow = 'auto';
}