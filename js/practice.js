
// vidoe 2:

// My code : JS code
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }


//   const linkEl = document.querySelectorAll(".header a")

  
// linkEl.forEach((e)=>{
//     let classN = ["."]
//     e.addEventListener("click",(ee)=>{
//         Array.from(ee.target.innerText).forEach((e1)=>{
//             if(e1 != " "){
//                 classN.push(e1)
//             }else{
//                 classN.push("-")
//             }
//         })
//         window.scrollTo({
//             top:document.querySelector(classN.join("")).offsetTop,
//             "behavior":"smooth"
//         })
//     })
// })

// Elzero Code : jquery code


$(function () {

'use strict';


// video 3:
///////////////
// Calculater body padding top depend on navbar height 
$('body').css('paddingTop', $('.navbar').innerHeight() + 10)
//////////////

// video 1:
/////////////////////////////
// smoothly scroll to element
$('.navbar li a').click(function(e){
    e.preventDefault()
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top + 1 //+1 remomber for know why
    },1000)
    window.console.log($(this).data('scroll'))
})
/////////////////////////////////

// video 4:
///////////////////////////////////
// remove active to all siblings and add it in that one click

// main code with js
// document.querySelectorAll(".navbar li a").forEach((e)=>{
//     e.addEventListener("click",(e1)=>{
//         document.querySelectorAll(".navbar li a").forEach((e2)=>{
//             e2.classList.remove("active")
//         })
//         e1.target.classList.add("active")
//     })
// })

// Elzero code with jquery
$('.navbar li').click(function() {
    $(this).addClass('active').siblings().removeClass('active')
})
// if you use my code in css [.navbar li a.active{color: red;}] 
// =>
// $('.navbar li').click(function() {
//     $(this).addClass('active').parent().siblings().find('a').removeClass('active')
// })
// or 
// =>
// $('.navbar a').click(function() {
// $('.navbar a').removeClass('active')
//     $(this).addClass('active')
// })
/////////////////////////////////

// video 5:
///////////////////////////////////////
// if you scrolling the active stell in the last link that you clicked in
// my code with js

// const all_block = document.querySelectorAll(".block")
// window.onscroll = ()=>{
//     all_block.forEach((e)=>{
//         if(e.offsetTop<window.scrollY){
//             document.querySelectorAll(".navbar li a").forEach((ee)=>{
//                 ee.parentElement.classList.remove("active")
//                 if(ee.dataset.scroll == e.id){
//                     ee.parentElement.classList.add("active")
//                 }
//             })
//         }
//     })
// }
// my code in jquery

// elzero code :

///////////////////////////////////////
// video 5 + 6 =>her
$(window).scroll(function (){
    $('.block').each(function (){
        if($(window).scrollTop()>$(this).offset().top){//+1 help us her
            const id_and_data = $(this).attr('id')
            $('.navbar li a').removeClass('active')
            $('.navbar li a[data-scroll ="' + id_and_data + '"]').addClass('active')
        }
    })

    if($(window).scrollTop()>$('#services').offset().top){
            // $(".scroll-to-top").css("display","block")
            $(".scroll-to-top").fadeIn(400)//is better
            
        }else{
            // $(".scroll-to-top").css("display","none")
            $(".scroll-to-top").fadeOut(400)//is better
            }
    })

// video 7 + 8:
//////////////////////////////////////////////////////////////////////////////
//when you scroll to bottom show the the fontAwesome and when you click at it back to top
// my code with js

// window.onscroll =()=>{
//     if(window.scrollY>document.querySelector("#services").offsetTop){
//         document.querySelector(".scroll-to-top").style.display = "block"
//     }else{
//         document.querySelector(".scroll-to-top").style.display = "none"
//     }
// }
// document.querySelector(".scroll-to-top").onclick = (e)=>{
//     e.preventDefault()
//         window.scrollTo({
//             top:0,
//             "behavior":"smooth"
//         })
// }


// my code with jquery
       $('.scroll-to-top').click(function(e){
        e.preventDefault()   
        $('html, body').animate({
            scrollTop:0
        },1000)    
       }) 
       

