let Start = document.getElementById('start')
let Pause = document.getElementById('pause')
let Next = document.getElementById('next')
let Again = document.getElementById('again')

let MiliSeconds = document.getElementById('mili-seconds')
let Seconds = document.getElementById('seconds')
let Minutes = document.getElementById('minutes')
let Watch = document.getElementById('watch')

let Timer = document.getElementById('time')

let TimeMiliSeconds = 0
let TimeSeconds = 0
let TimeMinutes = 0
let TimeWatch = 0

Start.addEventListener(('click'), function () {

    Timer.style.color = 'white'

    Start.animate([
        { opacity: 0, transform: 'translateY(-20px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 300,
        easing: 'ease-out'
    })


    Pause.animate([
        { opacity: 0, transform: 'translateY(-20px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 300,
        easing: 'ease-out'
    })

    Again.animate([
        { opacity: 0, transform: 'translateY(-20px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 300,
        easing: 'ease-out'
    })



    Start.style.display = 'none'
    Pause.style.display = 'block'
    Again.style.display = 'block'

    Pause.addEventListener(('click'), function () {
        clearInterval(counting)

        Next.style.display = 'block'
        Pause.style.display = 'none'

        Next.animate([
            { opacity: 0, transform: 'translateY(-20px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 300,
            easing: 'ease-out'
        })

    })

    Again.addEventListener(('click'), function () {
        clearInterval(counting)

        Again.style.display = 'none'
        Pause.style.display = 'none'
        Next.style.display = 'none'
        Start.style.display = 'block'

        MiliSeconds.textContent = '00'
        Seconds.textContent = '00'
        Minutes.textContent = '00'
        Watch.textContent = '00'

        TimeMiliSeconds = 0
        TimeSeconds = 0
        TimeMinutes = 0
        TimeWatch = 0

        Timer.style.color = 'red'

        Start.animate([
            { opacity: 0, transform: 'translateY(-20px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 300,
            easing: 'ease-out'
        })

    })

    let counting = setInterval(() => {
        TimeMiliSeconds += 1

        if (TimeMiliSeconds > 99) {
            TimeMiliSeconds = 0
            TimeSeconds = (TimeSeconds + 1) % 60
            Seconds.textContent = TimeSeconds

            if (TimeSeconds === 0) {
                TimeMinutes = (TimeMinutes + 1) % 60
                Minutes.textContent = TimeMinutes

                if (TimeMinutes === 0) {
                    TimeWatch += 1
                    Watch.textContent = TimeWatch
                }
            }
        }

        MiliSeconds.textContent = TimeMiliSeconds

        if(TimeMiliSeconds <= 9) {
            MiliSeconds.textContent = '0' + TimeMiliSeconds
        }
        if(TimeSeconds <= 9) {
            Seconds.textContent = '0' + TimeSeconds
        }
        if(TimeMinutes <= 9) {
            Minutes.textContent = '0' + TimeMinutes
        }
        if(TimeWatch <= 9) {
            Watch.textContent = '0' + TimeWatch
        }

    }, 10);

})

Next.addEventListener(('click'), function () {
    Next.style.display = 'none'
    Pause.style.display = 'block'

    Pause.addEventListener(('click'), function () {
        clearInterval(counting)

    })

    Again.addEventListener(('click'), function () {
        clearInterval(counting)

    })

    let counting = setInterval(() => {
        TimeMiliSeconds += 1

        if (TimeMiliSeconds > 99) {
            TimeMiliSeconds = 0
            TimeSeconds = (TimeSeconds + 1) % 60
            Seconds.textContent = TimeSeconds

            if (TimeSeconds === 0) {
                TimeMinutes = (TimeMinutes + 1) % 60
                Minutes.textContent = TimeMinutes

                if (TimeMinutes === 0) {
                    TimeWatch += 1
                    Watch.textContent = TimeWatch
                }
            }
        }

        MiliSeconds.textContent = TimeMiliSeconds

        if(TimeMiliSeconds <= 9) {
            MiliSeconds.textContent = '0' + TimeMiliSeconds
        }
        if(TimeSeconds <= 9) {
            Seconds.textContent = '0' + TimeSeconds
        }
        if(TimeMinutes <= 9) {
            Minutes.textContent = '0' + TimeMinutes
        }
        if(TimeWatch <= 9) {
            Watch.textContent = '0' + TimeWatch
        }

    }, 10);

    Pause.animate([
        { opacity: 0, transform: 'translateY(-20px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 300,
        easing: 'ease-out'
    })

})