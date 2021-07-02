var obj={};
function putData(req){
    var personalDetails ={
        "UserFname" : req.query.UserFname,
        "UserLname" : req.query.UserLname,
        "UserDesignation" : req.query.UserDesignation,
        "UserEmail" : req.query.UserEmail,
        "UserAddress" : req.query.UserAddress,
        "UserCity" : req.query.UserCity,
        "UserPincode" : req.query.UserPincode,
        "UserState" : req.query.UserState,
        "UserPhone" : req.query.UserPhone,
        "UserGender" : req.query.UserGender,
        "UserDOB" : req.query.UserDOB,
        "UserStatus" : req.query.UserStatus,
        }
        /*
        Eduacation Details
        */
        var educationDetails = {
            "SSC":{
                "Board":req.query.UserSSCBoard,
                "Year":req.query.UserSSCPassing,
                "Percentage":req.query.UserSSCPercentage
            },
            "HSC":{
                "Board":req.query.UserHSCBoard,
                "Year":req.query.UserHSCPassing,
                "Percentage":req.query.UserHSCPercentage
            },
            "Bachelors":{
                "Board":req.query.UserBDBoard,
                "University":req.query.UserBDUniversity,
                "Year":req.query.UserBDPassing,
                "Percentage":req.query.UserBDPercentage
            },
            "Masters":{
                "Board":req.query.UserMDBoard,
                "University":req.query.UserMDUniversity,
                "Year":req.query.UserMDPassing,
                "Percentage":req.query.UserMDPercentage
            }
        };
        /*
        Work Experience Details
        */
            var company1={
                "name":req.query.UserCompany1,
                "Designation":req.query.UserDesignation1,
                "from":req.query.UserFrom1,
                "to":req.query.UserTo1
            };
            var company2={
                "name":req.query.UserCompany2,
                "Designation":req.query.UserDesignation2,
                "from":req.query.UserFrom2,
                "to":req.query.UserTo2
            };
            var company3={
                "name":req.query.UserCompany3,
                "Designation":req.query.UserDesignation3,
                "from":req.query.UserFrom3,
                "to":req.query.UserTo3
            };
        var WorkEx ={
            "A":company1,
            "B":company2,
            "C":company3
        };
        /*
        Language Known Details
        */
        var hindi = {
            "read":req.query.ReadValue1,
            "write":req.query.WriteValue1,
            "speak":req.query.SpeakValue1
        }
        var english = {
            "read":req.query.ReadValue2,
            "write":req.query.WriteValue2,
            "speak":req.query.SpeakValue2
        }
        var gujarati = {
            "read":req.query.ReadValue3,
            "write":req.query.WriteValue3,
            "speak":req.query.SpeakValue3
        }
       var languageDetails = {
           "hindi":hindi,
           "english":english,
           "gujarati":gujarati
       }
       /*
       Technologies Known
       */
       var technology1 = {
           "technology":req.query.technology1,
           "level":req.query.TechLevel1
       }
       var technology2 = {
           "technology":req.query.technology2,
           "level":req.query.TechLevel2
       }
       var technology3 = {
           "technology":req.query.technology3,
           "level":req.query.TechLevel3
       }
       var technology4 = {
           "technology":req.query.technology4,
           "level":req.query.TechLevel4
       }
       var technologyDetails = {
           "A":technology1,
           "B":technology2,
           "C":technology3,
           "D":technology4
        };
        /*
        Contact
        */
       var contact1 ={
           "Name":req.query.RefName1,
           "Contact":req.query.RefContact1,
           "Relation":req.query.RefRelation1
       }
       var contact2 = {
        "Name":req.query.RefName2,
        "Contact":req.query.RefContact2,
        "Relation":req.query.RefRelation2
       }
       var contactDetails = {
           "A":contact1,
           "B":contact2
       }
       /*
       Preferences
       */
      var preferenceDetails = {
          "location" : req.query.preferLocation,
          "Period":req.query.NoticePeriod,
          "Department" : req.query.Department,
          "ExCTC":req.query.CTC1,
          "CuCTC":req.query.CTC2
      }
      /*
      Single Object
      */
        obj = {
            Email:req.query.UserEmail,
            personal:personalDetails,
            education:educationDetails,
            work:WorkEx,
            Languages:languageDetails,
            technologies:technologyDetails,
            contact:contactDetails,
            preferences:preferenceDetails
        };
        return obj;
}

module.exports = {
    update:putData,
    object:obj
}