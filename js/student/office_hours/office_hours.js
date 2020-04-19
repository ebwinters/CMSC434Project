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
const validCourses = [
 "106",
 "122",
 "131",
 "132",
 "216",
 "250",
 "298",
 "320",
 "330",
 "351",
 "388",
 "389",
 "411",
 "412",
 "414",
 "417",
 "420",
 "421",
 "422",
 "423",
 "424",
 "425",
 "426",
 "427",
 "430",
 "433",
 "434",
 "435",
 "436",
 "451",
 "456",
 "460",
 "466",
 "475",
 "498",
 "499",
 "624",
 "634",
 "657",
 "660",
 "663",
 "666",
 "727",
 "798",
 "799",
 "818",
 "828",
 "838",
 "858",
 "898",
 "899"
];

function isValidCourse(courseNum) {
    return validCourses.includes(courseNum);
}