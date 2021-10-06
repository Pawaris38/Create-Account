const form = document.getElementById("form");
const submit = document.getElementById("submit");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const idcard = document.getElementById("idcard");
const backidcard = document.getElementById("backidcard");


number.addEventListener('keydown', function(e){
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 3){
        number.value = number.value + "-";
    }
});
idcard.addEventListener('keydown', function(e){
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 1){
        idcard.value = idcard.value + " ";
    }
    if(e.target.value.length === 6){
        idcard.value = idcard.value + " ";
    }
    if(e.target.value.length === 12){
        idcard.value = idcard.value + " ";
    }
    if(e.target.value.length === 15){
        idcard.value = idcard.value + " ";
    }
});

backidcard.addEventListener('keydown', function(e){
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 3){
        backidcard.value = backidcard.value + "-";
    }
    if(e.target.value.length === 11){
        backidcard.value = backidcard.value + "-";
    }
});
submit.addEventListener('click', function(){
    checkinput();
});

function  checkinput(){
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const numbervalue = number.value.trim();
    const idcardvalue = idcard.value.trim();
    const backidcardvalue = backidcard.value.trim(); 
    
    if(usernamevalue === ""){
        setError(username,"Username cannot be blank");
    }
    else{
        setSuccess(username);
    }
    if(emailvalue === ""){
        setError(email,"Email cannot be blank");
    }
    else if(!isEmail(emailvalue) ){
        setError(email,"Email invalid");
    }
    else{
        setSuccess(email);
    }
    if(numbervalue === ""){
        setError(number,"Number cannot be blank");
    }
    else{
        setSuccess(number);
    }
    if(idcardvalue === ""){
        setError(idcard,"ID card cannot be blank");
    }
    else{
        setSuccess(idcard);
    }
    if(backidcardvalue === ""){
        setError(backidcard,"BackID card cannot be blank");
    }
    else{
        setSuccess(backidcard);
    }
}

function setError(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";
    const span = formcontrol.querySelector("span");
    span.innerText = message;
    
}

function setSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}
//ตัวอักษร 2 ตัว+ตัวเลข
function ValidateAlpha(evt) {
    const backidcard = document.getElementById("backidcard");
    
       evt = (evt) ? evt : window.event;
       var charCode = (evt.which) ? evt.which : evt.keyCode;
       if(backidcard.value.length < 2){
       if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
           return false;
       }
       else{
           return true;
       }
      }
      else{
         if (charCode > 31 && (charCode < 48 || charCode > 57)){
            return false;
        }
        return true;
      }
      
   }
//เช็ค อีเมลล์
   function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//ตัวเลขอย่างเดียว
function validate(evt) {
    evt = (evt) ? evt : window.event;
       var charCode = (evt.which) ? evt.which : evt.keyCode;
       if (charCode > 31 && (charCode < 48 || charCode > 57)){
        return false;
    }
    return true;
  }
  
//   function formcon(input){
//       const ans = input.parentElement;
//       console.log(ans);
//       ans.className = "form-control";
//   }
