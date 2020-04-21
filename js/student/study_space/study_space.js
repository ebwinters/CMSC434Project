function findRooms(self, pageName) {
    // see if valid time, if not then need to be changing errtxt to red color
    var hr = parseInt(document.getElementsByClassName("tpicker-h")[0].childNodes[1].value);
    var ap = document.getElementsByClassName("tpicker-ap")[0].childNodes[1].value;
    
    if (ap === "PM" && hr !== 12) {
        hr += 12;
    }
    if (ap === "AM" && hr === 12) hr=0;
    if (hr < 7 || hr > 19) {
        document.getElementById('errtxt').style="color: red; margin: 0"
    }
    else {
        console.log(hr, ap)
        const date = document.querySelector('input[type="date"]').value;
        const time = hr.toString() + "00";
        window.location.href=`${pageName}#${date}#${time}`;
    }
}

window.addEventListener("load", function(){
	// container + target input
	tpick.attach("pick-inline", "input-inline");
});

window.onload = function () {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    document.getElementById('start').value=today
}