import '../styles/index.scss';

const entry = localStorage.getItem('entry');
let result = 'Wpisz tekst który zapiszesz.';

if (entry) {
    console.log(`value entry: ${entry}`);
    result = entry;
}

const entryInput = document.querySelector('.description-label--JS');
entryInput.value = result;



const button = document.querySelector('.button__save--js')

console.log(button)

button.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value);
});
