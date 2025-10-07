let startBox = document.querySelector('.start-box')
let inputCounter = document.getElementById('input-counter')
let startCounter = document.getElementById('start-counter')
let errorInput = document.getElementById('error-input')
let timerCircle = document.querySelector('.c100')
let timerNumber = document.getElementById('timer')
let loading = document.querySelector('.loading')
let seccess = document.querySelector('.seccess')

startCounter.addEventListener(('click') , function(e) {
    let seconds = parseInt(inputCounter.value)  
    
    if(isNaN(seconds)) {    
        errorInput.textContent = 'لطفا دیتا را به شکل عدد وارد کنید!'
        errorInput.classList.add('activ')
        seccess.style.display = 'none'
        return
    }

    errorInput.classList.remove('activ')
    timerCircle.style.display = 'block'
    startBox.style.display = 'none'
    timerNumber.textContent = seconds   
    loading.style.display = 'block'
    seccess.style.display = 'none'

    timerCircle.classList.add('p100')

    let originalSeconds = seconds  
    let lastPercent = 'p100'

    let startTimer = setInterval(() => {  

        if(lastPercent) {
            timerCircle.classList.remove(lastPercent)  
        }  

        if(seconds <= 0) {
            clearInterval(startTimer)  
            startBox.style.display = 'block'
            timerCircle.style.display = 'none'
            inputCounter.value = ''
            loading.style.display = 'none'
            seccess.style.display = 'block'
            timerCircle.classList.remove(lastPercent)
            return
        }

        seconds -= 1

        let percent = Math.abs( Math.floor( ( ( ( originalSeconds - seconds ) / originalSeconds ) * 100 ) - 100 ) )  
        lastPercent = `p${percent}`  
        timerCircle.classList.add(`p${percent}`)  

        timerNumber.textContent = seconds 
    }, 1000);
})

