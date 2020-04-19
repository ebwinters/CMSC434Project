const lowFloorOneDest = [
    "low-1-1.png",
    "low-1-2.png"
];

const lowFloorTwoDest = [
    "low-2-1.png"
];

const upFloorTwoDest = [
    "up-2-1.png",
    "up-2-2.png",
    "up-2-3.png",
    "up-2-4.png",
    "up-2-5.png"
]

function generateRandomRooms(roomNum) {
    if (roomNum.charAt(0) === "1") {
        randomLow = lowFloorOneDest[Math.floor(Math.random() * lowFloorOneDest.length)];
        document.getElementById('low-hide').src = `../../../img/${randomLow}`;
        document.getElementById('low').src = `../../../img/${randomLow}`;
        document.getElementById('item-b').style = "display: none;";
    }
    else {
        lowFloor = "low-2-1.png";
        randomUp = upFloorTwoDest[Math.floor(Math.random() * upFloorTwoDest.length)];
        console.log(lowFloor, randomUp)
        document.getElementById('low-hide').src = `../../../img/${lowFloor}`;
        document.getElementById('low').src = `../../../img/${lowFloor}`;
        document.getElementById('up-hide').src = `../../../img/${randomUp}`;
        document.getElementById('up').src = `../../../img/${randomUp}`;
    }
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

window.onload = function () {
    const roomNum = window.location.hash.substring(1);
    document.getElementById('head').innerText = `Directions to ${roomNum}`;
    this.generateRandomRooms(roomNum);
}