var menuActive = false
var navFixed = false
var nav = $('nav')
navToggleAndLogo = $$('nav > .logo, nav > .nav-toggle')

var navColours = ["hotpink", "darkblue", "aquamarine", "blue", "darkolivegreen"]

function fixNav(setFixed) {
    if (setFixed) {
        let index = Math.floor(Math.random() * navColours.length);
        let colour = navColours[index];
        nav.style.backgroundColor = colour
        $('#Work').style.color = "white"
        nav.classList.add('nav-fixed')
        navToggleAndLogo.forEach((el) => {
            setVisibility(el, true, false)
        })
    } else {
        let index = Math.floor(Math.random() * navColours.length);
        let colour = navColours[index];
        nav.style.backgroundColor = "#fff";
        // $('#Work').style.color = "cornflowerblue"
        nav.classList.remove('nav-fixed')
        navToggleAndLogo.forEach((el) => {
            setVisibility(el, false, false)
        })
    }
    navFixed = setFixed
}

function toggleMenu() {
    if (menuActive) {
        $('.nav-icon').classList.remove('icon-active')
    } else {
        $('.nav-icon').classList.add('icon-active')
    }
    menuActive = !menuActive
}

// Full screen nav open on click
$('.nav-icon').addEventListener('click', () => {
    toggleMenu()
    $$('.nav-full, main').forEach((el) => {
        el.classList.toggle('active')
    })
})

// Full screen nav close on click
$$('.nav-full a').forEach((links) => {
    links.addEventListener('click', () => {
        toggleMenu()
        $$('.nav-full, main').forEach((el) => {
            el.classList.toggle('active')
        })
    })
})

// Fix logoBig drawing over nav when click on logoSmall while nav open
$('.logo').addEventListener('click', () => {
    if ($('.nav-full').classList.contains('active')) {
        toggleMenu()
        $$('.nav-full, main').forEach((el) => {
            el.classList.toggle('active')
        })
    }
})

// Disable scroll when full screen nav is open
$('body').addEventListener('click', () => {
    if ($('.nav-full').classList.contains('active')) {
        $('html').style.overflowY = 'hidden'
    } else {
        $('html').style.overflowY = 'scroll'
    }
})