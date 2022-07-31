
let hours = document.querySelectorAll("h3")[0];
let minutes = document.querySelectorAll("h3")[2];
let seconds = document.querySelectorAll("h3")[4];

let sec = setInterval(mySeconds, 1000);

function mySeconds(){
    seconds.innerHTML = s--;
    if(s==-1){
        s =+ 59
        myMinutes()
    }
    
}
function myMinutes(){
    minutes.innerHTML = m--;
    if(m == -1){
        m=+24;
        myHours()
        
    }

}

function myHours(){
    hours.innerHTML = h--;
    if(h==-2){
        clearInterval(sec)
        sec = null;
        hours.innerHTML = 0;
    }
}

for(s=60; s<=0;){
  mySeconds()
 
}

for(m=24; m<=0;){
    myMinutes()
}

for(h=1; h<=0;){
    myHours()
}