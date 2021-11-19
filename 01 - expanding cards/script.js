const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', panelClickHanld);
})

function panelClickHanld(e) {
    panels.forEach(panel=>panel.classList.remove('active'));
    this.classList.add('active');
}