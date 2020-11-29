const show = id => {
    const dialog = document.getElementById(id);
    dialog.showModal()
}

const closeDialog = id => {
    const dialog = document.getElementById(id);
    dialog.close();
}