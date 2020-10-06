"use strict";
//image slide time setting
$(".carousel").carousel({
  interval: 1400,
});

//menu open and close state/* ------------------*/
function closemenu() {
  document.getElementById("hamburger").style.display = "none";
  document.getElementById("hamburger").style.transition = "all 0.4s";
}
function openmenu() {
  document.getElementById("hamburger").style.display = "block";
  document.getElementById("hamburger").style.transition = "all 0.5s";
}

//menu open and close End/* ------------------*/
//get cookies
let updatename = document.cookie.split(";");
let len = updatename.length;
for (let i = 0; i < len; i++) {
  //split the cookie (=)
  let value = updatename[i].split("=");
  if (value[0].trim() == "username") {
    document.getElementById("nav-img").innerHTML = value[1];
    document.getElementById("menu-img").innerHTML = value[1];
  }
}

let updatecookie = () => {
  //set cookies for user update;
  document.cookie =
    "collagename=" +
    document.forms[0].elements[0].value +
    ";max-age=" +
    60 * 60 * 24 * 100;
  document.cookie =
    "Reg.no=" +
    document.forms[0].elements[1].value +
    ";max-age=" +
    60 * 60 * 24 * 100;
  document.cookie =
    "Fathername=" +
    document.forms[0].elements[2].value +
    ";max-age=" +
    60 * 60 * 24 * 100;
  document.cookie =
    "Address=" +
    document.forms[0].elements[3].value +
    ";max-age=" +
    60 * 60 * 24 * 100;
  document.cookie =
    "Semistar=" +
    document.forms[0].elements[4].value +
    ";max-age=" +
    60 * 60 * 24 * 100;
  document.cookie =
    "Branch=" +
    document.forms[0].elements[5].value +
    ";max-age=" +
    60 * 60 * 24 * 100;
  document.cookie =
    "City=" +
    document.forms[0].elements[6].value +
    ";max-age=" +
    60 * 60 * 24 * 100;
  document.cookie =
    "State=" +
    document.forms[0].elements[7].value +
    ";max-age=" +
    60 * 60 * 24 * 100;
  document.cookie =
    "Zip=" +
    document.forms[0].elements[8].value +
    ";max-age=" +
    60 * 60 * 24 * 100;
};

let update = document.cookie.split(";");
let leng = update.length;
for (let i = 0; i < leng; i++) {
  let valueupdate = update[i].split("=");
  if (valueupdate[0].trim() == "collagename") {
    document.getElementById("collage").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "Fathername") {
    document.getElementById("father").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "usermobile") {
    document.getElementById("mobile").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "username") {
    document.getElementById("name").innerHTML = valueupdate[1];
    document.getElementById(
      "user-name-update"
    ).innerHTML = `Name: ${valueupdate[1]} `;
  } else if (valueupdate[0].trim() == "City") {
    document.getElementById("cityname").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "Semistar") {
    document.getElementById("semi").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "State") {
    document.getElementById("user-state").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "Reg.no") {
    document.getElementById("reg").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "Branch") {
    document.getElementById("user-branch").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "Address") {
    document.getElementById("user-address").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "Zip") {
    document.getElementById("zipcode").innerHTML = valueupdate[1];
  } else if (valueupdate[0].trim() == "email") {
    document.getElementById("useremail").innerHTML = valueupdate[1];
  }
}

//Change password code
function Passwordchange() {
  let password = document.cookie.split(";");
  for (let i = 0; i < password.length; i++) {
    let modifypassword = password[i].split("=");
    if (modifypassword[0].trim() == "password") {
      document.cookie =
        "password=" +
        document.getElementById("confirmpassword").value +
        ";max-age=" +
        60 * 60 * 24 * 100;
      document.cookie =
        "userpassword=" +
        document.getElementById("confirmpassword").value +
        ";max-age=" +
        60 * 60 * 24 * 100;
      document.getElementById("password-message").innerHTML = "Password change";
      document.getElementById("password-message").style.color = "#007BFF";
    }
  }
}
//change Email id code
function Emailidchange() {
  let Emailid = document.cookie.split(";");
  for (let i = 0; i < Emailid.length; i++) {
    let modifyemail = Emailid[i].split("=");
    if (modifyemail[0].trim() == "email") {
      document.cookie =
        "email=" +
        document.getElementById("confirmemail").value +
        ";max-age=" +
        60 * 60 * 24 * 100;
      document.cookie =
        "useremail=" +
        document.getElementById("confirmemail").value +
        ";max-age=" +
        60 * 60 * 24 * 100;
      document.getElementById("email-message").innerHTML =
        "Your Email id change";
      document.getElementById("email-message").style.color = "#007BFF";
    }
  }
}

