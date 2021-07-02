const Content = document.getElementById('Content');
const findData = document.getElementById('findData');

var formData="";

function init(){
    var table = "<table border='1' cellspacing='0' cellpadding='10px'><tr><th>Email</th><th>View</th></tr>";
    fetch('/showApplications').then(res=>res.json()).
    then(data=>{
        if(data.length!=0 && data != null && data != undefined){
            for(i=0;i<data.result.length;i++){
                table+="<tr><td id='ID"+i+"'>"+data.result[i].Email+"</td><td>";
                table+="<button id='"+i+"' onclick='getData(this.id)'>Fetch</button></td></tr>";
            }
            table+="</table>";
        }
        Content.innerHTML = table;
    });
}

function getData(x){
    var email = document.getElementById("ID"+x);
    var Email = email.innerHTML
    fetch('/showApplicationByEmail?Email='+Email).then(res=>res.json()).
    then(data=>{
        if(data.length!=0 && data != null && data != undefined){
            createTable(data.result);
        }
    })
}

function createTable(result){
    formData = "";
    var p = result.personal;
    var e = result.education;
    var w = result.work;
    var l = result.Languages;
    var t = result.technologies;
    var c = result.contact;
    var pre = result.preferences;
    formData += "<br><br><hr><b>Email : "+result.Email+"</b><hr>";
    formData += "<br><b>Personal Info :</b> "+"<table border='1' cellspacing='0' cellpadding='10px'>";
    formData += "<tr><td>Full Name:</td><td>"+p.UserFname+" "+p.UserLname+"</td></tr>";
    formData += "<tr><td>Email:</td><td>"+p.UserEmail+"</td></tr>";
    formData += "<tr><td>Phone:</td><td>"+p.UserPhone+"</td></tr>";
    formData += "<tr><td>Address:</td><td>"+p.UserAddress+", "+p.UserCity+", "+p.UserState+" "+p.UserPincode+"</td></tr>";
    formData += "<tr><td>Designation:</td><td>"+p.UserDesignation+"</td></tr>";
    formData += "<tr><td>Gender:</td><td>"+p.UserGender+"</td></tr>";
    formData += "<tr><td>Date of Birth:</td><td>"+p.UserDOB+"</td></tr>";
    formData += "<tr><td>Status:</td><td>";
    (p.UserStatus=='S')?formData +="Single":formData +="Maried";
    formData += "</td></tr>";
    formData += "</table>";
    
    formData += "<br><hr><b>Education :</b> "+"<table border='1' cellspacing='0' cellpadding='10px'>";
    formData += "<tr><td colspan='4'>SSC</td></tr>";
    formData += "<tr><td colspan='2'>Board:"+e.SSC.Board+"</td><td>Year:"+e.SSC.Year+"</td><td>Percentage:"+e.SSC.Percentage+"</td></tr>";
    formData += "<tr><td colspan='4'>HSC</td></tr>";
    formData += "<tr><td colspan='2'>Board:"+e.HSC.Board+"</td><td>Year:"+e.HSC.Year+"</td><td>Percentage:"+e.HSC.Percentage+"</td></tr>";
    formData += "<tr><td colspan='4'>Bachelore Degree</td></tr>";
    formData += "<tr><td>Board:"+e.Bachelors.Board+"</td><td>University"+e.Bachelors.University+"</td><td>Year:"+e.Bachelors.Year+"</td><td>Percentage:"+e.Bachelors.Percentage+"</td></tr>";
    formData += "<tr><td colspan='4'>Master Degree</td></tr>";
    formData += "<tr><td>Board:"+e.Masters.Board+"</td><td>University"+e.Masters.University+"</td><td>Year:"+e.Masters.Year+"</td><td>Percentage:"+e.Masters.Percentage+"</td></tr>";
    formData += "</table>";
    console.log(w.A.name);
    formData += "<br><hr><b>Work X :</b> "+"<table border='1' cellspacing='0' cellpadding='10px'>";
    if(w.A.name != undefined && w.A.name !=null && w.A.name!=''){
        formData +="<tr><th>Name</th><td>"+w.A.name+"</td><th>Designation</th><td>"+w.A.Designation+"</td></tr><tr><th>From</th><td>"+w.A.from+"</td><th>To</th><td>"+w.A.to+"</td></tr>";
    }
    if(w.B.name != undefined && w.B.name !=null && w.B.name!=''){
        formData +="<tr><th>Name</th><td>"+w.B.name+"</td><th>Designation</th><td>"+w.B.Designation+"</td></tr><tr><th>From</th><td>"+w.B.from+"</td><th>To</th><td>"+w.B.to+"</td></tr>";
    }
    if(w.C.name != undefined && w.C.name !=null && w.C.name!=''){
        formData +="<tr><th>Name</th><td>"+w.C.name+"</td><th>Designation</th><td>"+w.C.Designation+"</td></tr><tr><th>From</th><td>"+w.C.from+"</td><th>To</th><td>"+w.C.to+"</td></tr>";
    }
    formData += "</table>";
    formData += "<br><hr><b>Languages :</b> "+"<table border='1' cellspacing='0' cellpadding='10px'>";
    for(i=0;i<Object.keys(l).length;i++){
    formData += "<tr><th colspan='3'>"+l[i].language+"</th></tr>";
    formData += "<tr><td>Read : ";(l[i].read!=null && l[i].read!="")?formData+="&#9989;":formData+="&#10060;";formData+="</td><td>";
    formData += "Write : ";(l[i].write!=null && l[i].write!="")?formData+="&#9989;":formData+="&#10060;";formData+="</td><td>";
    formData += "Speak : ";(l[i].speak!=null && l[i].speak!="")?formData+="&#9989;":formData+="&#10060;";formData+="</td></tr>";
    }
    formData += "</table>";

    formData += "<br><hr><b>Technologies :</b> "+"<table border='1' cellspacing='0' cellpadding='10px'>";
    for(i=0;i<Object.keys(t).length;i++){
        if(t[i].techonology!=null && t[i].techonology!=''){
            formData+="<tr><td>Language : "+t[i].techonology+"</td><td>Level:"+t[i].level+"</td></tr>";
        }
    }
    formData += "</table>";
    
    
    formData += "<br><hr><b>Contacts :</b> "+"<table border='1' cellspacing='0' cellpadding='10px'>";
    if(c.A.Name!=''){
        formData += "<tr><td>Name : "+c.A.Name+"</td><td>Contact : "+c.A.Contact+"</td><td>Relation : "+c.A.Relation+"</td></tr>";
    }
    if(c.B.Name!=''){
        formData += "<tr><td>Name : "+c.B.Name+"</td><td>Contact : "+c.B.Contact+"</td><td>Relation : "+c.B.Relation+"</td></tr>";
    }
    formData += "</table>";
    
    formData += "<br><hr><b>Preferences :</b> "+"<table border='1' cellspacing='0' cellpadding='10px'>";
    formData += "<tr><td>Prefered Locations : </td><td>"+pre.location.split('\r\n')+"</td></tr>";
    formData += "<tr><td>Period : </td><td>"+pre.Period+"</td></tr>";
    formData += "<tr><td>Department : </td><td>"+pre.Department+"</td></tr>";
    formData += "<tr><td>Expected CTC : </td><td>"+pre.ExCTC+"</td></tr>";
    formData += "<tr><td>Current CTC : </td><td>"+pre.CuCTC+"</td></tr>";
    formData += "</table><br><hr>";
    

    findData.innerHTML=formData;
}