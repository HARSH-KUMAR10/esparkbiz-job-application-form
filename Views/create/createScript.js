var currentFormSection = 1;
var barPer = 0;
getFields();
function goNext(){
    document.getElementById("formSection"+(currentFormSection)).style.display="none";
    document.getElementById("formSection"+(++currentFormSection)).style.display="block";
    document.getElementById('HarshPreButton').style.display="inline-block";
    barPer=(100/7)*currentFormSection;
    document.getElementById('myBar').style.width = barPer+"%";
    if(currentFormSection==7){
        document.getElementById('HarshNextButton').style.display="none";
        document.getElementById('HarshSubmitButton').style.display="inline-block";
    }
}
function goPre(){
    if(currentFormSection==2){
        document.getElementById('HarshPreButton').style.display="none";
    }
    document.getElementById("formSection"+(currentFormSection)).style.display="none";
    document.getElementById("formSection"+(--currentFormSection)).style.display="block";
    barPer=(100/7)*currentFormSection;
    document.getElementById('myBar').style.width = barPer+"%";
    if(currentFormSection<7){
        document.getElementById('HarshNextButton').style.display="inline-block";
        document.getElementById('HarshSubmitButton').style.display="none";
    }
}

function getFields(){
    fetch('/getFields').then(res=>res.json()).then(data=>{
        if(data.length!=0 && data!=null && data != undefined){
            setLanguageFields(data.languages);
            setTechnologiesFields(data.technologies);
        }else{
            console.log(error);
        }
    });
}

function setLanguageFields(x){
    var html ='<legend>Language known</legend>';
    for(i=0;i<x.length;i++){
        html+='<span id="HarshInputFields2"><input type="checkbox" name="'+x[i]+'" value="'+x[i]+'"/> <b>'+x[i]+'</b> </span>'
        html+='<span id="HarshInputFields2"><input type="checkbox" name="'+x[i]+'R" />Read</span>'
        html+='<span id="HarshInputFields2"><input type="checkbox" name="'+x[i]+'W"/>Write</span>'
        html+='<span id="HarshInputFields2"><input type="checkbox" name="'+x[i]+'S"/>Speak</span><hr/>'
    }
    document.getElementById('formSection4').innerHTML=html;
}
function setTechnologiesFields(x){
    var html ='<legend>Technologies you know</legend>';
    for(i=0;i<x.length;i++){
        html+='<span id="HarshInputFields2"><input type="checkbox" name="'+x[i]+'"> <b>'+x[i]+'</b></span>'
        html+='<span id="HarshInputFields2"><input type="radio" value="1" name="Level'+x[i]+'"/> Begginers</span>'
        html+='<span id="HarshInputFields2"><input type="radio" value="2" name="Level'+x[i]+'"/> Mideator</span>'
        html+='<span id="HarshInputFields2"><input type="radio" value="3" name="Level'+x[i]+'"/> Expert</span><hr/>';
    }
    document.getElementById('formSection5').innerHTML=html;
}