//Homepage close
let Homeclose = () => {
  document.getElementById("user-home").style.display = "none";
  document.getElementById("user-table").style.display = "block";
  document.getElementById("update-profile-form").style.display = "none";
  document.getElementById("bookmanage").style.display = "none";
  document.getElementById("All-issue-book").style.display = "none";
  document.getElementById("Issuebook").style.display = "none";
  document.getElementById("bookgallery").style.display = "none";
  document.getElementById("profile-setting").style.display = "none";
};
//Homepage Open
let Homeopen = () => {
  document.getElementById("user-home").style.display = "block";
  document.getElementById("user-table").style.display = "none";
  document.getElementById("update-profile-form").style.display = "none";
  document.getElementById("bookmanage").style.display = "none";
  document.getElementById("All-issue-book").style.display = "none";
  document.getElementById("Issuebook").style.display = "none";
  document.getElementById("bookgallery").style.display = "none";
  document.getElementById("profile-setting").style.display = "none";
};
//update-profile-form Open
let Profileopen = () => {
  document.getElementById("update-profile-form").style.display = "block";
  document.getElementById("user-home").style.display = "none";
  document.getElementById("user-table").style.display = "none";
  document.getElementById("bookmanage").style.display = "none";
  document.getElementById("All-issue-book").style.display = "none";
  document.getElementById("Issuebook").style.display = "none";
  document.getElementById("bookgallery").style.display = "none";
  document.getElementById("profile-setting").style.display = "none";
};
//bookmanage Open
let Bookmanage = () => {
  document.getElementById("bookmanage").style.display = "block";
  document.getElementById("user-home").style.display = "none";
  document.getElementById("user-table").style.display = "none";
  document.getElementById("update-profile-form").style.display = "none";
  document.getElementById("All-issue-book").style.display = "none";
  document.getElementById("Issuebook").style.display = "none";
  document.getElementById("bookgallery").style.display = "none";
  document.getElementById("profile-setting").style.display = "none";
};
//All-issue-book Open
let IssueAllBook = () => {
  document.getElementById("All-issue-book").style.display = "block";
  document.getElementById("user-home").style.display = "none";
  document.getElementById("user-table").style.display = "none";
  document.getElementById("update-profile-form").style.display = "none";
  document.getElementById("bookmanage").style.display = "none";
  document.getElementById("Issuebook").style.display = "none";
  document.getElementById("bookgallery").style.display = "none";
  document.getElementById("profile-setting").style.display = "none";
};
//Issuebook Open
let IssueNewBook = () => {
  document.getElementById("Issuebook").style.display = "block";
  document.getElementById("All-issue-book").style.display = "none";
  document.getElementById("user-home").style.display = "none";
  document.getElementById("user-table").style.display = "none";
  document.getElementById("update-profile-form").style.display = "none";
  document.getElementById("bookmanage").style.display = "none";
  document.getElementById("bookgallery").style.display = "none";
  document.getElementById("profile-setting").style.display = "none";
};
//bookgallery Open
let BookGallery = () => {
  document.getElementById("bookgallery").style.display = "block";
  document.getElementById("Issuebook").style.display = "none";
  document.getElementById("All-issue-book").style.display = "none";
  document.getElementById("user-home").style.display = "none";
  document.getElementById("user-table").style.display = "none";
  document.getElementById("update-profile-form").style.display = "none";
  document.getElementById("bookmanage").style.display = "none";
  document.getElementById("profile-setting").style.display = "none";
};
//Profile setting
let ProfileSetting = () => {
  document.getElementById("profile-setting").style.display = "block";
  document.getElementById("bookgallery").style.display = "none";
  document.getElementById("Issuebook").style.display = "none";
  document.getElementById("All-issue-book").style.display = "none";
  document.getElementById("user-home").style.display = "none";
  document.getElementById("user-table").style.display = "none";
  document.getElementById("update-profile-form").style.display = "none";
  document.getElementById("bookmanage").style.display = "none";
};
/*-----------------------------------------------------------------*/
document
  .getElementById("book-manage")
  .addEventListener("click", Bookmanage, false);
document.getElementById("profile").addEventListener("click", Homeclose, false);
document.getElementById("home").addEventListener("click", Homeopen, false);
document
  .getElementById("profile-update")
  .addEventListener("click", Profileopen, false);
document
  .getElementById("issue-all-book")
  .addEventListener("click", IssueAllBook, false);
document
  .getElementById("issue-new-book")
  .addEventListener("click", IssueNewBook, false);
document
  .getElementById("gallery")
  .addEventListener("click", BookGallery, false);
document
  .getElementById("setting")
  .addEventListener("click", ProfileSetting, false);
