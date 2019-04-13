// Your code goes here


//Variables 

const allPage = document.querySelector('html')
const head = document.querySelector('header')
const foot = document.querySelector('footer')
const clickers = document.querySelectorAll('.btn')
const banner = document.querySelector('.bannerBus')





//Event Listeners 

1. //Dark Mode 
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

