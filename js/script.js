function changeMode() {
    changeClasse();
    changeTexto();
}
// 3° declara a funçao do evento, faz chamadas de funções

function changeClasse() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);// (toggle) se não existe ele cria o evento
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeTexto() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode; 
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON'
}
// 4° funçoes de eventos

const darkModeClass = 'dark-mode';
// 0° setar (dark-mode) em (darModeClass), assim fazendo uma constante

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0]
// 1° cria uma constante e seleciona ela

button.addEventListener('click', changeMode);
//2° adiciona um evento de click