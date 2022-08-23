startBnt.onclick = () => {
    up.classList.toggle("moveDown")
}



maxi.onclick = () => {
    edgeContainer.style.width = "100%"
    edgeContainer.style.height = "100%"
}

mini.onclick = () => {
    edgeContainer.style.width = "70%"
    edgeContainer.style.height = "60%"
}

eclose.onclick = () => {
    edgeContainer.classList.toggle('edgeClose')
}


edgeBnt.onclick = () => {
    edgeContainer.classList.toggle('edgeClose')
}

