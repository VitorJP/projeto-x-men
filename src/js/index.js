const charactersList = document.querySelectorAll('.character')

charactersList.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 1100){
            window.scrollTo({top:0, behavior: 'smooth'});
        }

        removeCharacterSelection();

        character.classList.add('selected');

        changeCharacterImage(character);

        changeCharacterName(character);

        changeCharacterDescription(character);
    })
})

function changeCharacterDescription(character) {
    const descriptionCharacter = document.getElementById('description');
    descriptionCharacter.innerText = character.getAttribute('data-description');
}

function changeCharacterName(character) {
    const nameCharacter = document.getElementById('name');
    nameCharacter.innerText = character.getAttribute('data-name');
}

function changeCharacterImage(character) {
    const imgCharacter = document.querySelector('.show-character');
    imgCharacter.src = `./src/imagens/card-${character.attributes.id.value}.png`;
}

function removeCharacterSelection() {
    const characterSelected = document.querySelector('.selected');
    characterSelected.classList.remove('selected');
}
