function fetchCount() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://abacus.jasoncameron.dev/hit/himbidigfeunmuha.github.ioaquila/awesomeclick");
    xhr.responseType = "json";

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Update the value span with the response
            document.getElementById("value").textContent = this.response.value;
            document.getElementById("clickCount").textContent = ``;
        } else {
            console.error('Error fetching data:', xhr.status, xhr.statusText);
            document.getElementById("clickCount").textContent = 'Error fetching click count.';
        }
    };

    xhr.onerror = function() {
        console.error('Request failed');
        document.getElementById("clickCount").textContent = 'Request failed.';
    };

    xhr.send();
}

// Fetch count when the page loads
window.onload = fetchCount;