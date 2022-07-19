let y=1
let x=1
let img=document.getElementById('move')
let jump=document.getElementById('audio')
let over=document.getElementById('gameover')

function locationreload() {
    location.reload();
      
}
let top1=0
let blocktop=[{y:120,x1:233,x2:263}]
let bot=0
let blockbot=[{y:212,x1:580,x2:610}]


function startMove() {
    document.getElementById('move').src='./kukek.gif'
    
   
    
    let i=setInterval(forward,10)
    function forward() {
        window.scrollTo(x-30, 0);
        document.getElementById('move').style.marginLeft=x+'px'
        document.getElementById('move').style.marginTop=y+'px'
        console.log(x);
        document.getElementById('score').value=x
        y+=1
        x+=1
        if(y<=0  || y>=380){
            gameOver(i)
            //clearInterval(i)
            //alert('GAME OVER')
            //document.getElementById('move').src=`./bird.png`
            //locationreload()
        }

        if(y<=blocktop[top1].y && x>=blocktop[top1].x1 && x<= blocktop[top1].x2 ){
            //clearInterval(i)
            //alert('GAME OVER top')
            gameOverUp(i)
            //locationreload()
            //document.getElementById('move').src=`./bird.png`
        }
        if(y>=blockbot[bot].y && x>=blockbot[bot].x1 && x<=blockbot[bot].x2){
            console.log(blockbot[bot])
            //clearInterval(i)
            //alert('GAME OVER bot')
            //locationreload()
            //document.getElementById('move').src=`./bird.png`
            gameOverDown(i)
        }
        
        if(x>blocktop[top1].x2){
            top1++
           
        }
        if(x>blockbot[bot].x2){
            bot++
            
        }
     
       
        
        
    }
    setInterval(addbottem,2000)
    function addbottem() {
        let div1=document.createElement('div')
        div1.classList.add('bottomblock')
        div1.style.marginLeft=x+1000+'px'
        blockbot.push({y:212,x1:x+1000,x2:x+1000+40})
        document.getElementById('main').appendChild(div1)
        
        
    }
    setInterval(addtop,1000)
    function addtop() {
        let div1=document.createElement('div')
        div1.classList.add('block')
        div1.style.marginLeft=x+500+'px'
        blocktop.push({y:120,x1:x+500,x2:x+500+40})
        document.getElementById('main').appendChild(div1)
        
        
    }
    

  
}

document.getElementById('body').addEventListener('keydown',function(c){
    console.log(c);
    switch(c.keyCode){
        case 38: 
        y-=20
        document.getElementById('move').style.marginTop=y+'px'
        jump.play()
        break
            
        
            
        
     }
})
function gameOverUp(i) {
    over.play()
    clearInterval(i)
    
    img.src='./bird.png'
    setTimeout(work,3000)
    function work() {
        locationreload()
        alert('up')   
    }
}
function gameOverDown(i) {

    over.play()
    clearInterval(i)
    img.src='./bird.png'
    setTimeout(work,3000)
    function work() {
        locationreload() 
        alert('down')  

    }
         

    
}

