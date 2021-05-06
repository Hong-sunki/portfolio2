const header = document.querySelector('#header')
let elHtml = document.querySelector('html')
let deviceSize = 1024;
let elOpen = document.querySelector('#header .open')
let elClose = document.querySelector('#header .close')
let elNav = document.querySelector('#nav')
let elDepth1Li = document.querySelectorAll('.depth1 > li')

function scrollOX(status) {
    elHtml.style.overflowY = status
    let htmlWidth = elHtml.scrollWidth
    return htmlWidth
}

let swh = scrollOX('hidden')
let sws = scrollOX('scroll')
let swd = swh - sws
if (swd > 0) {
    deviceSize = deviceSize - swd
    
}


let ww;
let wh;

function init() {
    ww = window.innerWidth
    wh = window.innerHeight

    if ( ww > deviceSize && !elHtml.classList.contains('pc') ) {
        elHtml.classList.add('pc')
        elHtml.classList.remove('mobile')
        elNav.classList.remove('on')
        elClose.classList.remove('on')
        elHtml.scrollTo(0, 0)
        for ( let q = 0; q < elDepth1Li.length; q++ ) {
            if ( elHtml.classList.contains('pc') ) {
                elDepth1Li[q].classList.remove('on')
            }
        }
    } else if ( ww <= deviceSize && !elHtml.classList.contains('mobile') ) {
        elHtml.classList.add('mobile')
        elHtml.classList.remove('pc')
        elNav.classList.remove('on')
        elOpen.classList.add('on')
        elHtml.scrollTo(0, 0)
        for ( let r = 0; r < elDepth1Li.length; r++ ) {
            if ( elHtml.classList.contains('mobile') ) {
                elDepth1Li[r].classList.remove('on')
            }
        }
    }
    
}

init()

window.addEventListener('resize', function(){
    init()
})



for (let i = 0; i < elDepth1Li.length; i++) {
    elDepth1Li[i].addEventListener('mouseover', function () {
       if ( elHtml.classList.contains('pc') ) {
           this.classList.add('on')
       }
        
    })

    elDepth1Li[i].addEventListener('mouseout', function () {
        if ( elHtml.classList.contains('pc') ) {
        this.classList.remove('on')
        }
    })
    elDepth1Li[i].addEventListener('click', function () {
        if ( elHtml.classList.contains('mobile') ) {
            for ( let k of this.parentNode.parentNode.parentNode.children ) {
                for ( let i = 0; i < k.children[0].children.length; i++ ) {
                    k.children[0].children[i].classList.remove('on')
                }
            }
            this.classList.add('on')
        }
    })
}


let elDepth2Li = document.querySelectorAll('.depth2 > li')
for (let k = 0; k < elDepth2Li.length; k++) {
    elDepth2Li[k].addEventListener('mouseover', function () {
        this.classList.add('on')
    })
    elDepth2Li[k].addEventListener('mouseout', function () {
        this.classList.remove('on')
    })
    elDepth2Li[k].addEventListener('click', function (e) {
        e.stopPropagation()
    })
}


elOpen.addEventListener('click', function () {
    elNav.classList.add('on')
    this.classList.remove('on')
    elClose.classList.add('on')
})

elClose.addEventListener('click', function () {
    elNav.classList.remove('on')
    this.classList.remove('on')
    elOpen.classList.add('on')
    for (let m = 0; m < elDepth1Li.length; m++) {
        elDepth1Li[m].classList.remove('on')
    }
})

const goTop = document.querySelector('.top')
goTop.addEventListener('click', function(e){
    e.preventDefault()
    let sct = window.scrollY
    if ( sct === 0 ) {
        return false
    } else {
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'

        })
    }
})