const app = document.getElementById("app");
let data;
const getPokemon = async (b) => {
    try {
        const respons = await fetch("https://pokeapi.co/api/v2/pokemon?fbclid=IwAR3Aso4kq05WY4Pe1QA-b7g5LhFigBUIydAdL7OpDmfXFVpqh6mM4IRQb7g");
        const d = await respons.json();
        data = d.results
        if (b) {
            creatElement(data)
        }
    } catch (error) {
        console.error("faild to fetch pokemon", error);
    }
};
getPokemon(true);
const input = document.querySelector(".input_search");
const btnSearch = document.querySelector(".btn_search");

function searchElement() {
    const pokemons = document.querySelectorAll(".pokemon");
    let itemFilter = data.filter((i) => i.name === input.value);
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i].remove();
    }
    if (!itemFilter.length) {
        itemFilter = data;
    }

    creatElement(itemFilter)
}

function creatElement(d) {
    const elements = document.querySelector(".elements");
    for (let i = 0; i < d.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('pokemon');
        newDiv.innerHTML = d[i].name;
        elements.appendChild(newDiv);
    }
}

btnSearch.addEventListener("click", searchElement)

