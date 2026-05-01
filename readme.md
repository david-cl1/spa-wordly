# Wordly: Single Page Application Dictionary

### Description
Wordly is a fast, responsive Single Page Application (SPA) designed to provide instant English word definitions. By leveraging a public API, users can search for any word and receive detailed linguistic data without the page ever reloading, providing a seamless and modern user experience.

### Features Implemented
* **Real-time API Fetching:** Connects to the Free Dictionary API to retrieve live data asynchronously.
* **Dynamic DOM Manipulation:** Updates multiple sections (Word Title, Phonetics, Meanings, Examples, and Synonyms) instantly without refreshing the page.
* **Capitalized Word Display:** Automatically transforms the searched word into uppercase for a bold, header-style presentation.
* **Error Handling:** * **Empty Input:** Detects empty searches and prompts the user with an orange warning message.
    * **Word Not Found:** Catches 404 errors from the API and displays a red "Word not found" alert.
    * **Missing Data:** Uses fallback logic to handle words that are missing specific data like phonetics or usage examples.
* **Modern UI:** Features a dark-themed interface with high-contrast typography (Orbitron and Oswald) and pill-shaped interactive elements.

### Technologies Used
* **HTML5:** Structured semantic markup.
* **CSS3:** Pill-shaped UI design using `border-radius`, custom Google Font integration, and flexbox alignment.
* **JavaScript (ES6):** Utilizes `Async/Await`, `Fetch API`, and event listeners to manage the application flow.
* **Google Dictionary API:** The external source for all linguistic data.

### Instructions on How to Run the Project
1.  Download the project files: `index.html`, `style.css`, and `script.js`.
2.  Ensure all three files are saved in the **same folder**.
3.  Open `index.html` in any modern web browser (Chrome, Firefox, or Edge).
4.  Type a word into the search box and click the **Search** button. The results will appear below the input field instantly.

### License
This project is open-source and available under the **MIT License**.