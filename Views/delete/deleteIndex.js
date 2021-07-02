const Content = document.getElementById('Content');
const status = document.getElementById('status');

function init(){
    var table = "<table border='1' cellspacing='0' cellpadding='10px'><tr><th>Email</th><th>View</th></tr>";
    fetch('/showApplications').then(res=>res.json()).
    then(data=>{
        if(data.length!=0 && data != null && data != undefined){
            for(i=0;i<data.result.length;i++){
                table+="<tr><td id='ID"+i+"'>"+data.result[i].Email+"</td><td>";
                table+="<button id='"+i+"' onclick='remove(this.id)'>delete</button></td></tr>";
            }
            table+="</table>";
        }
        Content.innerHTML = table;
    });
}

function remove(x){
    var email = document.getElementById("ID"+x).innerHTML;
    fetch('/deleteApplicationByEmail?Email='+email).then(res=>res.json()).then(data=>{
        if(data.deleted){
            status.innerHTML="Application Deleted";
            init();
        }else{
            status.innerHTML="Error Occured";
        }
    });   
}