//for know is the element hidden or not
// var scrollToTop = $('.scroll-to-top');
// $(window).scroll(function(){
//         if(scrollToTop.is(':hidden')) {
//             console.log(scrollToTop + ' Is Hidden ')
//         }else{
//             console.log('scroll to top element is not hidden so I cant fadeIn this element')
//         }
// })
//////////////////////////////////////////////////////////////////////////////

// video 9 + 10 :
// my js code

const father_pop_up = document.querySelector(".father-pop-up")

// const button_show = document.querySelector("#about-us button")

// const button_close = document.querySelector(".pop-up button")

// window.onclick = (e)=>{

//     if(e.target.className == "show btn0"){

//         father_pop_up.style.display = "block"
        
//     }
    
//     if(e.target.className == "close"){

//         father_pop_up.style.display = "none"
        
//     }
    
//     if(e.target.className == "father-pop-up"){

//         father_pop_up.style.display = "none"
        
//     }
    
// }

// my jquery code

// $('.show').click(function (){

//    $('.father-pop-up').fadeIn(400)

// })

// $('.close').click(function (){

//    $('.father-pop-up').fadeOut(400) 

// })

// })


// elzero jquery code => 

// $('.show').click(function (){

//    $('.father-pop-up').fadeIn()

// })

// $('.father-pop-up').click(function (){

//    $(this).fadeOut()

// })

// $('.pop-up').click(function (e){

//   e.stopPropagation()//man3 al2intichar 3ala 'pop-up'
  
// })

// $('.close').click(function (e){
    
//     e.preventDefault()
    
//     $('.father-pop-up').fadeOut()
    
// })

// video 11:
// if you have so many pop-up and button  

$('.btn1').click(function(){

    $('.first-father-pop-up').fadeIn()  

})


$('.btn2').click(function(){

    $('.second-father-pop-up').fadeIn()  

})

//point commun with all pop-up
$('.father-pop-up').click(function (){

   $(this).fadeOut()

})

$('.pop-up').click(function (e){

  e.stopPropagation()//man3 al2intichar 3ala 'pop-up'
  
})

$('.pop-up .close').click(function (e){
    
    e.preventDefault()
    
    $(this)
    .parentsUntil('.father-pop-up')//parentsUntil() => it 
    .parent().fadeOut()

})

// hide pop-up with escape key 

$(document).keydown(function(e){
    
    if(e.keyCode == 27){// keyCode ==27 => 27 give us Esc in clavie [top:0,left:0 => in clavie]

        $('.pop-up').fadeOut()
        
    }

})


// $(".download").hover(function(){
//     $(this).css("color","red")
//     $("p").hide()
// })


// video 12:

// my code with js

// let e=0

// up_width(e)
// function up_width (e,down){
//     document.querySelector(".download").
//     onmouseenter = ()=>{
//         let i=e
//         if(i>0){
//             clearInterval(down)
//         }
//         let up_counter = setInterval(()=>{   
//             if(i<100 && i>=0){
//                 console.log(i)
//                 document.querySelector(".download span").
//                 style.width = `${i++}%`
//                 back_width(i,up_counter)
//             }
//         },1)
//     }
// }

// function back_width (e,up){
//     document.querySelector(".download").
//     onmouseleave = ()=>{
//         clearInterval(up)
//         let down_counter = setInterval(()=>{
//             if(e>0){       
//                 console.log(e)
//                 document.querySelector(".download span").
//                 style.width = `${e--}%`
//                 up_width(e,down_counter)  
//             }
//         },1)
//     }
// }


// my code with jquery
// $('.download').mouseenter(   
//     function(){
// $(".download span").animate({width:`100%`},100)
// })

// $('.download').mouseleave(
//     function(){
// $(".download span").animate({width:`0%`},100)
// console.log("22")
// }
// )

