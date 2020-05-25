/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const parentUl = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/////////////////////// helper functions to create nav-bar //////////////////////////////////////
// a function that returns a document fragment that can be added to the document, parentUl in this case
const getFragment = () => {
    const fragment = document.createDocumentFragment();
    let i = 1;
    for (section of sections) {
        const li = document.createElement('li');
        li.innerText = section.dataset.nav;
        li.classList.toggle("menu__link")
        li.id = `navsection${i}`
        fragment.appendChild(li);
        i = i + 1;
    }
    return fragment;
}
// add the newly created elements to the document
const makeNavBar = () => {
    parentUl.appendChild(getFragment())
    return;
};

////////////////////// helper function to make the nav element as active /////////////////////////////
const makeNavActive = async (elementId) => {
    elementId = 'nav' + elementId;
    console.log('******from makeNavActive', elementId, '*********')
    let allNav = document.querySelectorAll('li');
    // console.log(allNav);
    for (nav of allNav) {
        // console.log(nav)
        if (nav.id === elementId && !nav.classList.contains('clicked')) {
            console.log(`******making ${nav.id} active********`)
            nav.classList.add('clicked')
        } else if (nav.id != elementId && nav.classList.contains('clicked')) {
            nav.classList.remove('clicked')
        }
    }
}


////////////////////// helper functions to make a section active ///////////////
const makeActive = async (targetId, className) => {
    console.log('target_id: ', targetId, ', className: ', className)
    for (section of sections) {
        if (section.getAttribute('id') == targetId) {
            section.classList.add(className);
        } else {
            section.classList.remove(className);
        }
    }
}

//////////////////////helper function to calculate distances while scrolling and makeing sections active ///////////
// detecting the distance for all the sections:
const getSectionDistances = async () => {
    const sections = document.querySelectorAll('section');
    for (section of sections) {
        const dist = section.getBoundingClientRect().y;
        console.log(section.id, dist)
        if (dist < 160 && dist > 80) {
            console.log(`##### calling makeNavActive with ${section.id} #####`)
            await makeNavActive(section.id)
            console.log(section.id, dist)
            await makeActive(section.id, 'your-active-class')
        }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
makeNavBar();

// TODO: Add class 'active' to section when near top of viewport

window.addEventListener('scroll', getSectionDistances)

// function () {
// allSections = document.querySelectorAll('section');
// for (section of allSections) {
//     var dist = section.getBoundingClientRect();
//     if (dist.y < 215 && dist.y > 0) {
//         console.log('scroll event listener calling makeactive for ', section.id)
//         makeActive(section.id, 'your-active-class')
//         console.log('printing from scrollEventListener', section.id)
//         makeNavActive(section.id);
//     }
// }


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

/**
 * An event listner that listens for the click event
 * on the 'UL' element, and scrolls to the appropriate
 * section of the page
*/
parentUl.addEventListener('click', (event) => {
    const target = event.target.innerText;
    const targetId = target.toLowerCase().split(" ").join("");
    const scrollTo = document.getElementById(targetId);
    scrollTo.scrollIntoView({ behavior: "smooth" });
    makeActive(targetId, 'your-active-class');
    makeNavActive(targetId);
})
// Build menu

// Scroll to section on link click

// document.addEventListener('click', getSectionDistances)


