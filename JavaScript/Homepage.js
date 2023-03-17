var innerList = document.querySelectorAll('.inner');

function flip(card) {
    card.addEventListener('click', function()
    {
        card.classList.toggle('flip');
    });
}

innerList.forEach(flip);


// var glowObjectList = document.querySelectorAll('.navbarButton');
// var glowBoxList = document.querySelectorAll('.glowbox');

// for (let i = 0; i < glowObjectList.length; i++) {
//     let widthObject = glowObjectList[i].offsetWidth;
//     let heightObject = glowObjectList[i].offsetHeight;

//     glowBoxList[i].style.width = widthObject + "px";
//     glowBoxList[i].style.height = heightObject + "px";
// }

//window.onscroll = hideNavbar();

//const totalScreen = document.getElementById('totalScreen');
//const navbar = document.querySelector('navbar');

// function hideNavbar() {
//     totalScreen.addEventListener('onscroll', function()
//     {
//         navbar.classList.toggle('hide');
//     });
// }