$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 4000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    arrows: false, // 좌우화살표 사용여부(생략가능)
    pauseOnHover: false,
    speed: 800,
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})




$(".slide_group1").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 4000, // 간격시간
    dots: false, // 동그라미버튼
    slidesToShow: 3,
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    arrows: false, // 좌우화살표 사용여부(생략가능)
    pauseOnHover: false,
    speed: 800,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: '<button class="prev"><i class="fas fa-caret-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-caret-right"></i></button>',
    responsive: [{
        breakpoint:769,
        settings: {
            slidesToShow:1,
            centerMode: false,
        }
    }]
})

const header = document.querySelector('#header')
let elHtml = document.querySelector('html')
let deviceSize = 1024;
let elOpen = document.querySelector('#header .open')
let elClose = document.querySelector('#header .close')
let elNav = document.querySelector('#nav')
let elDepth1Li = document.querySelectorAll('.depth1 > li')
let elNav1Li = document.querySelectorAll('.nav1 .depth1 > li')
let elNav2Li = document.querySelectorAll('.nav2 .depth1 > li')


function scrollOX(status) {
    elHtml.style.overflowY = status
    let htmlWidth = elHtml.scrollWidth
    return htmlWidth
}

// function scrollOX(status) {
//     $('html').css({
//         overflowY: status
//     })
//     var htmlWidth = $('html').width()
//     return htmlWidth
// }
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
    
    // if (ww > deviceSize && !$('html').hasClass('pc')) {
    //     $('html').addClass('pc').removeClass('mobile')
    //     $('.depth1 > li').removeClass('on')
    //     $('#header .close').removeClass('on')
    //     $('html').scrollTop(0)
    // } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
    //     $('html').addClass('mobile').removeClass('pc')
    //     $('#header #nav').removeClass('on')
    //     $('.depth1 > li').removeClass('on')
    //     $('#header .open').addClass('on')
    //     $('html').scrollTop(0)
    // }
}

init()

window.addEventListener('resize', function(){
    init()
})

// $(window).on('resize', function () {
//     init()
// })



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
            
            
        //     elDepth1Li[i].classList.toggle('on')
        // for (let j of this.parentNode.children) {
        //     if (j !== this) {
        //         j.classList.remove('on')
        //     }
        // }
        //  $(this).parents('.navi').siblings().find('li').removeClass('on') 
            
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

let elSpan = document.querySelector('.logo span')

elSpan.addEventListener('click', function () {
    this.classList.add('on')
    elNav.classList.add('on')
})

let elLogo = document.querySelector('.logo a')
if (elHtml.classList.contains('pc')) {
    elLogo.addEventListener('click', function () {
        elNav.classList.add('on')
        elSpan.classList.add('on')
    })
}



window.addEventListener('scroll', function(){
    let sct = this.scrollY;
    if ( sct >= 10 && !header.classList.contains('on') ) {
        header.classList.add('on')
        if ( elHtml.classList.contains('pc') ) {
        elNav.classList.add('on')
        }
    } else if ( sct < 10 && header.classList.contains('on') ) {
        header.classList.remove('on')
        if ( elHtml.classList.contains('pc') ) {
            elNav.classList.remove('on')
            }
        
    }
})


// $(window).on('scroll', function () {
//     var sct = $(this).scrollTop()
//     if (sct >= 10 && !$('#header').hasClass('on')) {
//         $('#header').addClass('on')
//     } else if (sct < 10 && $('#header').hasClass('on')) {
//         $('#header').removeClass('on')
//     }
// })

let elArticle3 = document.querySelectorAll('.article3 > a')
for (let p = 0; p < elArticle3.length; p++) {
    elArticle3[p].addEventListener('mouseover', function () {
        elArticle3[p].classList.add('on')
    })
    elArticle3[p].addEventListener('mouseout', function () {
        elArticle3[p].classList.remove('on')
    })
}

let elSlide = document.querySelectorAll('.slide_group1 .slide')
for (let j = 0; j < elSlide.length; j++) {
    elSlide[j].addEventListener('mouseover', function () {
        this.classList.add('on')
    })
    elSlide[j].addEventListener('mouseout', function () {
        this.classList.remove('on')
    })
}


let elTitleLi = document.querySelectorAll('.title > li')
for (let s = 0; s < elTitleLi.length; s++) {
    elTitleLi[s].addEventListener('click', function () {
        this.classList.add('on')
        for (let j of this.parentNode.children) {
            if (j !== this) {
                j.classList.remove('on')
            }
        }
    })
}


let elLia = document.querySelectorAll('.title > li > a')
let elLi = document.querySelectorAll('.cont li')
const showBox = document.querySelector('.showbox')
let showH3 = document.querySelector('.showbox h3')
let showImg = document.querySelector('.showbox img')
let date = document.querySelector('.showbox .showp1')
let ex = document.querySelector('.showbox .showp2') 
let price = document.querySelector('.showbox .showp3')
const showI = document.querySelector('.showbox i')



