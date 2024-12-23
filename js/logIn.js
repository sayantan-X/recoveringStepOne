console.log("Hi")
var emsg = "false";

function errorMsg(elmnt, msg) {
// if ( msg == "true" ) {
//     return;
// }

    const spn = document.createElement("span")
    const unMachtedMsg = document.createTextNode("*this field is required");
    spn.appendChild(unMachtedMsg);
    elmnt.appendChild(spn);
    return emsg = "true";

    
    
}


function validateFormData(event) {
    event.preventDefault();
    console.log(event.ta);
    
    const firstName = document.forms.logInForm.firstName.value;
    console.log(firstName);
    let firstNameRegEx = /^[a-zA-Z\-]+$/
    let testName = firstNameRegEx.test(firstName)
    // console.log(testName)

    if (firstName === "" && testName === false ) {
    //    var msg = false;
        if (emsg === "true") {
            // console.log(emsg)
          return;  
        }
// const spn = document.createElement("span");
// const errormsg = document.createTextNode("*this field is required!");
// spn.appendChild(errormsg);
        const element = document.getElementById("userFirstName");
// element.appendChild(spn);


       errorMsg(element, emsg);
    }
    
    // unMachtedMsg += "</span>"
}

