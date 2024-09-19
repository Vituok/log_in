

const pages = 
{

    login: "login" ,
    registration: "registration" , 
    welcome: "welcome"

}

const page = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const page = urlParams.get("page")



const loginPage = document.getElementById(pages.login)
const registrationPage = document.getElementById(pages.registration)
const welcomePage = document.getElementById(pages.welcome)


if(page === `?${pages.login}`) {
    welcomePage.classList.add("hidden");
    registrationPage.classList.add("hidden");
    loginPage.classList.remove("hidden")
}

if(page === `?${pages.registration}`) {
    loginPage.classList.add("hidden")
    registrationPage.classList.remove("hidden")
    welcomePage.classList.add("hidden")
}

if(page === `?${pages.welcome}`) {
    loginPage.classList.add("hidden")
    registrationPage.classList.add("hidden")
    welcomePage.classList.remove("hidden")
}




const registrationBtn = document.getElementById("registrationBtn")
registrationBtn.addEventListener("click",()=>{
    window.location.search = '?login';
})

const logInBtn = document.getElementById("logInBtn")
logInBtn.addEventListener("click",()=>{
    window.location.search = '?welcome';
})

const createAccountBtn = document.getElementById('create')
createAccountBtn.addEventListener("click",()=>{
    window.location.search = '?registration';
})

const exitBtn = document.getElementById("exitBtn")
exitBtn.addEventListener("click",()=>{
    window.location.search = "?login"
});