function setHead() {
    const roomNum = window.location.hash.substring(1);
    document.getElementById('head').innerText = `Directions to ${roomNum}`;
}

function enlarge(imgOption) {
    document.getElementById('grid-container').style = "display: none;";
    document.getElementById('exit-btn').style = "display: flex;";
    if (imgOption === 'lower') {
        document.getElementById('low-hide').style = "display: flex;";
    }
    else {
        document.getElementById('up-hide').style = "display: flex;";
    }
}

function restore() {
    document.getElementById('low-hide').style = "display: none;";
    document.getElementById('up-hide').style = "display: none;";
    document.getElementById('exit-btn').style = "display: none;";
    document.getElementById('grid-container').style = "display: grid;";
}

window.onload = setHead();