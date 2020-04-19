window.onload = function () {
    const courseNum = window.location.hash.substring(1);
    document.getElementById('head').innerText = `Office Hours for CMSC${courseNum}:`;
    /*this.generateRandomRooms(roomNum);*/
}