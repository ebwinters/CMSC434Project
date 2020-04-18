function pressKey(div, num) {
    div.style.background="#f9e572";
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
    window.location.href=`${pageName}#${roomVal}`;
}