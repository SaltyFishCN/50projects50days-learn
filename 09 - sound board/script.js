const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const buttons = document.querySelector('#buttons');

// append children
sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', changeSound);
    buttons.appendChild(btn);
});

function changeSound(e) {
    // stop other audioes
    sounds.forEach((sound) => {
        const audio = document.querySelector(`#${sound}`)
        audio.pause();
        audio.currentTime = 0;
    })
    // play target audio
    document.querySelector(`#${this.innerText}`).play();
}