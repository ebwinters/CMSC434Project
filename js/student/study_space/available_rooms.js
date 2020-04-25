const hashArgs = window.location.hash.substring(1).split('#');
const dateArg = hashArgs[0], timeArg = hashArgs[1];
var roomSelection = "";
const timeMapping = {
    "0700": "7:00-8:00 AM",
    "0800": "8:00-9:00 AM",
    "0900": "9:00-10:00 AM",
    "1000": "10:00-11:00 AM",
    "1100": "11:00-12:00 PM",
    "1200": "12:00-1:00 PM",
    "1300": "1:00-2:00 PM",
    "1400": "2:00-3:00 PM",
    "1500": "3:00-4:00 PM",
    "1600": "4:00-5:00 PM",
    "1700": "5:00-6:00 PM",
    "1800": "6:00-7:00 PM",
    "1900": "7:00-8:00 PM"
}

function fillRoomsDropdown() {
    const roomsString = getAvailableRooms();
    document.getElementById("room").innerHTML = roomsString; 
}

function getTakenRoomCookieData() {
    const cookieName = "takenRooms=";
    // cookie format: datestring,timestring,room#...
    const decodedCookie = decodeURIComponent(document.cookie).split(';');
    let data = "";
    for (var i = 0; i < decodedCookie.length; i++) {
        var cookie = decodedCookie[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            data = cookie.substring(cookieName.length, cookie.length);
            break;
        }
    }
    return cleanCookieData(data);
}

function cleanCookieData(data) {
    const entries = data.split('#');
    const cookieData = entries.map((entry) => {
        var entryData = entry.split(',');
        return {
            "date": entryData[0],
            "time": entryData[1],
            "room": entryData[2]
        };
    });
    return cookieData;
}

function getAvailableRooms() {
    var rooms = ['0138', '0324', '1116', '1207', '2107', '2207'];
    var taken = [];
    let roomsString = "";
    const cookies = getTakenRoomCookieData();
    // console.log(cookies);
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].date === dateArg && cookies[i].time === timeArg) {
            taken.push(cookies[i].room);
        }
    }
    // console.log(taken);
    rooms.filter((room) => taken.indexOf(room) === -1).map((room) => roomsString += createOption(room));
    return roomsString;
}

function selectOption(btn) {
    roomSelection = btn.value;
    document.getElementById('pickit').innerText = `Book ${btn.value}`
}

function createOption(value) {
    return `<button onclick="selectOption(this)" id="opt" value="${value}">${value}</button>`
}

function setSelectText() {
    document.getElementById("timestamp-text").innerHTML = `On ${dateArg} at ${timeMapping[timeArg]}`; 
}


function loadPage() {
    fillRoomsDropdown();
    setSelectText();
}

function bookRoom(btn, pageName) {
    if (roomSelection !== "") {
        btn.style.background="#f9e572";
        const cookieName = "takenRooms=";
        // cookie format: datestring,timestring,room#...
        const decodedCookie = decodeURIComponent(document.cookie).split(';');
        let keycookie = "";
        for (var i = 0; i < decodedCookie.length; i++) {
            var cookie = decodedCookie[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) == 0) {
                keycookie = cookie;
                break;
            }
        }
        keycookie += `#${dateArg},${timeArg},${roomSelection}`;
        document.cookie = 'takenRooms=' + keycookie;
        setTimeout(function() {
            window.location.href=pageName;
            btn.style.background="none";
        }, 200); 
    }
}

window.onload = loadPage()