

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


let  logInputs = []

if(page === `?${pages.login}`) {
    welcomePage.classList.add("hidden");
    registrationPage.classList.add("hidden");
    loginPage.classList.remove("hidden")
   
    
    logInputs = [

        {name: "logLogin", 
            element: document.getElementById("logLogin")
        },
    
        {name: "logPassword", 
            element: document.getElementById("logPassword")
        }
    
    ]
    
}


const logInBtn = document.getElementById("logInBtn")
logInBtn.addEventListener("click",()=>{

    const logPassword = logInputs.find(item => item.name === "logPassword").element;


    const logError = logInputs.some((i)=> !i.element.value)
    
    if (logError) {
        return;
    }

    if (logPassword.length < 8){
        logPassword.classList.add('empty')
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
        {
        name: "passwordConfirm", 
        element: document.getElementById("passwordConfirm")
    }
        
    ]

}

inputs.forEach((input) => {
input.element.addEventListener('focus', deleteEmpty)
 function deleteEmpty(){
    (input.element.classList.remove("empty"))
}
})



const registrationBtn = document.getElementById("registrationBtn")
    registrationBtn.addEventListener("click",()=>{

    //если input пустой становится красным

    const password = inputs.find(element => element.name === "password")
    const passwordConfirm = inputs.find(element => element.name === "passwordConfirm")
    const passwordLenght = password.element.value.length
    const passwordConfirmLenght = passwordConfirm.element.value.length


    console.log()

        inputs.forEach((value)=>{
        value.element.value ? value.element.classList.remove('empty') : value.element.classList.add('empty')
    })

    if ( passwordLenght < 8 ){
        password.element.classList.add('empty')
    }
    else{
        password.element.classList.remove('empty')
    }
    
    
    if ( passwordConfirmLenght < 8 || password.element.value != passwordConfirm.element.value){
        passwordConfirm.element.classList.add('empty')
    }       
    else{
        passwordConfirm.element.classList.remove('empty')
    }

   
    const hasError = inputs.some((input) => !input.element.value)
        if(hasError || passwordLenght < 8||password.element.value != passwordConfirm.element.value) {
            return;
        }

        
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










