function changeMode(size = 0, weight = '', transform = '', background = '', color = '') {
    document.body.style.size = size;
    document.body.style.weight = weight;
    document.body.style.transform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
}

function main() {
    let spooky = () => changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkmode = () => changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = () => changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let p = document.createElement('p');
    p.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(p);

    let spooky_btn = document.createElement('button');
    spooky_btn.textContent = 'Spooky';
    document.body.appendChild(spooky_btn);

    let darkmode_btn = document.createElement('button');
    darkmode_btn.textContent = 'Dark mode';
    document.body.appendChild(darkmode_btn);

    let screamMode_btn = document.createElement('button');
    screamMode_btn.textContent = 'Scream mode';
    document.body.appendChild(screamMode_btn);

    spooky_btn.onclick = () => spooky();
    darkmode_btn.onclick = () => darkmode();
    screamMode_btn.onclick = () => screamMode();
}

main();
