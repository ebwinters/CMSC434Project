/**
 * Navigates to a page, but first waits 75ms and briefly gives visual feedback (color change) on click
 * @param {} div will be self
 * @param {string} pageName local path to file ex: "index.html"
 */
function selectChoice(div, pageName) {
    div.style.background="#f9e572";
    setTimeout(function() {
        window.location.href=pageName;
    }, 75); 
}