let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")

let changeImg = () => {
    img1.classList.toggle('img1-new')
    img2.classList.toggle('img2-new')
}


let successAlert = () =>{
    document.querySelector('.success').style.display='block'
        
    setTimeout(() =>{
        document.querySelector('.success').classList.add('success-hide')
    },3000)

    setTimeout(() =>{
        document.querySelector('.success').style.display='none'
        document.querySelector('.success').classList.remove('success-hide')
    },6000)
}


let popupSlide = () =>{
    let popupImages = document.querySelectorAll('.popup-item')

    for (let index = 0; index < popupImages.length; index++) {
        
        setTimeout( () =>{
            
            if (index == 0) {
                popupImages[index].classList.add('img1')
            }
            else{
                popupImages[index].classList.add('img1')
                popupImages[index-1].classList.add('img1')
            }


            if (index ==popupImages.length-1) {
                setTimeout( () =>{
                    popupImages[index].style.display='none'
                    popupSlide()
                }, 3000)
                
            }
        },3000*index)
    }
}

setInterval(changeImg, 3000)

let moreBtn = document.querySelector(".more")
let lessBtn = document.querySelector(".less")

moreBtn.addEventListener('click',()=>{
    let hidden = document.querySelectorAll('.hidden-item')
    for (let index = 0; index < hidden.length; index++) {
        hidden[index].classList.add('visible')       
    }
    moreBtn.classList.add('visible-none')
})

lessBtn.addEventListener('click',()=>{
    let hidden = document.querySelectorAll('.hidden-item')
    for (let index = 0; index < hidden.length; index++) {
        hidden[index].classList.remove('visible')       
    }
    moreBtn.classList.remove('visible-none')
    
})

let smallText= document.querySelector('.small-text1')
let info = document.querySelector('.features-info')

info.addEventListener('click', () =>{
    smallText.classList.toggle('small-text1')
    info.classList.toggle('button-pushed')

})


let name = document.querySelector('.input-name')
let mail = document.querySelector('.input-mail')
let message = document.querySelector('.input-message')
let questionButton = document.querySelector('.question-button')
let rules = document.querySelector('.input-rules')

questionButton.addEventListener('click',()=>{
    if (name.value == '' ) {
        name.classList.add('error')
    }
    else{
        name.classList.remove('error')
    }
    if (mail.value == '' ) {
        mail.classList.add('error')
    }
    else{
        mail.classList.remove('error')
    }
    if (message.value == '' ) {
        message.classList.add('error')
    }
    else{
        message.classList.remove('error')
    }
    

    if (!rules.checked) {
        document.querySelector('.input-rules-text').classList.add('error-text')
    }
    else{
        document.querySelector('.input-rules-text').classList.remove('error-text')
    }


    if (name.value !== '' && mail.value !== '' && message.value !== '' && rules.checked) {
        successAlert()
        name.value = ''
        mail.value = ''
        message.value = ''
        rules.checked = false
        }
})


let exampleBut = document.querySelector('.examples-item-button')


exampleBut.addEventListener('click', ()=>{
    
})


let butClose = document.querySelector('.popup-close')
let popupBg = document.querySelector('.popup-bg')
let butOpen = document.querySelectorAll('.examples-item-button')

let butOpenMain = document.querySelector('.main-button')

butOpenMain.addEventListener('click', ()=>{
    popupSlide()
    popupBg.style.display='block'
})

butOpen.forEach((item) =>{
    item.addEventListener('click',() =>{
        popupSlide()
        popupBg.style.display='block'
    })
})

butClose.addEventListener('click',() => {
    popupBg.style.display='none'
})

let popupBut = document.querySelector('.popup-button')

popupBut.addEventListener('click',() => {
    if (popupInp.value != '') {
        popupBg.style.display='none'
        popupInp.classList.remove('error')
        popupInp.value = ''
        successAlert()
    }
    else{
        popupInp.classList.add('error')
    }
})

let popupInp = document.querySelector('.popup-input')
let value = popupInp.value

popupInp.addEventListener('input', (e) =>{
    let newValue = e.target.value
    if( newValue.match(/[^  0-9]/g)) {
        popupInp.value = value;
        return;
    }
    value = newValue;
})

let menu = document.querySelector('.menu')
let menuBut = document.querySelector('.menu-button')

menuBut.addEventListener('click', () =>{
    menu.classList.toggle('menu-open')
})
