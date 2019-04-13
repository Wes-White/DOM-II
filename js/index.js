// Your code goes here


//Variables 

const allPage = document.querySelector('html')
const head = document.querySelector('header')
const foot = document.querySelector('footer')
const clickers = document.querySelectorAll('.btn')
const banner = document.querySelector('.bannerBus')
const pixs = document.querySelectorAll('.img')
const anchors = document.querySelector('.nav, a')





//Event Listeners 

1. // Dark Mode 
allPage.addEventListener('keydown', function(event){
    if(event.key == 'd'){ 
    allPage.style.backgroundColor = 'black'
    foot.style.backgroundColor = 'black'
    head.style.backgroundColor = 'black'
    allPage.style.color = 'white'
    alert('Press w for Default Page')
    }   
    
    if(event.key == 'w'){ 
        allPage.style.backgroundColor = 'white'
        foot.style.backgroundColor = 'white'
        head.style.backgroundColor = 'white'
        allPage.style.color = 'black'
        alert('Press d for DarkMode')
    }

})

2. // Buttons change color when clicked 
 clickers.forEach(click => { 
     click.addEventListener('click', function (event) { 
        click.style.backgroundColor = 'red'
        })
})

3. // Hide Banner 
banner.addEventListener('dblclick', (event)=> { 
    banner.style.display = 'none'
})

4. // Change Banner to boom-bus
banner.addEventListener('contextmenu', (event) => { 
    banner.setAttribute('src', 'img/boom-bus.jpg')
})
   
5. // Disappering images with mouseleave
pixs.forEach(image => { 
    image.addEventListener('mouseleave', function(event){ 
        image.style.display = 'none'
        console.log('What did you do to the pictures??')
    })
})

6. // Nav Anchors Talk With a Click 
anchors.addEventListener('click', (event) => {
 alert("Ouch!! why did you poke me?")
})

7. //Log to Console when Window is Resized. 
window.addEventListener('resize', (event) =>{
    console.log('I hope this is Responsive....')
})

8. // Hide Text 
allPage.addEventListener('keyup', function(event){ 
    // let backDrop = 
    if(event.key == 't'){ 
        allPage.style.color = 'white'
        alert("Where's the text?")
    }
})

9. // Alert User on Load 
window.addEventListener('load', function (event){ 
    alert("check out www.thebussauce.com for secret featurs of this site.")
})

10. // 