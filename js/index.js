// Your code goes here


//Variables 

const allPage = document.querySelector('html')
const head = document.querySelector('header')
const foot = document.querySelector('footer')
const clickers = document.querySelectorAll('.btn')
const banner = document.querySelector('.bannerBus')
const pixs = document.querySelectorAll('img')
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
banner.addEventListener('mouseover', (event) => { 
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
anchors.addEventListener('click', (object) => {
 alert("Ouch!! why did you poke me?")
})

7. //Log to Console when Window is Resized. 
window.addEventListener('resize', (object) =>{
    console.log('I hope this is Responsive....')
})
    