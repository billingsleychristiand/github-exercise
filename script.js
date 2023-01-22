function countDown(time) {
    
    let id = setInterval(function () {
        time--;
        if (time > 0) {
            console.log(time);
        } else {
            console.log("DONE!")
            clearInterval(id);
        }
    }, 1000);

}

function randomGame() {

    let randNum = 0;
    let counter = 0;
    let id = setInterval(function() {
        randNum = Math.random();
        counter++;
        // console.log("Number: " + randNum);
        if (randNum > .75) {
            console.log("Number of Tries: " + counter);
            clearInterval(id)
        }
    }, 1000);
    
}