
const nav1button0 = document.getElementById("nav1Button0");
const nav1button1 = document.getElementById("nav1Button1");
const nav1button2 = document.getElementById("nav1Button2");
const nav1button3 = document.getElementById("nav1Button3");
// const nav1button4 = document.getElementById("nav1Button4");
const navBar1 = document.getElementById("sectionNavBar1");

const buttonsNavImg = document.getElementsByClassName("navBar1");

const header = document.getElementById("header");

const navMenuButton = document.getElementById("icon-drop-down-navigation-bar");
const dropDownMenu = document.getElementById("drop-down-menu");

const rock_bottom_right = document.getElementById("rock-bottom-right");
const corner_right = document.getElementById("corner-right");
const corner_rock = document.getElementById("rock-corner");
const floor = document.getElementById("floor");
const village = document.getElementById("village");

const moulins = document.getElementsByClassName("moulins");


let floors = [];
let _grass = [];
function floorResize()
{
    if (floor != null) {
        let width = document.body.clientWidth;

        let style = "48px ";
        for (let i = 0; i < width/48; i++) style = style + "48px ";
        style = style + "48px";
        floor.style.gridTemplateColumns = style;

        for (let i = 0; i < floors.length; i++) floors[i].remove();
        for (let i = 0; i < _grass.length; i++) _grass[i].remove();
        floors = [];
        _grass = [];

        for (let i = 2; i < width/48; i++) {
            const floor_top = document.createElement("img");
            const rock_top = document.createElement("img");
            const rock_bottom = document.createElement("img");

            floor_top.src = "https://raw.githubusercontent.com/NaulaN/CHRZ-development_website/master/res/floors/floor-top.png";
            floor_top.alt = "floor-top";
            floor_top.style.gridColumnStart = i.toString();
            floor_top.style.gridColumnEnd = i.toString();
            floor_top.style.gridRowStart = "2";
            floor_top.style.width = "100%";
            floor_top.style.height = "100%";

            rock_bottom.src = "https://raw.githubusercontent.com/NaulaN/CHRZ-development_website/master/res/floors/rock-bottom.png";
            rock_bottom.alt = "floor-top";
            rock_bottom.className = "rock-bottom";
            rock_bottom.style.gridColumnStart = i.toString();
            rock_bottom.style.gridColumnEnd = i.toString();
            rock_bottom.style.gridRowStart = "4";

            rock_top.src ="https://raw.githubusercontent.com/NaulaN/CHRZ-development_website/master/res/floors/rock-top_" +  Math.round(Math.random()*4) + ".png";
            rock_top.alt = "rock-top";
            rock_top.style.gridColumnStart = i.toString();
            rock_top.style.gridColumnEnd = i.toString();
            rock_top.style.gridRowStart = "3";
            rock_top.style.width = "100%";
            rock_top.style.height = "100%";

            /* L'herbe sur le sol */
            let grass_spawn_or_not = Math.random();
            if (grass_spawn_or_not > .1 && grass_spawn_or_not < .5) {
                const grass = document.createElement("img");
                grass.src = "https://raw.githubusercontent.com/NaulaN/CHRZ-development_website/master/res/grass.png";
                grass.alt = "grass";
                grass.style.gridColumnStart = i.toString();
                grass.style.gridColumnEnd = i.toString()
                grass.style.gridRowStart = "1";
                grass.style.width = "100%";
                grass.style.height = "100%";

                _grass.push(grass);

                floor.appendChild(grass);
            }

            floors.push(floor_top);

            floor.appendChild(floor_top);
            floor.appendChild(rock_top);
            floor.appendChild(rock_bottom);
        }
        corner_right.style.gridColumnStart = (floors.length+2).toString();
        corner_right.style.gridColumnEnd = (floors.length+2).toString();
        corner_right.style.gridRowStart = "2";
        corner_rock.style.gridColumnStart = (floors.length+2).toString();
        corner_rock.style.gridColumnEnd = (floors.length+2).toString();
        corner_rock.style.gridRowStart = "3";
        rock_bottom_right.style.gridColumnStart = (floors.length+2).toString();
        rock_bottom_right.style.gridColumnEnd = (floors.length+2).toString();
        rock_bottom_right.style.gridRowStart = "4";
    }
}

floorResize();
window.addEventListener("resize", floorResize);


