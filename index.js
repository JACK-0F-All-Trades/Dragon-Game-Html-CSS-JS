cross = true;
score = 0;
highsc = 0;
// capture the keypress event.
document.onkeydown = e=>{
    console.log("key code is: ",e.keyCode);
    dragon = document.querySelector(".dragon");
    if(e.keyCode==38){
        dragon.classList.add("animateDragon");
        // now we use the setTimeOut function to perform a task.
        setTimeout(()=>{dragon.classList.remove("animateDragon")},1000)
    }
    else if(e.keyCode==39){
        // get the current left value of our dragon on the screen
        dragonXCord = parseInt(window.getComputedStyle(dragon,null).getPropertyValue("left"));
        dragon.style.left = dragonXCord+112+"px"
    }
    else if(e.keyCode==37){
        // get the current left value of our dragon on the screen
        dragonXCord = parseInt(window.getComputedStyle(dragon,null).getPropertyValue("left"));
        dragon.style.left = dragonXCord-112+"px"
    }
    
}

// now we detect the collision of the dragon and the obstacle.
setInterval(()=>{
    // get the cordinates of the dragon
    dragonXCord=parseInt(window.getComputedStyle(document.querySelector(".dragon"),null).getPropertyValue("left"));
    dragonYCord=parseInt(window.getComputedStyle(document.querySelector(".dragon"),null).getPropertyValue("top"));
    // get the cordinates of the obstacle
    obstacleXCord=parseInt(window.getComputedStyle(document.querySelector(".obstacle"),null).getPropertyValue("left"));
    obstacleYCord=parseInt(window.getComputedStyle(document.querySelector(".obstacle"),null).getPropertyValue("top"));
    // get the difference.
    differenceX = Math.abs(dragonXCord-obstacleXCord);
    differenceY = Math.abs(dragonYCord-obstacleYCord);
    if(differenceX<93 && differenceY<52){

        dragon = document.querySelector(".dragon");
        gameOver = document.querySelector(".gameOver");
        obstacle = document.querySelector(".obstacle");
        gameOver.style.display = "block";
        reloadBtn = document.querySelector(".reloadBtn");
        reloadBtn.style.display = "block";
        obstacle.classList.remove("animateObstacle");
        dragon.style.left="27px";
        // if(score>0){
        // scoreContainer = document.querySelector(".score");
        // scoreContainer.innerText = `Score: ${score-=1}`;
        // }
        updateHighScore();

    }
    else if(cross && differenceX<114 ){
        score+=1;
        scoreContainer = document.querySelector(".score");
        scoreContainer.innerText = `Score: ${score}`;
        cross = false;
        setTimeout(()=>{
            cross=true;
        },1000)
    }
},100)

function updateHighScore(){
    highScore = document.querySelector(".highscore");
    if (score>highsc){
        highScore.innerText = `High Score: ${score}`;
        highScore = score;
    }
}


    document.addEventListener("click",(e)=>{
        highsc = score;
        score=0;
        scoreContainer = document.querySelector(".score");
        scoreContainer.innerText = `Score: ${score}`;
        dragon = document.querySelector(".dragon");
        gameOver = document.querySelector(".gameOver");
        obstacle = document.querySelector(".obstacle");
        gameOver.style.display = "none";
        reloadBtn = document.querySelector(".reloadBtn");
        reloadBtn.style.display = "none";
        obstacle.classList.add("animateObstacle");
        dragon.style.left="27px";
        
    })
