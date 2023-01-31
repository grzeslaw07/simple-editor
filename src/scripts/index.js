import '../styles/index.scss';

// const entry = localStorage.getItem('entry');
// let result = 'Wpisz tekst który zapiszesz.';

// if (entry) {
//     console.log(`value entry: ${entry}`);
//     result = entry;
// }

// const entryInput = document.querySelector('.description-label--JS');
// entryInput.value = result;



// const button = document.querySelector('.button__save--js')

// console.log(button)

// button.addEventListener('click', () => {
//     localStorage.setItem('entry', entryInput.value);
// });


const textarea = document.querySelector(".description-label--js")
const save = document.querySelector(".button__save--js")
const load = document.querySelector(".button__load--js")

save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('entry', textarea.value);
})

load.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem('entry');
})