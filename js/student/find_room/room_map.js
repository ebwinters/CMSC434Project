function setHead() {
    const roomNum = window.location.hash.substring(1);
    document.getElementById('head').innerText = `Directions to ${roomNum}`;
}

window.onload = setHead();