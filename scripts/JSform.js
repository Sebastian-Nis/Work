

(function() {
' use strict'
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const form = document.querySelector('.formular');
const genderM = document.querySelector('#male');
const genderF = document.querySelector('#female');
const message = document.querySelector('.message');
const confirm = document.querySelector('.confirm');
const radgroup = document.querySelector('.radiogroup');
confirm.style.visibility = "hidden";

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    function names(name1,name2){
        function checknames(name) {
            if ((name.length) <= 2){
                return false;
            }
            if (/[^a-z]/i.test(name)) {
                return false;
            }
            else{
                return true;
            } 
        }
        if (checknames(name1.value) == false) {
            fname.setAttribute("style", "border: 5px solid red");
            valid = false;
        }
        else
            fname.removeAttribute("style");
        
        if (checknames(name2.value) == false) {
            lname.setAttribute("style", "border: 5px solid red");
            valid = false;
        }
        else
            lname.removeAttribute("style");
        
    }
    function checkgender(){
        if ((genderM.checked == false) && (genderF.checked == false)) {
            radgroup.setAttribute("style", "border: 5px solid red");
            valid = false;
        }
        else
            radgroup.removeAttribute("style");
    }

    function nomessage(mesaj){
        if (mesaj.value == []){
            message.setAttribute("style", "border: 5px solid red");
            valid = false;
        }
        else
            message.removeAttribute("style");


    }



    nomessage(message);
    names(fname,lname);
    checkgender();
    if (valid == false) {
        confirm.style.visibility = "hidden";
        return false;
    }
    else {
        confirm.style.visibility = "visible";
        return true;
    }
    
})
})(); 

