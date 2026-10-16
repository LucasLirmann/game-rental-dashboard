let gamesRented = 1;

function checkRentedGames() {
    console.log(`Total de jogos alugados: ${gamesRented}`);
}
function alterStatus(id) {
    let status = document.getElementById(`game-${id}`)
    let image = status.querySelector('.dashboard__item__img');
    let button = status.querySelector('.dashboard__item__button');
    let gameName = status.querySelector('.dashboard__item__name');


    if (button.classList.contains('dashboard__item__button--return')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo "${gameName.textContent}"?`)) {
            button.classList.remove('dashboard__item__button--return');
            image.classList.remove('dashboard__item__img--rented');
            button.innerHTML = 'Alugar';
            gamesRented--;
        }
    } else {
        button.classList.add('dashboard__item__button--return');
        image.classList.add('dashboard__item__img--rented');
        button.innerHTML = 'Devolver';
        gamesRented++;
    }

    checkRentedGames();
}
