const ToggleSound = (state, index, element1, element2) => {
    let unMuted = document.querySelectorAll('.'+element1)
    let muted = document.querySelectorAll('.'+element2)
    if (state == 'muted') {
        unMuted[index].classList.add('d-none')
        muted[index].classList.remove('d-none')
    }
    else {
        unMuted[index].classList.remove('d-none')
        muted[index].classList.add('d-none')
    }
}


export default ToggleSound