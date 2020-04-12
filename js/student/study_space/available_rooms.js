function getAvailableRooms() {
    const rooms = ['0101', '0102', '0103', '0104']
    let roomsString = "";
    rooms.map((room) => roomsString += createOption(room));
    document.getElementById("room").innerHTML = roomsString; 
}

function createOption(value) {
    var mydata = JSON.parse(data);
    return `<option value="r${value}">${value}</option>`
}

window.onload = getAvailableRooms()