
async function fetchHello() {
    try {
        const response = await fetch('/hello');
        const data = await response.text();
        document.getElementById('output').innerText = data;
    } catch (error) {
        console.error('Error fetching hello:', error);
    }
}
