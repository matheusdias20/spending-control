// ======== Modal ======== //

let Modal = {
    open(){
        document
             // Abrir Modal
            .querySelector('.modal-overlay')
             // Adicionar a class active ao modal
            .classList.add('active')
            .add('active')
    },
    close(){
        document
            // Fechar Modal
            .querySelector('.modal-overlay')
            // Remover a class active do modal
            .classList.remove('active')
            .add('active')
    }
}