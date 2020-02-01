let name = document.getElementById("userName");
let phone = document.getElementById("userPhone");
let email = document.getElementById("userEmail");
var checkBox = document.getElementById("checkInput")
var form = document.getElementById('form')


form.addEventListener('submit', (e) =>{

    if(!name.value){
        name.style.border='2px solid red';
         false;
    }else{
        name.style.border='2px solid #E6E8F0';
    }

    if(!phone.value){
        phone.style.border='2px solid red';
         false;
        
    }else{
        phone.style.border='2px solid #E6E8F0';
    }

    if(!email.value){
        email.style.border='2px solid red';
         false;
        
    }else{
        email.style.border='2px solid #E6E8F0';
    }
    e.preventDefault();
    
    
})
