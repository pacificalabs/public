(() => {
    // Nav starts at bottom then is fixed to top
    // Logo and hamburger menus fade in and out
    const ITEMS = [...$$(".nav-item")]
    const SECTIONS = [...$$("main > section")].reverse()
    const THRESHOLD = 330
    var oldIdx = -1
    let loaded = 0;

    // let section = document.getElementsByTagName("section");
    const elements = ["about", "blog", "footr"]
    window.COLOURS = ["burlywood", "brown", "cadetblue", "crimson", "sienna", "indianred", "cornflowerblue"]
    window.COLOURED = [];

    function addStyles(currentItem) {
        var item = currentItem.getElementsByTagName('a')[0]
        var id = item.id.toLowerCase()
        var color = document.getElementById(id).style.backgroundColor
        item.style.color = color;
        if (loaded == 1) {
            item.style.borderBottom = "3px solid"
        }
    }

    function addText(currentItem) {
        debugger;
    }

    function removeText(currentItem) {
        debugger;
    }

    function removeStyles(currentItem) {
        var item = currentItem.getElementsByTagName('a')[0]
        var id = item.id.toLowerCase()
        var color = document.getElementById(id).style.backgroundColor
        item.style.borderTop = "";
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

    // function addColourToNavItem() {
    //     ITEMS.forEach((item) => {
    //         item.classList.add(window.COLOURED[ITEMS.indexOf(item)]);
    //         window.COLOURED.forEach((colore) => {
    //             console.log("removecolore", colore)
    //             console.log("1", window.item.classList.value)
    //             window.item.classList.remove(colore);
    //             console.log("2", window.item.classList.value)
    //         })
    //         console.log("removecolour", colour)
    //         console.log(window.COLOURS)
    //         console.log(window.COLOURS)
    //         console.log("3", window.item.classList.value)
    //     });
    // }
    window.addEventListener('load', (event) => {
        let colours = window.COLOURS;
        elements.forEach((element) => {
            let index = Math.floor(Math.random() * colours.length);
            let colour = colours[index];
            colours.splice(colours.indexOf(colour), 1);
            document.getElementById(element).style.backgroundColor = colour;
            document.getElementById(element).style.color = "#fff";
        })
        ITEMS.forEach((item) => { addStyles(item) })
        $('#Work').style.color = "cornflowerblue"
        loaded++
    });

    $$(".gallery-item").forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            $('#Work').innerText = item.innerText;
            $('#Work').style.color = item.style.backgroundColor;
            $('#Work').style.borderBottom = "3px solid"
        })
    });

    document.getElementById('blog').addEventListener('mouseenter', (e) => {
        [...$$('.nav-item')].forEach((item) => {
            item.style.borderBottom = ""
            $('#Blog').style.borderBottom = "3px solid"
        })
    })

    // document.getElementById('blog').addEventListener('mouseleave', (e) => {
    //     [...$$('.nav-item')].forEach((item) => {
    //         item.style.borderBottom = ""
    //     })
    // })

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

    /*
    var header = $('header')
    var oldViewportHeight = 0;
    const heightChangeThreshold = 120; // approximate address bar height fits for Chrome (100) and Brave (104)
    // Viewport size in mobile is impaired by address bar that automatically collapses on scroll.
    // This updates it to the "real dynamic viewport size"
    function updateViewportToInner() {
      // Adapted from: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
      // let vh = window.innerHeight * 0.01;
      // document.documentElement.style.setProperty('--vh', `${vh}px`);

      // The following is a nasty hack and definitely not perfect: 
      // We only want to change the height if the user directly resizes the window, 
      // hence we aim to ignore "auto-collapse" address bar resize events by only resizing if guessed threshold was exceeded.
      if (Math.abs(oldViewportHeight - window.innerHeight) > heightChangeThreshold) {
        // header.style.maxHeight = window.innerHeight + 'px'
        header.style.height = window.innerHeight + 'px'
        oldViewportHeight = window.innerHeight
      }
    }
    updateViewportToInner()
    window.addEventListener('resize', updateViewportToInner)
    */
})()