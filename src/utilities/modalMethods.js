export const open = (e, id) => {
    e.stopPropagation()
    const dialog = document.getElementById(id)
    dialog.showModal()
}

export const close = (e, id) => {
    e.stopPropagation()
    const dialog = document.getElementById(id)
    dialog.close()
}