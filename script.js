function handleRegister(event){
    event.preventDefault();
    let user = document.getElementById("user").value;
    let pass = document.getElementById("Password").value;
    let userDetails;
    let arrObj = [];
    if(user==""){
         alert("please enter your user name");
    }
    else if(pass==""){
        alert("please enter your password");
    }
    else{
       let userDetails = {
            username:user,
            password:pass
        }
        let storedUsers = localStorage.getItem("userDetails");
        if(storedUsers){
          arrObj = JSON.parse(storedUsers);
          let existingUser = arrObj.find((user) => user.username === userDetails.username);
          if(existingUser){
            alert("User already exists");
          } else {
            arrObj.push(userDetails);
            localStorage.setItem('userDetails', JSON.stringify(arrObj));
            window.location.replace("login.html");
          }
        }
        else{
            localStorage.setItem("userDetails", JSON.stringify([userDetails]));
            window.location.replace("login.html");
        }
    }
}

function handleLogin(event) {
    event.preventDefault();
  
    let user = document.getElementById("user").value;
    let pass = document.getElementById("Password").value;
  
    if (user === "") {
      alert("Please enter your username");
    }
  
    if (pass === "") {
      alert("Please enter your password");
    }
  
    let arrObj = localStorage.getItem("userDetails");
    arrObj = arrObj ? JSON.parse(arrObj) : [];
  
    let userFound = false;
  
    for (let i = 0; i < arrObj.length; i++) {
      if (arrObj[i].username === user) {
        userFound = true;
        if (arrObj[i].password === pass) {
          alert("Login successful!"); 
          window.location.replace("dashboard.html");    
        } else {
          alert("Incorrect password");
        }
      }
    }
  
    if (!userFound) {
      alert("Username not found");
    }
  }
    
  const userMenuButton = document.getElementById('user-menu-button');
  const userMenu = document.getElementById('user-menu');

  userMenuButton.addEventListener('click', () => {
    userMenu.classList.toggle('display');
  });
       
      
