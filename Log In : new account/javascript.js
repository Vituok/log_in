

const pages = 
{

    login: "login" ,
    registration: "registration" , 
    welcome: "welcome"

}

let page = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const page = urlParams.get("page")



const loginPage = document.getElementById(pages.login)
const registrationPage = document.getElementById(pages.registration)
const welcomePage = document.getElementById(pages.welcome)


let  log_inputs = []

if(page === `?${pages.login}`) {
    welcomePage.classList.add("hidden");
    registrationPage.classList.add("hidden");
    loginPage.classList.remove("hidden")
   
    
    log_inputs = [

        {name: "login", 
            element: document.getElementById("log_login")
        },
    
        {name: "log_password", 
            element: document.getElementById("log_password")
        }
    
    ]
    
}


const logInBtn = document.getElementById("logInBtn")
logInBtn.addEventListener("click",()=>{

    const logPasswordValue = log_inputs.find(item => item.name === "log_password").element.value;


    const logError = log_inputs.some((i)=> !i.element.value)
    
    if (logError) {
        return;
    }

    if (logPasswordValue.length < 8){
       return;
    }
    window.location.search = '?welcome';

})

    
const createAccountBtn = document.getElementById('create')
createAccountBtn.addEventListener("click",()=>{
window.location.search = '?registration';
})


let inputs = []


if(page === `?${pages.registration}`) {
    loginPage.classList.add("hidden")
    registrationPage.classList.remove("hidden")
    welcomePage.classList.add("hidden")
    

    inputs = [
        {
            name: "name", 
            element: document.getElementById("name")
        },
        {
            name: "age", 
            element: document.getElementById("age")
        },
        {
            name: "phone", 
            element: document.getElementById("phone")
        },
        {
            name: "mail", 
            element: document.getElementById("mail")
        },
        {
            name: "password", 
            element: document.getElementById("password")
        },
        
    ]

}



const registrationBtn = document.getElementById("registrationBtn")
    registrationBtn.addEventListener("click",()=>{



    //если нет значения поле становится красным


    inputs.forEach((value)=>item(value))


     inputs.forEach((value)=>item(value))

     function item(value){
        if(value.element.value.length === 0)
            return value.element.classList.add('empty')
        else  value.element.classList.remove('empty')
     }


    const hasError = inputs.some((input) => !input.element.value)
        if(hasError){
            return;
        }


        console.log(inputs)
        
    window.location.search = '?login';
    
})

if(page === `?${pages.welcome}`) {
    loginPage.classList.add("hidden")
    registrationPage.classList.add("hidden")
    welcomePage.classList.remove("hidden")


    const exitBtn = document.getElementById("exitBtn")
    exitBtn.addEventListener("click",()=>{
    window.location.search = "?login"
});


}










