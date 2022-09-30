const tabs = document.getElementById('tabs'),
    contents = document.getElementById('contents'); 

    const changeClass = el => {
        for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}
tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for( let i = 0; i < contents.children.length; i++) {
        contents.children[i].classList.remove('active');
        if(contents.children[i].dataset.content == currTab) {
            contents.children[i].classList.add('active');
        }
    }
})