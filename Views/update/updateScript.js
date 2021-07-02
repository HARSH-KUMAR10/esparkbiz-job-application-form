const Content = document.getElementById('Content');
const findData = document.getElementById('findData');

var formData = "";

function init(){
    var table = "<table border='1' cellspacing='0' cellpadding='10px'><tr><th>Email</th><th>View</th></tr>";
    fetch('/showApplications').then(res=>res.json()).
    then(data=>{
        if(data.length!=0 && data != null && data != undefined){
            for(i=0;i<data.result.length;i++){
                table+="<tr><td id='ID"+i+"'>"+data.result[i].Email+"</td><td>";
                table+="<button id='"+i+"' onclick='getData(this.id)'>update</button></td></tr>";
            }
            table+="</table>";
        }
        Content.innerHTML = table;
    });
}

function getData(x){
    var email = document.getElementById("ID"+x).innerHTML;
    fetch('/showApplicationByEmail?Email='+email).then(res=>res.json()).then(data=>{
        createTable(data.result);
    });   
}

function createTable(result){
    formData="";
    var p = result.personal;
    var e = result.education;
    var w = result.work;
    var l = result.Languages;
    var t = result.technologies;
    var c = result.contact;
    var pre = result.preferences;
    formData ='<hr><br><form action="/updateApplicationByEmail">\
            <section id="HarshFormInput">\
                <fieldset id="formSection1">\
                    <legend>Basic Details</legend>\
                    <span id="HarshInputFields"> First Name : <input type="text" name="UserFname" value="'+getvalue(p.UserFname)+'" required/></span>\
                    <span id="HarshInputFields"> Last Name : <input type="text" name="UserLname" value="'+getvalue(p.UserLname)+'" required/></span>\
                    <span id="HarshInputFields"> Designation : <input type="text" name="UserDesignation" value="'+getvalue(p.UserDesignation)+'" required/></span>\
                    <span id="HarshInputFields"> Email :  <input type="email" name="UserEmail" value="'+getvalue(p.UserEmail)+'" required/></span>\
                    <span id="HarshInputFields"> Address : <input type="text" name="UserAddress" value="'+getvalue(p.UserAddress)+'" size="55" required/></span>\
                    <span id="HarshInputFields"> City : <input type="text" name="UserCity" value="'+getvalue(p.UserCity)+'" required/></span>\
                    <span id="HarshInputFields"> PinCode : <input type="number" name="UserPincode" value="'+getvalue(p.UserPincode)+'" maxlength="6" minlength="6" required/></span>\
                    <span id="HarshInputFields"> State : \
                        <select name="UserState" value="'+getvalue(p.UserState)+'" required>\
                            <option value="Himachal Pradesh">Himachal Pradesh</option>\
                            <option value="Punjab"> Punjab</option>\
                            <option value="Haryana">Haryana</option>\
                            <option value="Rajasthan">Rajasthan</option>\
                            <option value="Delhi">Delhi</option>\
                            <option value="Uttar Pradesh"> Uttar Pradesh</option>\
                            <option value="Bihar">Bihar</option>\
                            <option value="West Bengal">West Bengal</option>\
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>\
                            <option value="Assam"> Assam</option>\
                            <option value="Nagaland">Nagaland</option>\
                            <option value="Mizoram">Mizoram</option>\
                            <option value="Manipur">Manipur</option>\
                            <option value="Meghalaya"> Meghalaya</option>\
                            <option value="Tripura">Tripura</option>\
                            <option value="Sikkim">Sikkim</option>\
                            <option value="Orissa">Orissa</option>\
                            <option value="Chattisgarh">Chattisgarh</option>\
                            <option value="Madhya Pradesh">Madhya Pradesh</option>\
                            <option value="Gujarat">Gujarat</option>\
                            <option value="Telangana">Telangana</option>\
                            <option value="Karnataka"> Karnataka</option>\
                            <option value="Maharashtra">Maharashtra</option>\
                            <option value="tamil Nadu">tamil Nadu</option>\
                            <option value="Kerala">Kerala</option>\
                            <option value="Uttrakhand"> Uttrakhand</option>\
                            <option value="Andra Pradesh">Andra Pradesh</option>\
                            <option value="Jharkhand">Jharkhand</option>\
                        </select>\
                    </span>\
                    <span id="HarshInputFields"> Phone : <br> <input type="number" name="UserPhone" value="'+getvalue(p.UserPhone)+'" required maxlength="10" minlength="10"/></span>\
                    <span id="HarshInputFields">\
                        Gender : <br> <input type="radio" name="UserGender" value="M"/> Male\
                        <input type="radio" name="UserGender" value="F"/> Female\
                        <input type="radio" name="UserGender" value="'+getvalue(p.UserGender)+'" value="O"/> Other\
                    </span>\
                    <span id="HarshInputFields"> Date of Birth : <br> <input type="date" value="'+getvalue(p.UserDOB)+'" name="UserDOB" required/></span>\
                    <span id="HarshInputFields"> Relationship Status : \
                        <br><select name="UserStatus" required>\
                            <option value="S" value="'+getvalue(p.UserStatus)+'"> single </option>\
                            <option value="M"> maried </option>\
                        </select>\
                    </span>\
                </fieldset>\
                <fieldset id="formSection2" style="display:none;">\
                    <legend>Education Details</legend>\
                    SSC Result <br> <br>\
                    <span id="HarshInputFields2">Name of board <br> <input type="text" name="UserSSCBoard" value="'+getvalue(e.SSC.Board)+'" required/></span>\
                    <span id="HarshInputFields2">Passing Year <br> <input type="number" maxlength="4" minlength="4" required name="UserSSCPassing" value="'+getvalue(e.SSC.Year)+'"/></span>\
                    <span id="HarshInputFields2">Percentage <br> <input type="number" maxlength="2" required name="UserSSCPercentage" value="'+getvalue(e.SSC.Percentage)+'"/></span>\
                    <hr style="width:90%;color:black;height:2px;"/>\
                    HSC/Diploma Result<br> <br>\
                    <span id="HarshInputFields2">Name of board <input type="text" name="UserHSCBoard" value="'+getvalue(e.HSC.Board)+'" required/></span>\
                    <span id="HarshInputFields2">Passing Year <input type="number" maxlength="4" minlength="4" required value="'+getvalue(e.HSC.Year)+'" name="UserHSCPassing"/></span>\
                    <span id="HarshInputFields2">Percentage <input type="number" maxlength="2" required name="UserHSCPercentage" value="'+getvalue(e.HSC.Percentage)+'"/></span>\
                    <hr style="width:90%;color:black;height:2px;"/>\
                    Bachelor degree<br> <br>\
                    <span id="HarshInputFields2">Name of board <input type="text" name="UserBDBoard" value="'+getvalue(e.Bachelors.Board)+'"/></span>\
                    <span id="HarshInputFields2">University <input type="text" name="UserBDUniversity" value="'+getvalue(e.Bachelors.University)+'"/></span>\
                    <span id="HarshInputFields2">Passing Year <input type="number" maxlength="4" minlength="4" name="UserBDPassing" value="'+getvalue(e.Bachelors.Year)+'"/></span>\
                    <span id="HarshInputFields2">Percentage <input type="number" maxlength="2" name="UserBDPercentage" value="'+getvalue(e.Bachelors.Percentage)+'"/></span>\
                    <hr style="width:90%;color:black;height:2px;"/>\
                    Master Degree<br> <br>\
                    <span id="HarshInputFields2">Name of board <input type="text" name="UserMDBoard" value="'+getvalue(e.Masters.Board)+'"/></span>\
                    <span id="HarshInputFields2">University <input type="text" name="UserMDUniversity" value="'+getvalue(e.Masters.University)+'"/></span>\
                    <span id="HarshInputFields2">Passing Year <input type="number" maxlength="4" minlength="4" name="UserMDPassing" value="'+getvalue(e.Masters.Year)+'"/></span>\
                    <span id="HarshInputFields2">Percentage <input type="number" maxlength="2" name="UserMDPercentage" value="'+getvalue(e.Masters.Percentage)+'"/></span>\
                </fieldset>\
                <fieldset id="formSection3" style="display:none;">\
                    <legend>Work Experience</legend>\
                    <span id="HarshInputFields2">Company Name : <input type="text" name="UserCompany1" value="'+getvalue(w.A.name)+'"/></span>\
                    <span id="HarshInputFields2">Designation : <input type="text" name="UserDesignation1" value="'+getvalue(w.A.Designation)+'"/></span>\
                    <span id="HarshInputFields2">From : <input type="date" name="UserFrom1" value="'+getvalue(w.A.from)+'"/></span>\
                    <span id="HarshInputFields2">To : <br> <input type="date" name="UserTo1" value="'+getvalue(w.A.to)+'" /></span>\
                    <hr/>\
                    <span id="HarshInputFields2">Company Name : <input type="text" name="UserCompany2" value="'+getvalue(w.B.name)+'"/></span>\
                    <span id="HarshInputFields2">Designation : <input type="text" name="UserDesignation2" value="'+getvalue(w.B.Designation)+'"/></span>\
                    <span id="HarshInputFields2">From : <input type="date" name="UserFrom2" value="'+getvalue(w.B.from)+'"/></span>\
                    <span id="HarshInputFields2">To : <br> <input type="date" name="UserTo2" value="'+getvalue(w.B.to)+'"/></span>\
                    <hr/>\
                    <span id="HarshInputFields2">Company Name : <input type="text" name="UserCompany3" value="'+getvalue(w.C.name)+'"/></span>\
                    <span id="HarshInputFields2">Designation : <input type="text" name="UserDesignation3" value="'+getvalue(w.C.Designation)+'"/></span>\
                    <span id="HarshInputFields2">From : <input type="date" name="UserFrom3" value="'+getvalue(w.C.from)+'"/></span>\
                    <span id="HarshInputFields2">To : <br> <input type="date" name="UserTo3" value="'+getvalue(w.C.to)+'"/></span>\
                </fieldset>\
                <fieldset id="formSection4" style="display:none;">\
                    <legend>Language known</legend>\
                    <span id="HarshInputFields2"><input type="checkbox" name="Language1" /> <b> Hindi</b> </span>\
                    <span id="HarshInputFields2"><input type="checkbox" name="ReadValue1" value="'+getvalue(l.hindi.read)+'"/>Read</span>\
                    <span id="HarshInputFields2"><input type="checkbox" name="WriteValue1" value="'+getvalue(l.hindi.write)+'"/>Write</span>\
                    <span id="HarshInputFields2"><input type="checkbox" name="SpeakValue1" value="'+getvalue(l.hindi.speak)+'"/>Speak</span>\
                    <hr>\
                    <span id="HarshInputFields2"><input type="checkbox" name="Language2"/><b>English</b></span>\
                    <span id="HarshInputFields2"><input type="checkbox" name="ReadValue2" value="'+getvalue(l.english.read)+'"/>Read</span>\
                    <span id="HarshInputFields2"><input type="checkbox" name="WriteValue2" value="'+getvalue(l.english.write)+'"/>Write</span>\
                    <span id="HarshInputFields2"><input type="checkbox" name="SpeakValue2" value="'+getvalue(l.english.speak)+'"/>Speak</span>\
                    <hr>\
                    <span id="HarshInputFields2"><input type="checkbox" name="Language3"/><b>Gujarati</b></span>\
                    <span id="HarshInputFields2"><input type="checkbox" name="ReadValue3" value="'+getvalue(l.gujarati.read)+'"/>Read</span>\
                    <span id="HarshInputFields2"><input type="checkbox" name="WriteValue3" value="'+getvalue(l.gujarati.write)+'"/>Write</span>\
                    <span id="HarshInputFields2"><input type="checkbox" name="SpeakValue3" value="'+getvalue(l.gujarati.speak)+'"/>Speak</span>\
                </fieldset>\
                <fieldset id="formSection5" style="display:none;">\
                    <legend>Technologies you know</legend>\
                    <span id="HarshInputFields2"><input type="checkbox" name="technology1" value="'+getvalue(t.A.technology)+'"/> <b> PHP</b></span>\
                    <span id="HarshInputFields2"><input type="radio" value="1" name="TechLevel1"/> Begginers</span>\
                    <span id="HarshInputFields2"><input type="radio" value="2" name="TechLevel1"/> Mideator</span>\
                    <span id="HarshInputFields2"><input type="radio" value="3" name="TechLevel1"/> Expert</span>\
                    <hr>\
                    <span id="HarshInputFields2"><input type="checkbox" name="technology2" value="'+getvalue(t.B.technology)+'"><b> MySQL</b></span>\
                    <span id="HarshInputFields2"><input type="radio" value="1" name="TechLevel2"/> Begginers</span>\
                    <span id="HarshInputFields2"><input type="radio" value="2" name="TechLevel2"/> Mideator</span>\
                    <span id="HarshInputFields2"><input type="radio" value="3" name="TechLevel2"/> Expert</span>\
                    <hr>\
                    <span id="HarshInputFields2"><input type="checkbox" name="technology3" value="'+getvalue(t.C.technology)+'"><b> Laravel</b></span>\
                    <span id="HarshInputFields2"><input type="radio" value="1" name="TechLevel3"/> Begginers</span>\
                    <span id="HarshInputFields2"><input type="radio" value="2" name="TechLevel3"/> Mideator</span>\
                    <span id="HarshInputFields2"><input type="radio" value="3" name="TechLevel3"/> Expert</span>\
                    <hr>\
                    <span id="HarshInputFields2"><input type="checkbox" name="technology4" value="'+getvalue(t.D.technology)+'"><b> Oracle</b></span>\
                    <span id="HarshInputFields2"><input type="radio" value="1" name="TechLevel4"/> Begginers</span>\
                    <span id="HarshInputFields2"><input type="radio" value="2" name="TechLevel4"/> Mideator</span>\
                    <span id="HarshInputFields2"><input type="radio" value="3" name="TechLevel4"/> Expert</span>\
                </fieldset>\
                <fieldset id="formSection6" style="display:none;">\
                    <legend>Reference Contact</legend>\
                    <span id="HarshInputFields2">Name: <input type="text" name="RefName1" value="'+getvalue(c.A.Name)+'" required/></span>\
                    <span id="HarshInputFields2">Contact: <input type="number" name="RefContact1" maxlength="10" value="'+getvalue(c.A.Contact)+'" required/></span>\
                    <span id="HarshInputFields2">Relation: <input type="text" name="RefRelation1" value="'+getvalue(c.A.Relation)+'" required/></span>\
                    <br>\
                    <span id="HarshInputFields2">Name: <input type="text" name="RefName2" value="'+getvalue(c.B.Name)+'"/></span>\
                    <span id="HarshInputFields2">Contact: <input type="number" name="RefContact2" maxlength="10" value="'+getvalue(c.B.Contact)+'"/></span>\
                    <span id="HarshInputFields2">Relation: <input type="text" name="RefRelation2" value="'+getvalue(c.B.Relation)+'"/></span>\
                </fieldset>\
                <fieldset id="formSection7" style="display:none;">\
                    <legend>Preference</legend>\
                    Prefered Location :<br><textarea name="preferLocation" value="'+getvalue(pre.location.split("\r\n"))+'" cols="20" rows="10"></textarea>\
                <span style="display: inline-block; width:60%;"><span id="HarshInputFields3">Notice Period : <input type="text" name="NoticePeriod" value="'+getvalue(pre.Period)+'"/></span>\
                    <span id="HarshInputFields3">Department : \
                        <select name="Department" value="'+getvalue(pre.Department)+'">\
                            <option value="Development">Development</option>\
                            <option value="Design">Design</option>\
                            <option value="Marketing">Marketing</option>\
                        </select>\
                    </span><br>\
                    <span id="HarshInputFields3">Expected CTC : <input type="text" name="CTC1" value="'+getvalue(pre.ExCTC)+'"/></span>\
                    <span id="HarshInputFields3">Current CTC : <input type="text" name="CTC2" value="'+getvalue(pre.CuCTC)+'"/></span>\
                </span>\
                </fieldset>\
                <div id="HarshNextButton">\
                    <button type="button" onclick="goNext()">Next</button>\
                </div>\
                <div id="HarshSubmitButton" style="display:none;">\
                    <input type="submit"/>\
                </div>';
    /*document.getElementById('TechLevel1').value=t.A.level;
    document.getElementById('TechLevel2').value=t.B.level;
    document.getElementById('TechLevel3').value=t.C.level;
    document.getElementById('TechLevel4').value=t.D.level;*/
    findData.innerHTML = formData;
    console.log(pre.location);
}

function getvalue(x){
    if(x==null || x==undefined){
        return "";
    }else{
        return x;
    }
}
var currentFormSection=1;
function goNext(){
    document.getElementById("formSection"+(++currentFormSection)).style.display="block";
    if(currentFormSection==7){
        document.getElementById('HarshNextButton').style.display="none";
        document.getElementById('HarshSubmitButton').style.display="block";
    }
    location.href = "#formSection"+(currentFormSection);
}