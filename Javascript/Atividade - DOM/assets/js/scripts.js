//Mudar o modo
function changeMode () {
    //chamar a função changeClasses
    changeClasses();
    changeText();
}

//Modificar as classes
function changeClasses () {
    //botão
    button.classList.toggle(darkModeClass);
    //toggle vai adicionar ou retirar, caso não exista ou exista o dark mode
    //h1
    h1.classList.toggle(darkModeClass);
    //body
    body.classList.toggle(darkModeClass);
    //footer
    footer.classList.toggle(darkModeClass);
}

//Mudar os textos
function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
//verificação se existe a class 'dark-mode'
    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";

}


const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //index 0 , para pegar o primeiro elemento(body)
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);