// elzero stratiger

    $('.download').hover(function (){
    
        // $(this).find('span').eq(0).animate({// I don't know why it doesn't work
        $('.download span').animate({
    
            width: '100%'
        
        },100)
    
        
        }, function () {
        
            // $(this).find('span').ep(0).animate({// I don't know why it doesn't work
        $('.download span').animate({
               
            width: 0
            
        },100)
    
    })

    // vidoe 13: 
    // is the same with width

    // elzero code

    $('.download_').hover(function (){
        // $(this).find('span').eq(0).animate({// I don't know why it doesn't work
        $('.download_ span').animate({
            height: '100%'
        },100)
        }, function () {
            // $(this).find('span').ep(0).animate({// I don't know why it doesn't work
        $('.download_ span').animate({
            height: 0
        },100)
    })


// video 14:

// my js code
// let i=0

// up_counter_(i)

// function up_counter_(i,down){
    
//     document.querySelector(".download__").
//     onmouseenter = ()=>{
//     if(i>0){
//         clearInterval(down)
//     }
//     let up_counter = setInterval(()=>{
//         if(i>=0 && i<100){
//             document.querySelector(".download__ span")
//             .style.width = `${i++}%`
//             console.log(i)

//             down_counter_(i,up_counter)
//         }
        
//     },10)
// }
// }

// function down_counter_(e,up){
// document.querySelector(".download__").
// onmouseleave = ()=>{
//     clearInterval(up)
//     let down_counter = setInterval(()=>{
//         if(e>0){
//             document.querySelector(".download__ span")
//             .style.width = `${e--}%`
//             up_counter_(e,down_counter)
//             console.log(e)
//         }
       
//     },10)
// }

// }


// my jquery code:
//  and also elzero code

$('.download__').hover(function(){
    $('.download__ span').animate({
        width:'100%'
    },500)
},function(){   
    $('.download__ span').animate({
        width:0
    },500)
})


$('.download___').hover(function(){
    $('.download___ span').animate({
        height:'100%'
    },500)
},function(){   
    $('.download___ span').animate({
        height:0
    },500)
})

// video 16 + 17:

// my js code

// const all_father_span = document.querySelectorAll(".father span")

// all_father_span.forEach((e)=>{
//         e.style.width = `${e.dataset.porcent}%`
//    })

//    let i=0
//    setTimeout(()=>{
//        all_father_span.forEach((e)=>{
//                console.log(e.dataset.porcent)
//                e.style.width = `${e.dataset.porcent}%`
//                e.innerText = `${e.dataset.porcent}%`
//           })
//     console.log(i++)
//    },1500)


// my jquery code

// $('.father span').each(function (){
//     $(this).animate({width:`${$(this).data('porcent')}%`},1000)
//     $(this).html(`<i>${$(this).data('porcent')}%</i>`)
// })
// $('.father span i').animate({
//     opacity:1
// },2000)

// elzero Idea
$('.father span').each(function (){
    $(this).animate({
        width:`${$(this).data('porcent')}%`}
     ,1000,
    function(){
         $(this).text(`${$(this).data('porcent')}%`)
    })
    })

// video 18 + 19 :
// my js code
// document.querySelector(".bigest-father").style.transition = '1s all'
// document.querySelector(".setting-container").style.transition = '1s all'
// document.querySelector(".setting-container .icon-father").onclick = (e)=>{
//     document.querySelector(".bigest-father").classList.toggle("left")
//     document.querySelector(".setting-container").classList.toggle("left")
// }

// my code with jquery

$('.setting-container .icon-father').click( function (){
    $('.setting-container').toggleClass("left")
    $('.bigest-father').toggleClass("left")
})

// elzero code

// go to video 
//!!! he word with padding not like me => I work with father-element and transition

// video 20:


const all_colors = document.querySelectorAll(".setting-container .colors span")
all_colors.forEach((e)=>{
    e.onclick = ()=>{
        document.querySelectorAll(".block h2").forEach((e1)=>{
            e1.style.backgroundColor = `${e.dataset.color}`
            e1.style.color = `white`
        })
    }
})


// if you add any class to any element in htlm => change 'background-color and color' 
// with methode denamique like framework


// video 21 22 23 24 :

// my js code
// I do three solution => this and 2 in js Practice

