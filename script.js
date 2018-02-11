
(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAT02NxuFtauObca8-RCalTDG6u5nBnF8E",
    authDomain: "mylog-1.firebaseapp.com",
    databaseURL: "https://mylog-1.firebaseio.com",
    projectId: "mylog-1",
    storageBucket: "",
    messagingSenderId: "941028161801"
  };
  firebase.initializeApp(config);
   }());


/*  login process  */

$("#btn-login").click(
  function(){
    var email=$("#login-email").val();
    var password=$("#login-password").val();
   
    
    if(email !="" && password !=""){

      $("#loginProgress").show();
      $("#btn-login").hide();

     const promise= firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  $("#loginError").show().text(error.message);
   $("#loginProgress").hide();
      $("#btn-login").show();
     // promise.then(function(){alert("Signed In")})
});
    }
    else{
    alert("please fill up");}
  }
  );


/* sign up process */ 



btnsignup.addEventListener('click', e=> {

  const email=login_email.value;
  const password=login_password.value;
    $("#signupProgress").show();
    $("#btnsignup").hide();
  const promise =firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
    $("#loginError1").show().text(error.message);
    $("#signupProgress").hide();
    $("#btnsignup").show();
  });
 
});

// google login
 function callGoogleSignIn(){
          var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
               // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
               // The signed-in user info.
               var user = result.user;
               // ...
         }).catch(function(error) {
             // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               // The email of the user's account used.
               var email = error.email;
               // The firebase.auth.AuthCredential type that was used.
               var credential = error.credential;
            // ...
         });
      }

   
//fb login
function callFacebookSignIn(){
          var provider = new firebase.auth.FacebookAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
      }

$("#signout").click(
  function(){

    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
  alert(error.message);
});

  });

// Check browser support



firebase.auth().onAuthStateChanged(function (user) {
  // body...

  if (user){
      $("#loginid").hide();
       
    $("#loginpage1").hide();
   // var email = user.email;
    //email.innerText=datasnapshot.val();
    $("#loginid").hide();
   $("#username").show();
   $("#signout").show();
      //document.getElementById('userid').innerHTML = user.email;
    localStorage.setItem("lastemail", user.email);
    // Retrieve
    document.getElementById("userid").innerHTML = localStorage.getItem("lastemail");
     
     $("#loginpage2").show();
     
     

  }
  else{
    // alert("not login");
      $("#loginid").show();
     $("#loginpage1").show();
   $("#signout").hide();
      $("#loginpage2").hide();
      $("#loginid1").show();

  }
   
});
