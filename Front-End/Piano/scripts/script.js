// طراحی برای دکمه های کیبورد

let Note = document.getElementById('notePlaying')

window.addEventListener( 'keydown' , function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`.audio[data-key="${e.keyCode}"]`)

    if(! key) return

    key.classList.add('playing')
    setTimeout(() => {
        key.classList.remove('playing')
    }, 130);

    const keyNote = key.getAttribute('data-note')

    Note.innerHTML = keyNote
    Note.classList.add('block')

    audio.currentTime = 0
    audio.play()

})

// طراحی برای موبایل
let keyA = document.querySelector('.a')
let keyW = document.querySelector('.w')
let keyS = document.querySelector('.s')
let keyE = document.querySelector('.e')
let keyD = document.querySelector('.d')
let keyF = document.querySelector('.f')
let keyT = document.querySelector('.t')
let keyG = document.querySelector('.g')
let keyY = document.querySelector('.y')
let keyH = document.querySelector('.h')
let keyU = document.querySelector('.u')
let keyJ = document.querySelector('.j')
let keyK = document.querySelector('.k')
let keyO = document.querySelector('.o')
let keyL = document.querySelector('.l')
let keyP = document.querySelector('.p')
let keyX = document.querySelector('.x')

const audioA = document.querySelector('.audioA')
const audioW = document.querySelector('.audioW')
const audioS = document.querySelector('.audioS')
const audioE = document.querySelector('.audioE')
const audioD = document.querySelector('.audioD')
const audioF = document.querySelector('.audioF')
const audioT = document.querySelector('.audioT')
const audioG = document.querySelector('.audioG')
const audioY = document.querySelector('.audioY')
const audioH = document.querySelector('.audioH')
const audioU = document.querySelector('.audioU')
const audioJ = document.querySelector('.audioJ')
const audioK = document.querySelector('.audioK')
const audioO = document.querySelector('.audioO')
const audioL = document.querySelector('.audioL')
const audioP = document.querySelector('.audioP')
const audioX = document.querySelector('.audioX')

keyA.addEventListener( 'click' , function() {

    keyA.classList.add('playing')
    setTimeout(() => {
        keyA.classList.remove('playing')
    }, 130);

    audioA.currentTime = 0
    audioA.play()

    Note.textContent = 'Note: C'
    Note.classList.add('block')
})
keyW.addEventListener( 'click' , function() {

    keyW.classList.add('playing')
    setTimeout(() => {
        keyW.classList.remove('playing')
    }, 130);

    audioW.currentTime = 0
    audioW.play()

    Note.textContent = 'Note: C#'
    Note.classList.add('block')
})
keyS.addEventListener( 'click' , function() {

    keyS.classList.add('playing')
    setTimeout(() => {
        keyS.classList.remove('playing')
    }, 130);

    audioS.currentTime = 0
    audioS.play()

    Note.textContent = 'Note: D'
    Note.classList.add('block')
})
keyE.addEventListener( 'click' , function() {

    keyE.classList.add('playing')
    setTimeout(() => {
        keyE.classList.remove('playing')
    }, 130);

    audioE.currentTime = 0
    audioE.play()

    Note.textContent = 'Note: D#'
    Note.classList.add('block')
})
keyD.addEventListener( 'click' , function() {

    keyD.classList.add('playing')
    setTimeout(() => {
        keyD.classList.remove('playing')
    }, 130);

    audioD.currentTime = 0
    audioD.play()

    Note.textContent = 'Note: E'
    Note.classList.add('block')
})
keyF.addEventListener( 'click' , function() {

    keyF.classList.add('playing')
    setTimeout(() => {
        keyF.classList.remove('playing')
    }, 130);

    audioF.currentTime = 0
    audioF.play()

    Note.textContent = 'Note: E#'
    Note.classList.add('block')
})
keyT.addEventListener( 'click' , function() {

    keyT.classList.add('playing')
    setTimeout(() => {
        keyT.classList.remove('playing')
    }, 130);

    audioT.currentTime = 0
    audioT.play()

    Note.textContent = 'Note: F'
    Note.classList.add('block')
})
keyG.addEventListener( 'click' , function() {

    keyG.classList.add('playing')
    setTimeout(() => {
        keyG.classList.remove('playing')
    }, 130);

    audioG.currentTime = 0
    audioG.play()

    Note.textContent = 'Note: F#'
    Note.classList.add('block')
})
keyY.addEventListener( 'click' , function() {

    keyY.classList.add('playing')
    setTimeout(() => {
        keyY.classList.remove('playing')
    }, 130);

    audioY.currentTime = 0
    audioY.play()

    Note.textContent = 'Note: G'
    Note.classList.add('block')
})
keyH.addEventListener( 'click' , function() {

    keyH.classList.add('playing')
    setTimeout(() => {
        keyH.classList.remove('playing')
    }, 130);

    audioH.currentTime = 0
    audioH.play()

    Note.textContent = 'Note: G#'
    Note.classList.add('block')
})
keyU.addEventListener( 'click' , function() {

    keyU.classList.add('playing')
    setTimeout(() => {
        keyU.classList.remove('playing')
    }, 130);

    audioU.currentTime = 0
    audioU.play()

    Note.textContent = 'Note: H'
    Note.classList.add('block')
})
keyJ.addEventListener( 'click' , function() {

    keyJ.classList.add('playing')
    setTimeout(() => {
        keyJ.classList.remove('playing')
    }, 130);

    audioJ.currentTime = 0
    audioJ.play()

    Note.textContent = 'Note: H#'
    Note.classList.add('block')
})
keyK.addEventListener( 'click' , function() {

    keyK.classList.add('playing')
    setTimeout(() => {
        keyK.classList.remove('playing')
    }, 130);

    audioK.currentTime = 0
    audioK.play()

    Note.textContent = 'Note: I'
    Note.classList.add('block')
})
keyO.addEventListener( 'click' , function() {

    keyO.classList.add('playing')
    setTimeout(() => {
        keyO.classList.remove('playing')
    }, 130);

    audioO.currentTime = 0
    audioO.play()

    Note.textContent = 'Note: I#'
    Note.classList.add('block')
})
keyL.addEventListener( 'click' , function() {

    keyL.classList.add('playing')
    setTimeout(() => {
        keyL.classList.remove('playing')
    }, 130);

    audioL.currentTime = 0
    audioL.play()

    Note.textContent = 'Note: J'
    Note.classList.add('block')
})
keyP.addEventListener( 'click' , function() {

    keyP.classList.add('playing')
    setTimeout(() => {
        keyP.classList.remove('playing')
    }, 130);

    audioP.currentTime = 0
    audioP.play()

    Note.textContent = 'Note: J#'
    Note.classList.add('block')
})
keyX.addEventListener( 'click' , function() {

    keyX.classList.add('playing')
    setTimeout(() => {
        keyX.classList.remove('playing')
    }, 130);

    audioX.currentTime = 0
    audioX.play()

    Note.textContent = 'Note: K'
    Note.classList.add('block')
})
