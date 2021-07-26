(() => {
    // Nav starts at bottom then is fixed to top
    // Logo and hamburger menus fade in and out
    const ITEMS = [...$$(".nav-item")]
    const SECTIONS = [...$$("main > section")].reverse()
    const THRESHOLD = 330
    var oldIdx = -1
    let loaded = 0;

    const elements = ["about", "blog", "footr", "work", "contact"]
    window.COLOURS = ["burlywood", "brown", "cadetblue", "crimson", "sienna", "indianred", "cornflowerblue"]

    function selectRandomColourName(colours) {
        let index = Math.floor(Math.random() * colours.length);
        let colour = colours[index];
        colours.splice(colours.indexOf(colour), 1);
        return colour;
    }

    function addStyles(currentItem) {
        var item = currentItem.getElementsByTagName('a')[0]
        var id = item.id.toLowerCase()
        // if (id == "contact") { return }
        // we don't want contact text to colour to be as pale as colour background 
        var colourStyles = window.getComputedStyle(document.getElementById(id))
        var bColour = colourStyles.getPropertyValue('background-color');
        item.style.color = bColour;
        if (loaded == 1) {
            item.style.borderBottom = "3px solid"
        }
    }

    function removeStyles(currentItem) {
        var item = currentItem.getElementsByTagName('a')[0]
        item.style.borderBottom = "";
    }

    function changeNavHeader(idx) {
        ITEMS.forEach((itm) => {
            itm.classList.remove("nav-item-active");
            removeStyles(itm);
        });
        if (idx < SECTIONS.length) {
            ITEMS[idx].classList.add("nav-item-active");
            addStyles(ITEMS[idx]);
            // addText(ITEMS[idx]);
        }
        oldIdx = idx
    }

    window.addEventListener('load', (event) => {
        let colours = JSON.parse(JSON.stringify(window.COLOURS));
        elements.forEach((element) => {
            colour = selectRandomColourName(colours);
            document.getElementById(element).style.backgroundColor = colour;
        })
        ITEMS.forEach((item) => { addStyles(item) })
        loaded++
    });

    $$(".gallery-item").forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            let textOptions = { "Services": "Services", "Technology": "TECH", "We're hiring": "Vacancies"};
            if (textOptions[item.innerText] ) { $('#Work').innerText = textOptions[item.innerText]};
            $('#Work').style.color = item.style.backgroundColor;
            $('#Work').style.borderBottom = "3px solid"
        })
    });

    document.getElementById('work').addEventListener('mouseenter', (e) => {
        ITEMS.forEach((item) => {
            var colourStyles = window.getComputedStyle(item);
            var borderStyle = colourStyles.getPropertyValue('borderBottom');
            if (item.innerText == "work" && borderStyle != "" )  {
            item.style.borderBottom = "3px solid";
            }
        })
    })

    window.addEventListener("scroll", (event) => {
        var scrollPosition = window.scrollY || window.pageYOffset
        windowHeight = window.innerHeight
        navHeight = nav.clientHeight

        if (scrollPosition > windowHeight - navHeight) {
            if (!navFixed) { requestAnimationFrame(() => fixNav(true)) }
        } else {
            if (navFixed) { requestAnimationFrame(() => fixNav(false)) }
        }
        const idx = SECTIONS.length - 1 - SECTIONS.findIndex(
            (sec) => scrollPosition > sec.offsetTop - THRESHOLD
        )
        if (idx != oldIdx) {
            requestAnimationFrame(() => { changeNavHeader(idx) })
        }
    });
})()