function createMoulin()
{
    for(let i = 0; i < moulins.length; i++)
    {
        let moulin = moulins[i];

        for (let i = 1; i < 3; i++)
            for (let j = 6; j >= 1; j--)
            {
                let moulin_tile = document.createElement("img");

                if (i == 1)
                    moulin_tile.src = "https://raw.githubusercontent.com/NaulaN/CHRZ-development_website/master/res/moulin/moulin" + j + ".png";
                else moulin_tile.src = "https://raw.githubusercontent.com/NaulaN/CHRZ-development_website/master/res/moulin/moulin" + (j+5) + ".png";
                moulin_tile.style.gridColumn = i + "/" + i;
                moulin_tile.style.gridRow = (6-j) + "/" + (6-j);

                // Bidouillage
                if (j == 5 && i == 1 || j == 4 && i == 1) {
                    moulin_tile.style.position = "relative";
                    moulin_tile.style.top = "-20px"
                }

                moulin.appendChild(moulin_tile);
            }

        let moulin_final_tile = document.createElement("img");
        moulin_final_tile.src = "https://raw.githubusercontent.com/NaulaN/CHRZ-development_website/master/res/moulin/moulin11.png";
        moulin_final_tile.style.gridColumn = "3/3";
        moulin_final_tile.style.gridRow = "5/5";

        moulin.appendChild(moulin_final_tile);
    }
}
createMoulin();


/**
 * Fait disparaitre ou non la barre de navigation selon la taille de la fen??tre.
 * @param width Taille de la fen??tre o?? est afficher le site internet.
 */
function navBarShowOrNot(width)
{
    if (width < 1350) {
        buttonsNavImg.item(0).parentElement.style.display = "none";
        navMenuButton.style.display = "block";
    } else {
        buttonsNavImg.item(0).parentElement.style.display = "grid";
        navMenuButton.style.display = "none";
    }
}

/**
 * Augmente ou reduit la taille du sol selon la taille de la fen??tre.
 * @param width Taille de la fen??tre o?? est afficher le site internet.
 */
function resizeFloor(width)
{
    if (floor != null) {
        let style = "";
        for (let i = 0; i < width/64; i++) style = style + "64px ";

        village.style.gridTemplateColumns = style;
    }
}

resizeFloor(document.body.clientWidth);
navBarShowOrNot(document.body.clientWidth);
window.addEventListener("resize", () => {
    // Fait grandir ou r??duit la taille du sol selon la taille de la fen??tre.
    let width = document.body.clientWidth;

    resizeFloor(width);
    navBarShowOrNot(width);
})


let isMenuClick = false;
// Fait dispara??tre le menu quand il est trop haut pour ne pas qu'il fasse moche
window.addEventListener("scroll", (ev) => {
    if (document.getElementById("topBanner") != null)
        if (window.scrollY < document.getElementById("topBanner").clientHeight) {
            dropDownMenu.style.display = "none";
            isMenuClick = false;
        }
})

navMenuButton.addEventListener("click", () => {
    if (!isMenuClick) {
        dropDownMenu.style.display = "block";
        dropDownMenu.style.top = header.style.top + 32*3 + "px";
        isMenuClick = true;
    } else if (isMenuClick) {
        dropDownMenu.style.display = "none";
        isMenuClick = false;
    }

    if (document.getElementById("topBanner") != null)
        if (window.scrollY < document.getElementById("topBanner").clientHeight)
            window.scrollTo(0, header.clientHeight + dropDownMenu.clientHeight - 32*3);
})
// si il clique ailleurs que sur le l'icon du menu deroulant
document.addEventListener("click", (ev) => {
    if (ev.target.id !== "icon-drop-down-navigation-bar" && isMenuClick) {
        dropDownMenu.style.display = "none";
        isMenuClick = false;
    }
})


/**
 * Cr??e une ecoute d'evenement pour un bouton lorsque il est en contact de la souris
 * Applique une animation FadeIn ou FadeOut selon o?? la souris ce situe
 * @param button document.getElementById ...
 * @param id Un String qui contient l'ID du bouton concerner (ex: "nav1Button0")
 */
function addEventListenerOverButton(button, id) {
    let navsButtons = [nav1button0, nav1button1, nav1button2, nav1button3];

    button.addEventListener("mouseover", () => {
        for(let n = 0; n < navsButtons.length; n++) {
            if(navsButtons[n].id !== id)
                navsButtons[n].style.animationName = 'opacityOut';
            else navsButtons[n].style.animationName = 'opacityIn';

            navsButtons[n].style.animationDuration = '.5s';
            navsButtons[n].style.animationFillMode = 'forwards';
        }
    });
}

// Animation de "Focus".
addEventListenerOverButton(nav1button0, "nav1Button0");     // Accueil
addEventListenerOverButton(nav1button1, "nav1Button1");     // Videos
addEventListenerOverButton(nav1button2, "nav1Button2");     // Projets
addEventListenerOverButton(nav1button3, "nav1Button3");     // Competence
// addEventListenerOverButton(nav1button4, "nav1Button4");     // Contact


// Quand le souris se retire de la barre de navigation, tous les boutons reviennent a la normale.
navBar1.addEventListener("pointerleave", () => {
    let navsButtons = [nav1button0, nav1button1, nav1button2, nav1button3];

    for(let n = 0; n < navsButtons.length; n++)
        navsButtons[n].style.animationName = 'opacityIn';
});

