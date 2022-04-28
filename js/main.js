var mode = 0;

function changeTo0(){
    mode = 0;
}

function changeTo1(){
    mode = 1;
}

function play_sound1(){

    if(mode === 0){
        var audio = new Audio('../mp3/1.mp3');
        audio.play();
        
    }else if(mode === 1){
        var audio = new Audio('../mp3/11.mp3');
        audio.play();
        console.log("clicked");
    }
}

function play_sound2(){
    if(mode === 0){
        
        var audio = new Audio('../mp3/2.mp3');
        audio.play();
    }else if(mode === 1){
        var audio = new Audio('../mp3/22.mp3');
        audio.play();
    }
}

function play_sound3(){
    if(mode === 0){
        
        var audio = new Audio('../mp3/3.mp3');
        audio.play();
    }else if(mode === 1){
        var audio = new Audio('../mp3/33.mp3');
        audio.play();
    }
}

function play_sound4(){
    if(mode === 0){
        
        var audio = new Audio('../mp3/4.mp3');
        audio.play();
    }else if(mode === 1){
        var audio = new Audio('../mp3/44.mp3');
        audio.play();
    }
}

function play_sound5(){
    if(mode === 0){
        
        var audio = new Audio('../mp3/5.mp3');
        audio.play();
    }else if(mode === 1){
        var audio = new Audio('../mp3/55.mp3');
        audio.play();
    }
}

function play_sound6(){
    if(mode === 0){
        
        var audio = new Audio('../mp3/6.mp3');
        audio.play();
    }else if(mode === 1){
        var audio = new Audio('../mp3/66.mp3');
        audio.play();
    }
}

function play_sound7(){
    if(mode === 0){
        
        var audio = new Audio('../mp3/7.mp3');
        audio.play();
    }else if(mode === 1){
        var audio = new Audio('../mp3/77.mp3');
        audio.play();
    }
}

function play_sound8(){
    if(mode === 0){
        
        var audio = new Audio('../mp3/8.mp3');
        audio.play();
    }else if(mode === 1){
        var audio = new Audio('../mp3/88.mp3');
        audio.play();
    }
}

function play_sound9(){
    if(mode === 0){
        
        var audio = new Audio('../mp3/9.mp3');
        audio.play();
    }else if(mode === 1){
        var audio = new Audio('../mp3/99.mp3');
        audio.play();
    }
}