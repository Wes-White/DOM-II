// Your code goes here


//Variables 

const allPage = document.querySelector('html')
const head = document.querySelector('header')
const foot = document.querySelector('footer')
const clickers = document.querySelectorAll('.btn')
const banner = document.querySelector('.bannerBus')
const pixs = document.querySelectorAll('img')





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

2. //Buttons change color when clicked 
 clickers.forEach(click => { 
     click.addEventListener('click', function (event) { 
        click.style.backgroundColor = 'red'
        })
})

3. //Hide Banner 
banner.addEventListener('dblclick', (event)=> { 
    banner.style.display = 'none'
})

4. //Change Banner to boom-bus
banner.addEventListener('mouseover', (event) => { 
    banner.setAttribute('src', 'img/boom-bus.jpg')
})
   
