const handleSearch = () => {
    const word = document.getElementById('textInput').value.trim(); 
    const display = document.getElementById('searchResultDisplay');
    
    if (word === "") {
        display.textContent = "Please enter a word to search!";
        display.style.color = "orange"; 
        return; 
    }

    getDefinition(word);
};

async function getDefinition(word) {
    const display = document.getElementById('searchResultDisplay');
    
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        
        if (!response.ok) {
            throw new Error("Word not found");
        }

        const data = await response.json();
        displayResults(data);
    } catch (error) {
        display.textContent = "Sorry, we couldn't find that word. Check your spelling!";
        display.style.color = "red";
    }
}
function displayResults(data) {
    const wordData = data[0];

    const display = document.getElementById('searchResultDisplay');
    const wordTitle = document.getElementById('textInputDisplay');
    const phonetics = document.getElementById('PhoneticDisplay');
    const meanings = document.getElementById('meaningsDisplay');
    const examples = document.getElementById('exampleDisplay');
    const synonyms = document.getElementById('synonymsDisplay');

    if (wordTitle) {
        wordTitle.textContent = wordData.word.toUpperCase();
    }

    const mainDef = wordData.meanings[0].definitions[0].definition;
    display.textContent = mainDef;
    display.style.color = "white"; 

    phonetics.textContent = wordData.phonetic || "Pronunciation not available";
    
    meanings.textContent = wordData.meanings[0].partOfSpeech;

    const exampleText = wordData.meanings[0].definitions[0].example;
    examples.textContent = exampleText ? `Example: "${exampleText}"` : "No example available.";

    const synList = wordData.meanings[0].synonyms;
    synonyms.textContent = synList && synList.length > 0 
        ? synList.join(', ') 
        : "No synonyms found.";
}

function setupEventListeners() {
    document.getElementById('searchButton').addEventListener('click', handleSearch);
}

window.onload = () => {
    const btn = document.getElementById('searchButton');
    
    if (btn) {
        btn.addEventListener('click', handleSearch);
    }
};