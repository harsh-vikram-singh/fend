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
    for (section of sections) {
        const li = document.createElement('li');
        li.innerText = section.dataset.nav;
        li.classList.toggle("menu__link")
        fragment.appendChild(li);
    }
    return fragment;
}
// add the newly created elements to the document
const makeNavBar = () => {
    parentUl.appendChild(getFragment())
    return;
};

////////////////////// helper functions to get the position of various elements corresponding to navbar ///////////////
parentUl.addEventListener('click', (event) => {
    const target = event.target.innerText;
    const targetId = target.toLowerCase().split(" ").join("");
    console.log(targetId);
    const scrollTo = document.getElementById(targetId);
    console.dir(scrollTo.getBoundingClientRect());
    const { x, y } = scrollTo.getBoundingClientRect();
    console.log(x, y);
    scrollTo.scrollIntoView();
    makeActive(scrollTo, 'your-active-class');
})

const makeActive = (targetId, className) => {
    for (section of sections) {
        if (!section.getAttribute('id') == targetId) {
            section.classList.remove(className);
        } else {
            section.classList.add(className);
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

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