// let n=0
// let all_small_img = document.querySelectorAll(".small-photos img")
// let icon1 = document.querySelectorAll(".icon1")
// let icon2 = document.querySelectorAll(".icon2")
// let all_small_img_Arry = Array.from(document.querySelectorAll(".small-photos img"))
// let all_big_img = document.querySelectorAll(".big-photos img")
// let all_big_img_Arry = Array.from(document.querySelectorAll(".big-photos img"))
// window.addEventListener("click",(e)=>{
//     if(e.target.classList=="img"){
//         n=Array.from(all_small_img).indexOf(e.target)
//         all_operation(n)
//     }
//     if(e.target.classList=="fa fa-chevron-up i1"){
//         if(n<all_small_img.length-1){
//             n= the_X() + 1 
//             all_operation(n)
//         }
//     }
//     if(e.target.classList=="fa fa-chevron-up i2"){
//         if(n>0){
//             n = the_X() - 1
//             all_operation(n)
//         }
//     }
// })
// function the_X(){
//     return n
// }
// function all_operation(n){
//     all_small_img.forEach((e)=>{
//         e.classList.remove("active")
//     })
//     all_big_img.forEach((e)=>{
//         e.classList.remove("active")
//     })
//     all_small_img_Arry[n].classList.add("active")
//     all_big_img_Arry[n].classList.add("active")
// }

// my jquery code 

// $(".small-photos img").click(function(){
//     $(this).addClass('active').siblings().removeClass('active')
//     $('.' + $(this).data('img')).addClass('active').siblings().removeClass('active')
// })
// $(".i1").click(function(){
//   $('.active').next().addClass('active').siblings().removeClass('active')
// })
// $(".i2").click(function(){
//   $('.active').prev().addClass('active').siblings().removeClass('active')
// })


// Elzero code
// elzero work with src of image not like me => I work with data-img [so elzero work with one img in big-images jus changing the src]
// remarque!!! 

// you should to make the photos dynamique because if the client add or remove img from the small-img achakl yosbih 3achwa2i
var numOfSmallImgs = $('.small-photos').children().length,
// you can choose what you want in margin
marginBetweenSmallImgs = '.5',
// the value of single margin (we ignored the last one because margin-right)
totalMarginBetweenSmallImgs = (numOfSmallImgs - 1) * marginBetweenSmallImgs,
// the width of any single img
smallImgsWidth = (100 - totalMarginBetweenSmallImgs)/numOfSmallImgs
$(".small-photos img").css({
    'width' : smallImgsWidth + '%',
    'margin-right' : marginBetweenSmallImgs + '%'
})
$(".small-photos img").click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    // hide() and fadeIn() for making an animation to big img but I prefer opacity to do it because it is so smooth
    $('.big-photos img').hide().attr('src',$(this).attr('src')).fadeIn(900)
})
$('.big-photos .i1').on('click',function(){
    if($(".small-photos .active").is(':last-child')) {
        // miking the same to first child 
        $('.small-photos img').eq(0).click()
    }else{
        $(".small-photos .active").next().click()
    }
})

$('.big-photos .i2').on('click',function(){
    if($(".small-photos .active").is(':first-child')) {
        // miking the same to first child 
        $('.small-photos img:last').click()
    }else{
        $(".small-photos .active").prev().click()
    }
})


// video 25:
// my jquery code

// $('.icon_').click(function(){
//     $(this).children().fadeToggle(500)
//     $(this).siblings().slideToggle(500)
// })

// elzero jquery code
$('.icon_ i, .chose-container .item.father-of-produce1 i').click(function(){
    $(this).toggleClass('fa-plus')
    $(this).toggleClass('fa-minus')
    $(this).parent().siblings().slideToggle(500)
})

// video 26 + 27:
// $('.chose-container .i_1,.chose-container .i_2').click(function(){
//     $('.chose-container .i_1,.chose-container .i_2').toggleClass('active')
//     $('.chose-container .father-of-produce').toggleClass('hidden')
//     $('.chose-container .container-product').toggleClass('hidden')
// })
// Elzero code
// I can do this easy with js
$('.view-option i').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.item').removeClass('container-product1 father-of-produce1').addClass($(this).data('class'))
})

