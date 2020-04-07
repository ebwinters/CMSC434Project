function yourfunction() {
    const questionID = window.location.hash.substring(1);
    let pageText;
    switch (questionID) {
        case "1":
            pageText = `
            <h3>
                <ul>
                    <li>Toward the end of each semester, a request form will be made available at https://undergrad.cs.umd.edu/</li> \ 
                    <li>Permissions will be granted on or around the last day of classes</li> \
                    <li>All students will receive a response regarding their request</li> \
                </ul>   
                Please note: permission does not guarantee seat availability in the course
            </h3>`;
            break;
        case "2":
            pageText = `If you would like to change your assigned academic advisor, please email ugrad [at] cs.umd.edu\
            with your full name and 9-digit UID. 
            Your assigned academic advisor will remain the same each semester. However, we recognize that students\
            sometimes may need, or want, to change their advisor. You may fill out a request form here.\
            Please keep in mind that this switch request is not to be utilized for scheduling purposes.\
            We ask that you contact your advisor directly if you are unable to schedule an advising session during their availability.`;
            break;
        case "3":
            pageText = `You will be contacted by your assigned academic advisor prior to your registration date.\
            This email will contain instructions on how to schedule your mandatory advising session via TerpEngage.\
            Your advisor will suggest a period in the semester based on your Total Cumulative Credits to schedule your session.`;
            break;
        case "4":
            pageText = `If you arrive/check-in late to your advising session (5 or more minutes) you may be asked to reschedule\
            your appointment via TerpEngage. It is recommended that you contact your assigned advisor via email without delay.\
            As a reminder: students cannot register for courses (including non-CMSC coursework) without meeting with their assigned advisor.
            If you miss your advising session, reschedule via TerpEngage without delay. It is recommended that you also contact your\
            assigned advisor via email.`;
            break;
        case "5":
            pageText = `Drop-in hours are available for all declared CS majors and minors. These hours are available for brief\
            questions and concerns andare typically no longer than 10 minutes. Students may also email their assigned advisor\
            directly to schedule appointments outside of mandatory advising sessions.
            Students will see the advisor on-duty who may or may not be their assigned advisor. Drop-in hours are M-Th 1pm-3:30pm.
            Please note: a drop-in session does not take the place of a mandatory advising session.`;
            break;
        case "6":
            pageText = `The Upper Level Concentration (ULC) requirement is 12 credits at the 300/400 level all in one discipline\
            that is outside of your major courses. Students must earn an overall GPA of C- (or 1.7) or higher.
            Computer Engineering, Information Sciences, and any courses that are crosslisted with CMSC cannot be used to fullfill\
            the ULC requirement (e.g., CMSC/MATH456). If a course is CS related, it may not fulfill the ULC requirement.\
            Students are encouraged to review their proposed courses in advance with their assigned advisor.`;
            break;
    }
    document.getElementById("demo").innerHTML = pageText; 
}

window.onload = yourfunction;