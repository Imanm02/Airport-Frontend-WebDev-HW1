/*
define a function that get element with id main-page-content and blur it if it is not blurred otherwise remove the blur effect
 */

function blurMainPageContent() {
    console.log("blurMainPageContent");
    let mainPageContent = document.getElementById('main-page-content');
    if (mainPageContent.classList.contains('darker')) {
        mainPageContent.classList.remove('darker');
    } else {
        mainPageContent.classList.add('darker');
    }
}