// video 28 :

// my js code
// document.querySelector(".message-error").style.transition = '2s all;'
// setInterval(function(){
//     document.querySelector(".message-error").style.right = '20px'
// },2000)

// my code//
// is also elzero code but he add 'each' becouse all the Error message fade out [if you add the same class to all of them]

$('.message-error').animate({
    right : '20px'
},1000,
function(){
    $(this).delay(2000).fadeOut()
})

// video 29:
// elzero code and my code
// hide placeholder On focus and restore on blur
$(window).load(function(){
    $('[placeholder]').css('outline','none')
})

var placeAttr = ''

$('[placeholder]').focus(function(){
    placeAttr = $(this).attr('placeholder')
    $(this).attr('placeholder','')
}).blur(function(){
    $(this).attr('placeholder',placeAttr)
    // Elzero code and my jquery code
    if($(this).val()==''){
        // $(this).siblings().fadeIn().delay(2000).fadeOut()
        // or
        $(this).next('span').fadeIn().delay(2000).fadeOut()
    }
})
// video 31:
// elzero code
// console.log($('input[required]'))
// :input => any input form // even textarea considere input 
// if you use 'input' without ':' it mean just element input  
$('<span class="asterisk">*</span>').insertBefore(':input[required]')

$('.asterisk').css({
    position: 'absolute',
    left: $(':input[required]').width()+5,
    top:'5px',
    fontWeight:'bold',
    color: 'red'
})
// video 32+33:
// elzero code
// learn new thing in input so I use only elzero code 
// input type file =>  you can not acces him with css

// I add the parent to input for adding css to parent and in the same time I use the behvior of input type file  
$('.our-form input[type=file]').wrap('<div class="custom-file"></div>')
$('.custom-file').prepend('<span>Upload Your Files</span>')
$('.custom-file').append('<i class="fa fa-upload aria-hidden="true"></i>')
$('.our-form input[type="file"]').change(function(){
    $(this).prev('span').text($(this).val())
})
// video 34:
// elzero code
// every keyboard has his own code and when you want
// I try it in the first input ===> compare with second input
$('.detect-unicode').on('keyup',function(event){
    var keyboardKey = event.keyCode || event.which
    $('.unicode').html('The Unicode for the key you pressed is : '+keyboardKey)
})
// video 35:
// elzero code
// charCodeAt()
// in W3Scool you will found chareCodeAt() can give you => (code of each keyboard => it's false ) but he is give us american stundard code
// I try it in the second input ===> compare with first input

// change the direction of writing inside input when you change longuage => like arabic longuage


$('.auto-direction').on('keyup',function(){
    $('.american-standard').html('american-standard for the key you pressed is : '+$(this).val().charCodeAt($(this).val().length-1))
    // he compare from the first letter number 0 inside charCodeAt()=> charCodeAt(0) 
    if($(this).val().charCodeAt(0)<200){
        $(this).css('direction','ltr')
    }else{
        $(this).css('direction','rtl')
    }
})
// video 36: 
// elzero code-
// explain why use 200 in the condition video 35  

var english = 'abcdefghijqlmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
,
text = ''

for(var i=0; i<english.length;i++){
    text += english.charCodeAt(i) + '<br>'
} 

$('.american-standard-why-200').html(text)
// video 38:
//  alkalimat almiftahiya 
// my code
// $('.our-form form div .type-words').on('keyup',function(){
//     if($(this).val()[$(this).val().length-1]==','){
//         var theWord = $(this).val().split('').filter(function(e){
//             return e!=','
//         }).join('')
//         console.log(theWord)
//         $('.our-form form .open-words').append(`<span class="word"><i class="fa fa-times"></i>${theWord}</span>`)
//         $(this).val('')
//         $('.open-words .word i').click(function(){
//             $(this).parent().fadeOut(500)
//         })
//     }
// })
// elzero code 
$('.our-form form div .type-words').on('keyup',function(e){

    var keyboardKey = e.keyCode || e.which

    if(keyboardKey == '188'){

        var thisValue = $(this).val().slice(0,-1)
        
        $('.our-form form .open-words').append(`<span class="word"><i class="fa fa-times"></i>${thisValue}</span>`)
        
        $(this).val('')
        
    }
})

