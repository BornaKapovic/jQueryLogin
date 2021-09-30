$(document).ready(function(){
//toggle password field type password / text (display or hide password)
$("#toggle_password").click(function(){
let password = $(".password");
password.attr('type') === "password" ? password.attr('type', 'text') : password.attr('type', 'password');
this.classList.toggle('fa-eye-slash')
});

//add custom regex validation method to Validator plugin
//(Must contain lowercase, uppercase and special char)
$.validator.addMethod("pswregex", function(value) {
    return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value)
        && /[a-z]/.test(value)
        && /[A-Z]/.test(value)
        && /\d/.test(value) 
 });

//Validation options object for the form
$("#mainForm").validate({
  errorClass:"invalid",
  
  submitHandler: function(form) {
    alert("Log in success!")
    
  },
  invalidHandler:function(event, validator){
    alert("Invalid form!")
  },
    rules: {
      email: {
        required: true,
        email: true
      },
      repeat:{
          required:true,
          equalTo:"#password",
          pswregex:true
      }
    },
messages: {
  email:{
    required:"Email adress is required!",
    email:"Email adress isn't formatted correctly!"
  },
  repeat:{
    required:"This is a required field!",
    equalTo:"Password must match",
    pswregex:"Password must contain a digit, an uppercase character, and a lowercase character!"
  }
}
  })
})
