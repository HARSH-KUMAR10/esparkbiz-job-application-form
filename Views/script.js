var DATE = document.getElementById('DATE');
var TIME = document.getElementById('TIME');
var todayDate = 0;
var todayMonth = 0;
var todayYear = 0;
var nowHour = 0;
var nowMin = 0;
var nowSec = 0;

function init(){
var date = new Date();
todayDate = date.getDate();
todayMonth = date.getMonth()+1;
todayYear = date.getFullYear();
nowHour = date.getHours();
nowMin = date.getMinutes();
nowSec = date.getSeconds();
DATE.innerHTML=todayDate+"/"+todayMonth+"/"+todayYear;
timeControl();
}

function timeControl(){
    var x = setInterval(()=>{
        nowSec++;
        if(nowSec>59){
            nowMin++
            nowSec=0;
            if(nowMin>59){
                nowHour++;
                nowMin=0;
                if(nowHour>23){
                    nowHour=0;
                }
            }
        }
        var printed=false;
        if(nowHour<10){
            printed=true;
            TIME.innerHTML="0"+nowHour+":"+nowMin+":"+nowSec;    
        }
        if(nowMin<10){
            printed=true;
            TIME.innerHTML=nowHour+":0"+nowMin+":"+nowSec;    
        }
        if(nowSec<10){
            printed=true;
            TIME.innerHTML=nowHour+":"+nowMin+":0"+nowSec;    
        }
        if(!printed){
            TIME.innerHTML=nowHour+":"+nowMin+":"+nowSec;
        }
    },1000);
}