// you schould to do this not like => becouse .word is not exist and her you tell the programe => after the click search for '.word i'

$('.our-form form .open-words').on('click','.word i',function(){
    $(this).parent().fadeOut(500)
})

// video 39:
// I see elzero code and I try to do it only
// he practice on function

function trimText(selector,maxLength){

$(selector).each(function(){
    if($(this).text().length > maxLength){
        var trimmedText = $(this).text().substr(0,maxLength)
        $(this).text(trimmedText + '....')
    }
})
}

// you can chose one paragraph or two or....
trimText('.texts .p',100)

// try this ==>>

// trimText('.texts .p-one',100)
// trimText('.texts .p-two',200)
// trimText('.texts .p-three',300)

// video 40:

// elzero code => I do my try I don't finish it
// if you want do many animate at the same selector and whda ktsna whda

function animate_(element,times,distance,speed){
    for(var i=0;i<times;i++){
        element.animate({    
            marginTop: `+=${distance}px`
        },speed).animate({
            marginTop: `-=${distance}px`
        },speed)
    }
}
$('.btn1_ ,.btn2_').click(function(){    
    animate_($(this),3,20,400)
})

// video 42:
// my code

// var TheHeight = 0
// function bigest_height (selectors){
// selectors.each(function(n){
//     if($(selectors[1]).height()<$(this).height()){
//          TheHeight = $(this).height()
//     }
//     if(TheHeight == 0){
//         TheHeight = $(this).height()
//     }
//     if(n==selectors.length-1){
//         selectors.each(function(){
//             $(this).height(TheHeight)
//             console.log(TheHeight)
//         })
//     }
// })


// }

// bigest_height($('.heigh-text p'))


// elzero code

var theMaxHeight = 0

$('.heigh-text p').each(function(){
    if($(this).height()>theMaxHeight){
        theMaxHeight = $(this).height()
    }
})

$('.heigh-text p').height(theMaxHeight)

// video 43:
var i = 0
// is my code and elzero code => the problem is with z-index of children and father
$('.z-index-divs-father div').click(function(){
    i--
    $(this).animate({
        right: '235px',
        top: '50px'
        },100,function(){
            // console.log(i)
            $(this).css('z-index',i)
            // trigger the z-idex inside the items
            if($('.z-index-divs-father div').length == -i){
                if($('.z-index-divs-father div').length == -i){
                    i=0
                    $('.z-index-divs-father div').each(function(n1){
                        $(this).css('z-index',n1)
                    })
                }
            }
        }
        ).animate({
    right: $(this).css('right'),
    top: 0
},100)
})

// $('.z-index-divs-father div').each(function(n){
//     $(this).click(function(){
//         $(this).css('z-index',--i)
//        
//         
//     })
//     $(this).css('z-index',n)
// })        

// video 44
// my code 

// setInterval(function(){
//     $('.warning').fadeToggle(1000)
// },1000)

// elzero code

blinkWarning()

function blinkWarning(){
    $('.warning').fadeOut(1000,function(){
        $(this).fadeIn(1000)
        blinkWarning()
    })
}
// video 45+ 46:
// elzero code

$('.to-do-list .adding-place').click(function(e){
    e.stopPropagation()
})

$('.to-do-list form').on('submit',function(e){
    e.preventDefault()// remove the commentaire and try
    if($('.to-do-list input').val()!=''){
        $('.adding-place').append(`<div class='my-add'>${$(".to-do-list input").val()}</div>`)
        $('.to-do-list input').val('')
        $('.to-do-list input').focus()
    }
})


$('.to-do-list .adding-place').on('click','.my-add',function(){
    $(this).addClass('crocher').css('text-decoration','line-through').delay(200).fadeOut(400)
})

