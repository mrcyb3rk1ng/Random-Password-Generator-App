const passLength = document.getElementById("inputLength");
const generateBtn = document.getElementById("generateBtn");
const showPassword = document.getElementById("showPassword");
const copyBtn = document.getElementById("copyBtn");
const passCharSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#৳%&*-+()!$";

let password = "";

generateBtn.onclick = () => {
  if (passLength.value == "") {
     alert("Please, Enter password length!")
  } else if (parseInt(passLength.value) < 4) {
     alert("Minimum password length should be 4!")
  } else {
     password = "";
     for (let i = 0; i < passLength.value; i++) {
        const passIndex = Math.round(Math.random() * passCharSet.length);
        const passChar = passCharSet[passIndex];
        password += passChar;
  }
}
  
  showPassword.value = password;
  
  if (copyBtn) {
     copyBtn.onclick = () => {
        if (showPassword.value !== "") {
           showPassword.select();
           document.execCommand('copy');
           alert("The password has been copied to clipboard!");
        } else {
           alert("Please, Generate password first!")
        }
     };
  }
  
};

copyBtn.onclick = () => {
   alert("Please, Generate password first!")
};
