if (counter !== null) {
    counter.textContent = localStorage.getItem("counter");
} else {
    let counter = document.getElementById("counter");
}

function increase() {
    counter.textContent = +counter.textContent + 1;
}

function decrease() {
    counter.textContent = +counter.textContent - 1;
}

function reset() {
    counter.textContent = 0;
}

function save() {
    localStorage.setItem("counter", counter.textContent);
}

function load() {    
    counter.textContent = localStorage.getItem("counter");
}