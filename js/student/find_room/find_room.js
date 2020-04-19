function pressKey(div, num) {
    div.style.background="#f9e572";
    document.getElementById('err').style="display: none;"
    setTimeout(function() {
        div.style.background="none";
    }, 75); 
    console.log(parseInt(num));
    setTextboxVal(num);
}

function setTextboxVal(num) {
    currVal = document.getElementById('roomnum').value;
    newVal = "";
    if (num === -1) {
        newVal = currVal.substring(0, currVal.length - 1)
    }
    else {
        newVal = currVal + num.toString();
    }
    document.getElementById('roomnum').value = newVal;
}

function findRoomNum(pageName) {
    roomVal = document.getElementById('roomnum').value;
    if (isValidRoom(roomVal)) {
        window.location.href=`${pageName}#${roomVal}`;
    }
    else {
        document.getElementById('err').style="display: grid;"
    }
   
}
const validRooms = [
    "1104",
    "1105",
    "1106",
    "1107",
    "1108",
    "1109",
    "1111",
    "1112",
    "1113",
    "1114",
    "1115",
    "1115",
    "1117",
    "1120",
    "1122",
    "1123",
    "1124",
    "1125",
    "1125",
    "1127",
    "1130",
    "1131",
    "1135",
    "1136",
    "1137",
    "1138",
    "2104",
    "2105",
    "2106",
    "2107",
    "2108",
    "2109",
    "2111",
    "2112",
    "2113",
    "2114",
    "2115",
    "2115",
    "2117",
    "2120",
    "2122",
    "2123",
    "2124",
    "2125",
    "2125",
    "2127",
    "2130",
    "2131",
    "2135",
    "2136",
    "2137",
    "2138",
    "3104",
    "3105",
    "3106",
    "3107",
    "3108",
    "3109",
    "3111",
    "3112",
    "3113",
    "3114",
    "3115",
    "3115",
    "3117",
    "3120",
    "3122",
    "3123",
    "3124",
    "3125",
    "3125",
    "3127",
    "3130",
    "3131",
    "3135",
    "3136",
    "3137",
    "3138"
];

function isValidRoom(roomNum) {
    return validRooms.includes(roomNum);
}