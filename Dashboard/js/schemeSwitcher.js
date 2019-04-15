// Switch Scheme Dark / Light
let switcher = document.querySelector('.scheme--switcher img')

switcher.addEventListener('click', function (){

    if(switcher.classList.contains('sun')){
        // Switch Image
        switcher.classList.replace('sun','moon')
        switcher.src = "img/icons/switch--night.png"

        // New CSS
        let head = document.head
        let link = document.createElement("link")
        link.type = "text/css"
        link.rel = "stylesheet"
        link.href = "css/style__light.css"
        head.appendChild(link)

    } else if(switcher.classList.contains('moon')){
        // Switch Image
        switcher.classList.replace('moon','sun')
        switcher.src = "img/icons/switch--light.png"

        // Remove CSS
        let oldLink = document.head.lastChild
        document.head.removeChild(oldLink)
        console.log('test2')
    }
})