//video 47:
//my code:
var i1=0
var data_text =$('.typing-denamique-text').data('text')
var count_text = setInterval(function(){
    i1++
    if(i1 != data_text.length-1){
        $('.typing-denamique-text').append(data_text[i1])
}else{
        clearInterval(count_text)
    }
},10)

// elzero code
// var n=0
// var data_text =$('.typing-denamique-text').data('text')
// var count_text = setInterval(function(){
//     $('.typing-denamique-text').each(function(){
//         $(this).html($(this).html() + data_text[n])
//     })
//     n++
//     if(n>=data_text.length){
//         clearInterval(count_text)
//     }
// },100)

// video 48:
// my code: 

// var somme=0

// $('table tr:last-child').siblings()
// .children(":last-child").not('th').each(function(){
//     somme= somme+parseInt($(this).text())
// })
// $('.end').siblings().text(somme)
// $('.end').siblings().css('color','red')

// elzero code 
// he work with class
var theSummary= 0

$('.price').each(function(){
    theSummary += parseInt($(this).text())
})
$('.total').text(theSummary)


// video 49:
// my code:
// code 3 is near
// var k=1
//  setInterval(function(){
//     if(k<=$('.father__ .discription').length){
//         // code 1
//         // $(`.father__ .discription:nth-child(${k++})`)
//         // .addClass('active1').siblings().removeClass('active1')
//         // code 2
//         // this code in comment for fadeIn() => !!but it not work with me becouse fade add style inside baliz so is the last thing that css found and we have no tools for remove it go to inspect and see
//         // $(`.father__ .discription:nth-child(${k++})`).removeClass('non-active')
//         // .fadeIn(300).siblings().addClass('non-active')
//         // code 3
//         $(`.father__ .discription:nth-child(${k++})`)
//         .fadeIn(300).fadeOut(300)
//     }else{
//         k=1
//     }
// },2000)

// elzero code
// hbast lcode hitach kayhbas liya lcode
// (function autoChange() {
//     $('.father__ .active2').each(function(){
//         if(! $(this).is(':last-child')){
//             $(this).delay(1000).fadeOut(1000,function(){
//                 $(this).removeClass('active2').next().addClass('active2').fadeIn()
//                 autoChange()
//             })
//         }
//         else{
//             $(this).delay(1000).fadeOut(1000,function(){
//                 $(this).removeClass('active2')
//                 $('.father__ .discription').eq(0).addClass('active2').fadeIn()
//                 autoChange()
//             })
//         }
//     })
// }())

// video 50 + 51 :
// my code:

// $('.smart-view').click(function(){
//     $('.change-content-parent').toggleClass('a')
//     $('.change-content-parent .control-button').toggleClass('b')
//     $('.change-content-parent .the-content').toggleClass('c')
// })


// $('.control-button .button-class').click(function(){
//     $(`.${$(this).data('number')}`).siblings().fadeOut()
//     $(`.${$(this).data('number')}`).delay(400).fadeIn()
// })

// elzero code:
// hide is quick so after the hide the fadeIn comme so smooth without need =>'delay'
$('.control-button .button-class').click(function(){
    $('.the-content > div').hide()
    $(`.${$(this).data('number')}`).fadeIn()
})

// I use my code becouse is the same idea he togle class
$('.smart-view').click(function(){
    $('.change-content-parent').toggleClass('a')
    $('.change-content-parent .control-button').toggleClass('b')
})

// video 52 + 53 :
// elzero code
var emailProviders = ['gmail.com','hotmail.com','outlook.com','yahoo.com']
,finalString = ''

$('.email-suggest').on('keyup', function(){
    finalString = ''
    if(! $(this).next().is('.suggest-box')){
        $('<ul class="suggest-box"></ul>').insertAfter($(this))
    }
    
    for(var i=0;i<emailProviders.length;i++){
        finalString += '<li>' + $(this).val() + '@' + emailProviders[i] + '</li>';
    }
    $('.suggest-box').html(finalString)
})

$('body').on('click','.suggest-box li', function(){
    $('.email-suggest').val($(this).text())
    $(this).parent().fadeOut(300)
})









})
