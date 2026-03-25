
/*
    Hamburger navigation toggle
*/
let isNavToggled = false;
function toggleNavMenu() {
    let navElem = document.querySelector("nav ul");
    let navFocusElem = document.querySelector("#navfocus");
    if (isNavToggled || navElem.checkVisibility()) {
        resetNav();
    } else {
        // the nav is hidden due to window size
        navElem.style.display = 'initial';
        navFocusElem.style.display = 'inline';
        isNavToggled = true;
    }
}

function resetNav() {
    let navElem = document.querySelector("nav ul");
    let navFocusElem = document.querySelector("#navfocus");

    navElem.style.display = '';
    navFocusElem.style.display = '';
    isNavToggled = false;
}

/*
    Handle page resizing
*/
window.addEventListener("resize", function() {
    let hamElem = document.getElementById('hamburger');
    // if the hamburger menu was opened but the icon is no longer visible, the size was extended beyond the small scope
    if (isNavToggled && !hamElem.checkVisibility()) {
        isNavToggled = false;

        resetNav();
    }
});
