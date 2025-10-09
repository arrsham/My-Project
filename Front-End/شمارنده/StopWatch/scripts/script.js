let Start = document.getElementById('start')
let Pause = document.getElementById('pause')
let Next = document.getElementById('next')
let Again = document.getElementById('again')

let MiliSecond = document.getElementById('mili-second')
let Second = document.getElementById('second')
let Minute = document.getElementById('minute')
let Hour = document.getElementById('hour')

let Timer = document.getElementById('time')

let TimeMiliSecond = 0
let TimeSecond = 0
let TimeMinute = 0
let TimeHour = 0

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

        MiliSecond.textContent = '00'
        Second.textContent = '00'
        Minute.textContent = '00'
        Hour.textContent = '00'

        TimeMiliSecond = 0
        TimeSecond = 0
        TimeMinute = 0
        TimeHour = 0

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
        TimeMiliSecond += 1

        if (TimeMiliSecond > 99) {
            TimeMiliSecond = 0
            TimeSecond = (TimeSecond + 1) % 60
            Second.textContent = TimeSecond

            if (TimeSecond === 0) {
                TimeMinute = (TimeMinute + 1) % 60
                Minute.textContent = TimeMinute

                if (TimeMinute === 0) {
                    TimeHour += 1
                    Hour.textContent = TimeHour
                }
            }
        }

        MiliSecond.textContent = TimeMiliSecond

        if(TimeMiliSecond <= 9) {
            MiliSecond.textContent = '0' + TimeMiliSecond
        }
        if(TimeSecond <= 9) {
            Second.textContent = '0' + TimeSecond
        }
        if(TimeMinutes <= 9) {
            Minute.textContent = '0' + TimeMinute
        }
        if(TimeWatch <= 9) {
            Hour.textContent = '0' + TimeHour
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
        TimeMiliSecond += 1

        if (TimeMiliSecond > 99) {
            TimeMiliSecond = 0
            TimeSeconds = (TimeSecond + 1) % 60
            Second.textContent = TimeSecond

            if (TimeSecond === 0) {
                TimeMinute = (TimeMinute + 1) % 60
                Minute.textContent = TimeMinute

                if (TimeMinute === 0) {
                    TimeHour += 1
                    Hour.textContent = TimeHour
                }
            }
        }

        MiliSecond.textContent = TimeMiliSecond

        if(TimeMiliSecond <= 9) {
            MiliSecond.textContent = '0' + TimeMiliSecond
        }
        if(TimeSecond <= 9) {
            Second.textContent = '0' + TimeSecond
        }
        if(TimeMinute <= 9) {
            Minute.textContent = '0' + TimeMinute
        }
        if(TimeWatch <= 9) {
            Hour.textContent = '0' + TimeHour
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
