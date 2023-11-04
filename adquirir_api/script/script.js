document.getElementById('search').addEventListener('click', () => {
    displayCharacter();
});

async function displayCharacter() {
    const characterId = document.getElementById('character-id').value;
    const character = await getCharacter(characterId);
    addCharacter(character);
    
}

async function getCharacter(name) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${name}`);
    return response.json();
}

function addCharacter(character) {
    const characterList = document.getElementById('api-container');
    const element = document.createElement('div');
    element.innerHTML = `
        <strong>Id</strong>: ${character.id}
        <strong>Name</strong>: ${character.name}
        <strong>Gender</strong>: ${character.gender}
        <strong>Status</strong>: ${character.status}
        <strong>Specie</strong>: ${character.species}
    `;
    characterList.appendChild(element);
}
    