(function () {
    "use strict";

    // Easy selector helper function

    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    // Easy event listener function

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    //Easy on scroll event listener 

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
    };

    //Navbar links active state on scroll

    let navbarlinks = select('.side-bar .side-bar__link', true);
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
    };
    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);

    //Scrolls to an element with header offset

    const scrollto = (el) => {
        let elementPos = select(el).offsetTop;
        window.scrollTo({
            top: elementPos,
            behavior: 'smooth'
        });
    };


    //Mobile nav toggle

    on('click', '.navbar-toggler', function () {
        select('aside').classList.toggle('show');
        this.classList.toggle('show');
    });


    //Scrool with ofset on links with a class name .side-bar__link

    on('click', '.side-bar__link', function (e) {
        if (select(this.hash)) {
            e.preventDefault();
            scrollto(this.hash);

        }
    }, true);

    //Scroll with ofset on page load with hash links in the url

    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash);
            }
        }
    });

})();