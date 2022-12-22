const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
  };


  refs.openModalBtn.addEventListener('click', onBtnClickOpen)
refs.closeModalBtn.addEventListener('click', onBtnClose)
refs.backdrop.addEventListener("click",  onBackdropClose)
//   .show-modal
  function onBtnClickOpen() {
    document.body.classList.add('show-modal')
  }

  function onBtnClose() {
    document.body.classList.remove('show-modal')
  }


  function onBackdropClose(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.currentTarget === event.target ) {
        onBtnClose()
    }
  }