function matchpass() {
    var firstPass = document.f1.password.value;
    var secondPass = document.f1.password2.value;
    if(firstPass == secondPass){
        alert("Your Password is Correct🩷🩷🩷🩷");
        console.log("Your Password is Correct🩷🩷🩷🩷");
      return true;
    }
    else{
      alert("Password must be same!!");
      console.log("Your Password is not Correct❌❌❌❌");
      return false;
    }
  }
























  /**
  function matchpass() {
    var firstPass = document.f1.password.value;
    var secondPass = document.f1.password2.value;

    // Check if either of the password fields are empty
    if (firstPass === "" || secondPass === "") {
        alert("Please fill in both password fields!");
        console.log("One or both password fields are empty.");
        return false;
    }

    // Check if the passwords match
    if (firstPass === secondPass) {
        alert("Your Passwords match! ✅");
        console.log("Your passwords match.");
        return true;
    } else {
        alert("Passwords must be the same. Please try again! ❌");
        console.log("Passwords do not match.");
        return false;
    }
}

   */