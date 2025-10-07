let Sun = document.getElementById('Sun')
let Moon = document.getElementById('Moon')
let title = document.getElementById('title')

Sun.onclick = () => {
    Sun.style.display = 'none'
    Moon.style.display = 'block'
    document.body.style.backgroundColor = 'black'
    title.style.background = 'linear-gradient(90deg , black , rgb(131, 131, 131))'
    title.style.color = 'white'
    title.style.border = '1px white solid'
    title.textContent = '!دارک مود فعال'
    Sun.style.transition = '1s'
    Moon.style.transition = '1s'
    document.body.style.transition = '1s'
    title.style.transition = '1s'
}

Moon.onclick = () => {
    Moon.style.display = 'none'
    Sun.style.display = 'block'
    document.body.style.backgroundColor = 'white'
    title.style.background = 'linear-gradient(90deg, white, rgb(202, 202, 202))'
    title.style.color = 'black'
    title.style.border = '1px black solid'
    title.textContent = '!دارک مود غیرفعال'
    Sun.style.transition = '1s'
    Moon.style.transition = '1s'
    document.body.style.transition = '1s'
    title.style.transition = '1s'
}