function yourfunction() {
    const questionID = window.location.hash.substring(1);
    let pageText;
    switch (questionID) {
        case "1":
            pageText = `
            <h2>
                <ul>
                    <li>Toward the end of each semester, a request form will be made available at https://undergrad.cs.umd.edu/</li> \ 
                    <li>Permissions will be granted on or around the last day of classes</li> \
                    <li>All students will receive a response regarding their request</li> \
                </ul>   
                Please note: permission does not guarantee seat availability in the course
            </h2>`;
            break;
        case "2":
            pageText = `
            <h2>
                <ul>
                    <li>If you would like to change your assigned academic advisor, please email ugrad [at] cs.umd.edu\
                    with your full name and 9-digit UID</li> \ 
                    <li> We ask that you contact your advisor directly if you are unable to schedule an advising session during their availability</li> \
                </ul>   
                Please keep in mind that this switch request is not to be utilized for scheduling purposes
            </h2>`;
            break;
        case "3":
            pageText = `
            <h2>
                <ul>
                    <li>You will be contacted by your assigned academic advisor prior to your registration date</li> \ 
                    <li> This email will contain instructions on how to schedule your mandatory advising session via TerpEngage.</li> \
                    <li>Your advisor will suggest a period in the semester based on your Total Cumulative Credits to schedule your session</li> \
                </ul>   
            </h2>`;
            break;
        case "4":
            pageText = `
            <h2>
                <ul>
                    <li>If you arrive/check-in late to your advising session (5 or more minutes) you may be asked to reschedule \
                    your appointment via TerpEngage</li> \ 
                    <li>It is recommended that you contact your assigned advisor via email without delay.</li> \
                    <li>Students cannot register for courses (including non-CMSC coursework) without meeting with their assigned advisor</li> \
                </ul> \
                It is recommended that you also contact your assigned advisor via email \
            </h2>`;
            break;
        case "5":
            pageText = `
            <h2>
                <ul>
                    <li>Available for all declared CS majors and minors</li> \ 
                    <li>Available for brief questions and concerns andare typically no longer than 10 minutes</li> \
                    <li>Students will see the advisor on-duty who may or may not be their assigned advisor</li> \
                    <li>A drop-in session does not take the place of a mandatory advising session</li>
                </ul> \
                Drop-in hours are M-Th 1pm-3:30pm \
            </h2>`;
            break;
        case "6":
            pageText = `
            <h2>
                <ul>
                    <li>Upper Level Concentration (ULC) requirement is 12 credits at the 300/400 level all in one discipline\
                    that is outside of your major courses</li> \ 
                    <li>Students must earn an overall GPA of C- (or 1.7) or higher</li> \
                    <li>Computer Engineering, Information Sciences, and any courses that are crosslisted with CMSC cannot be used to fullfill\
                    the ULC requirement</li> \
                </ul> \
                Students are encouraged to review their proposed courses in advance with their assigned advisor \
            </h2>`;
            break;
    }
    document.getElementById("data").innerHTML = pageText; 
}

window.onload = yourfunction;