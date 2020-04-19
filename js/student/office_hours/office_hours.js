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
    currVal = document.getElementById('coursenum').value;
    newVal = "";
    if (num === -1) {
        newVal = currVal.substring(0, currVal.length - 1)
    }
    else {
        newVal = currVal + num.toString();
    }
    document.getElementById('coursenum').value = newVal;
}

function findCourseNum(pageName) {
    courseVal = document.getElementById('coursenum').value;
    if (isValidCourse(courseVal)) {
        window.location.href=`${pageName}#${courseVal}`;
    }
    else {
        document.getElementById('err').style="display: grid;"
    }
   
}
const validCourses = ["434",
 "216",
 "250",
 "330",
 "351"
    
];

function isValidCourse(courseNum) {
    return validCourses.includes(courseNum);
}