for (let i = 0; i < elLia.length; i++) {
    elLia[i].addEventListener('click', function (e) {
        e.preventDefault()
        let href = this.getAttribute('href')
        filter(href)
    })
}

function filter(type) {
    for (let j = 0; j < elLi.length; j++) {
        if (elLi[j].classList.contains(type)) {
            elLi[j].style.display = 'block'
            elLi[j].classList.add('active')
        } else {
            elLi[j].classList.remove('active')
            elLi[j].style.display = 'none'
        }
    }
}

for (let p = 0; p < elLi.length; p++) {
    elLi[p].addEventListener('mouseover', function () {
        this.classList.add('on')
    })
    elLi[p].addEventListener('mouseout', function () {
        this.classList.remove('on')
    })
    elLi[p].addEventListener('click', function(){
        showBox.style.display = "flex"
    })
}
showI.addEventListener('click', function(){
    showBox.style.display = "none"
})


//ajax
let xhr = new XMLHttpRequest()


xhr.open('GET', 'travel.json', true)
xhr.send()



xhr.onload = function(){
    if ( xhr.status === 200 ) {
        let data = JSON.parse(xhr.responseText) 
        for ( let w in elLi ) { 
            
            elLi[w].addEventListener('click', function(e){  
                e.preventDefault()
                    Price = data[w].Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    showH3.textContent = `${data[w].area}`
                    let imgSrc = `${data[w].Photo}`
                    showImg.setAttribute('src', imgSrc)
                    date.textContent = `${data[w].Period}`
                    ex.textContent = `${data[w].Explanation}`
                    price.textContent = `${Price} 원 ~`
                    
        })
        }
        

    } else {
        alert('오류발생 또는 통신장애')
    }
}

// xhr.addEventListener('DOMContentLoaded', function(){
//     if ( xhr.status === 200 ) {
//         let data = JSON.parse(xhr.responseText) 
//         for ( let w in elLi ) { 
//             elLi[w].addEventListener('click', function(e){  
//                 e.preventDefault()
//                     Price = data[w].Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//                     showH3.textContent = `${data[w].area}`
//                     let imgSrc = `${data[w].Photo}`
//                     showImg.setAttribute('src', imgSrc)
//                     date.textContent = `${data[w].Period}`
//                     ex.textContent = `${data[w].Explanation}`
//                     price.textContent = `${Price} 원 ~`
                    
//         })
//         }
        

//     } else {
//         alert('오류발생 또는 통신장애')
//     }
// })

let elInrcentera = document.querySelector('.inrcenter > a')
elInrcentera.addEventListener('mouseover', function () {
    this.classList.add('on')
})
elInrcentera.addEventListener('mouseout', function () {
    this.classList.remove('on')
})

let elSns = document.querySelectorAll('.sns a')
for (let a = 0; a < elSns.length; a++) {
    elSns[a].addEventListener('mouseover', function () {
        elSns[a].classList.add('on')
    })
    elSns[a].addEventListener('mouseout', function () {
        elSns[a].classList.remove('on')
    })
}

// $('.top').on('click', function (e) {
//     e.preventDefault()
//     let sct = $(window).scrollTop()
//     if (sct === 0) {
//         return false
//     } else {
//         $('html').animate({
//             scrollTop: 0
//         }, 1000)
//     }
// })


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











const article2 = document.querySelector('.article2')
const article5 = document.querySelector('.article5')
const article6 = document.querySelector('.article6')
const article2Near = document.querySelector('.article2').offsetTop - (wh/2 + 300)
const article5Near = document.querySelector('.article5').offsetTop - (wh/2 + 300)
const article6Near = document.querySelector('.article6').offsetTop - (wh/2 + 300)

window.addEventListener('scroll', function(){
    let sct = this.scrollY;
    if ( sct >= article2Near ) {
        article2.classList.add('on')
    } else if ( sct === 0 ) {
        article2.classList.remove('on')
    }

    if ( sct >= article5Near ) {
        article5.classList.add('on')
    } else if ( sct === 0 ) {
        article5.classList.remove('on')
    }

    if ( sct >= article6Near ) {
        article6.classList.add('on')
    } else if ( sct === 0 ) {
        article6.classList.remove('on')
    }
})





// $(window).on('scroll', function(){
//     let sct =  $(this).scrollTop()
//     if ( sct >= article2Near  ) {
//         $('.article2').addClass('on')
//     } else if ( sct === 0 ) {
//         $('.article2').removeClass('on')
//     }

//     if ( sct >= article5Near  ) {
//         $('.article5').addClass('on')
//     } else if ( sct === 0 ) {
//         $('.article5').removeClass('on')
//     }

//     if ( sct >= article6Near  ) {
//         $('.article6').addClass('on')
//     } else if ( sct === 0 ) {
//         $('.article6').removeClass('on')
//     }
// })

