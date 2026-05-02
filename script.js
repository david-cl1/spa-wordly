const handleSearch = () => {
    const word = document.getElementById('textInput').value.trim(); 
    const display = document.getElementById('searchResultDisplay');
    
    if (word === "") {
        display.textContent = "Please enter a word to search!";
        display.style.color = "orange"; 

        const wordTitle = document.getElementById('textInputDisplay');
        const phonetics = document.getElementById('PhoneticDisplay');
        const meanings = document.getElementById('meaningsDisplay');
        const examples = document.getElementById('exampleDisplay');
        const synonyms = document.getElementById('synonymsDisplay');

        wordTitle.textContent = ""
        phonetics.textContent = ""
        meanings.textContent = ""
        examples.textContent = ""
        synonyms.textContent = ""
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

        const wordTitle = document.getElementById('textInputDisplay');
        const phonetics = document.getElementById('PhoneticDisplay');
        const meanings = document.getElementById('meaningsDisplay');
        const examples = document.getElementById('exampleDisplay');
        const synonyms = document.getElementById('synonymsDisplay');

        wordTitle.textContent = ""
        phonetics.textContent = ""
        meanings.textContent = ""
        examples.textContent = ""
        synonyms.textContent = ""
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
        wordTitle.style.color = "blue"; 
    }

    const mainDef = wordData.meanings[0].definitions[0].definition;
    display.textContent = `DEFINITION: ${mainDef}`;
    display.style.color = "black"; 
   
    phonetics.textContent = `PHONETICS: ${wordData.phonetic}` || "Pronunciation not available";
    
    meanings.textContent = `MEANINGS: ${wordData.meanings[0].partOfSpeech}`;

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