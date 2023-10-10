const scriptElement = document.getElementsByTagName('pre');

if (scriptElement) {
    try {
    const jsonData = JSON.parse(scriptElement.textContent);

    // Display the parsed JSON data with syntax highlighting
    print(jsonData);
    } catch (error) {
    console.error('Error parsing JSON:', error);
    }
} else {
    console.warn('No element with id "json-data" found on the page.');
}