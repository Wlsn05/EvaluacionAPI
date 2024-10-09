const resultsDiv = document.getElementById('results');

async function fetchAllCharacters() {
    try {
        const response = await fetch('/api');
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}

async function fetchByObjectId() {
    const objectId = document.getElementById('objectId').value;
    try {
        const response = await fetch(`/api/${objectId}`);
        const data = await response.json();
        displayResults([data]);
    } catch (error) {
        console.error('Error al obtener el personaje:', error);
    }
}

async function fetchByName() {
    const name = document.getElementById('name').value;
    try {
        const response = await fetch(`/api/name/${name}`);
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error al buscar personajes:', error);
    }
}

function displayResults(data) {
    resultsDiv.innerHTML = '';
    data.forEach(character => {
        const div = document.createElement('div');
        div.textContent = `Nombre: ${character.name}, ObjectId: ${character._id}`;
        resultsDiv.appendChild(div);
    });
}