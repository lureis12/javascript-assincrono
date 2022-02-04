// Cria uma constante para a url
const BASE_URL = 'https://dog.ceo/api/breeds/image/random/';

// Método para consumir api
async function getDogs() {
    const data = await fetch(BASE_URL, {
        method: 'GET',
        mode: 'no-cors'
    })
        .then((res) => res.json())
        .catch((e) => console.log(e.message));

    return data;
}

// Pega a base de dados da api e retorna como html na pagina
const loadImg = async () => {
    const dogImg = document.getElementById('dog');
    dogImg.src = await getDogs();

};

const dogBtn = document.getElementById("change-dog");
dogBtn.addEventListener('click', loadImg);

loadImg();