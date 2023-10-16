document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLowerCase())
    //console.log(e.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    let music = document.querySelector('#input').value

    if (music !== '') {
        let musicArray = music.split('')
        playComposition(musicArray)
        //console.log(musicArray)
    }

})

// evento do som

function playSound(sound) {
    let audioEl = document.querySelector(`#s_${sound}`)
    let keyEl = document.querySelector(`div[data-key='${sound}']`)

    if (audioEl) {
        audioEl.currentTime = 0
        audioEl.play()
    }

    if (keyEl) {
        keyEl.classList.add('active')

        setTimeout(() => {
            keyEl.classList.remove('active')
        }, 300)

    }
}

function playComposition(musicArray) {
    let wait = 0

    for (let songItem of musicArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 350
    }
}