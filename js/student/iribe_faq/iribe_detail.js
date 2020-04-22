function yourfunction() {
    const questionID = window.location.hash.substring(1);
    let pageText;
    switch (questionID) {
        case "1":
            pageText = `
            <h1 class="page-heading">How big is the Iribe Center?</h1>
            <h2>
                <ul>
                    <li> The building’s six floors support groundbreaking research in virtual and augmented reality, 
                    artificial intelligence, robotics, computer vision, algorithms,programming languages and systems.</li> \
                    <h1> </h1>
                    <li> There is 215,600 gross square feet with 20,000 square feet of community space and 5,300 square feet of makerspace.</li>
                </ul>   
            </h2>`;
            break;
        case "2":
            pageText = `
            <h1 class="page-heading">How many students can learn in the Iribe Center?</h1>
            <h2>
                <ul>
                    The classrooms were designed to foster teamwork and innovation, eschewing traditional rows of seating in favor of round tables \ 
                     and display screens on all four walls. These flexible classrooms will promote teamwork and active learning.\ 
                    <h1> </h1>
                    <li> There is 658 seats of instruction space, including a 298 seat auditorium and 100 seat auditorium. </li> \
                    <h1> </h1>
                    <li> All in all there are 13 research labs, 3 collaborative classrooms, and 2 seminar rooms. </li> \
                </ul>   
            </h2>`;
            break;
        case "3":
            pageText = `
            <h1 class="page-heading">About the Michael Antonov Auditorium</h1>
            <h2>
                <ul>
                    The auditorium is a perfect environment for technology and science to continue redefining what's possible.
                    The Michael Antonov Auditorium will be the stage for many courses, speaking series and guest lectures.
                    <h1> </h1>
                     Who is Michael Antonov? \ <small> Michael Antonov is a co-founder and chief software architect at Oculus VR, a company focused on bringing immersive virtual reality to consumers. \
                     After graduating from the University of Maryland in 2003 with a bachelor of science degree in computer science, Michael began his career in software \
                     development as co-founder and chief technology officer of Scaleform, which grew to become the #1 user interface technology provider in the video \
                     game market. In March 2011, Scaleform was acquired by Autodesk. Michael co-founded Oculus VR in 2012, where he leads the development of the \
                     Oculus Rift SDK for the PC. Michael Antonov is an expert in complex multi-threaded software architecture, computer graphics, programming \
                     language design and engineering management.</small>
                </ul>   
            </h2>`;
            break;
        case "4":
            pageText = `
            <h1 class="page-heading">About Andrew Reisse Park</h1>
            <h2>
                <ul>
                    Built in memory of Andrew Reisse ’01, a co-founder and lead engineer of Oculus, the rooftop park features lush gardens and a tranquil fountain, \
                    along with a stunning view of Baltimore Avenue and campus. An adjacent art gallery displays Reisse’s nature photography, offering visitors a \
                    space to reflect and recharge.
                    <h1> </h1>
                     Who is Andrew Reisse? \ <small> Andrew Reisse was a software developer and co-founder of Oculus VR who passed away in 2013. \
                      Andrew  was  a talented computer graphics engineer and gifted developer and his code is embedded in thousands of games played \
                      by millions of people around the world.  His work was integral in the early years at Oculus VR, where he helped introduce tens \
                      of thousands of people to virtual reality through early prototypes of Oculus hardware.</small>
                </ul>   
            </h2>`;
            break;
        case "5":
            pageText = `
            <h1 class="page-heading">About the Jagdeep Singh Family Makerspace</h1>
            <h2>
                <ul>
                    With six laboratories surrounded by glass walls, the 5,300-square-foot Singh Sandbox is a makerspace that is sure to become a \
                    showplace of inspiring student creations. It is the only makerspace on campus driven by students and the only one where any student, \
                    regardless of major, has access to specialized tools and equipment to work out an idea.
                    <h1> </h1>
                     Who is Jagdeep Singh? \ <small> Jagdeep Singh graduated from the University of Maryland at the age of 19 in 1986. After working at \
                     Hewlett Packard for a few years, he went on to found several companies including Airsoft, Lightera Networks (sold to CIENA) and Infinera. \
                     After he and his cofounders sold Infinera in 2010, Singh went on to found QuantumScape, a stealth battery start-up in Silicon Valley. \
                     His wife, Roshni, is a practicing physician specializing in palliative care. Together, they have three daughters, Noor, Kismet and Nageena.</small>
                </ul>   
            </h2>`;
            break;
        case "6":
            pageText = `
            <h1 class="page-heading">Who is Brendan Iribe?</h1>
            <h2>
                <ul>
                    <small> Brendan Iribe is one of the video game industry’s most successful serial entrepreneurs and an alumnus of the University of Maryland.\
                     In 2012, he co-founded the virtual reality company Oculus, which Facebook acquired for approximately $2 billion in 2014. Iribe \
                     served as CEO of Oculus until 2016 and then departed the company in 2018. Before Oculus, Iribe served as chief product officer \
                     of Gaikai, the innovative video game streaming company, until it was acquired by Sony Computer Entertainment for $380 million \
                     in July 2012. Prior to Gaikai, Iribe spent a decade as co-founder and CEO of Scaleform, the leading user interface technology \
                     provider in the video game market, which Autodesk acquired in 2011. Earlier in his career, Iribe worked as a software programmer, \
                     helping the Firaxis team develop the user interface for the award-winning Civilization IV video game. Iribe attended the University \
                     of Maryland in Fall 1997 and Spring 1998. <small/>
                </ul>   
            </h2>`;
            break;
    }
    document.getElementById("data").innerHTML = pageText; 
}

window.onload = yourfunction;