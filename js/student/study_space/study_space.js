function findRooms(self, pageName) {
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelector('input[name="time"]:checked').id;
    window.location.href=`${pageName}#${date}#${time}`;
}