const navFixed = {
    headerDoc: document.getElementById('header'),
    init() {
        window.addEventListener('scroll', (e) => {
            if (window.pageYOffset > 850) {
                this.headerDoc.classList.add('header-animate-open')
            }
            if (this.headerDoc.classList.contains('header-animate-open')) {
                if (window.pageYOffset < 800) {
                    this.headerDoc.classList.remove('header-animate-open');
                    this.headerDoc.classList.add('header-animate-close');
                    const time = setTimeout(() => {
                        this.headerDoc.classList.remove('header-animate-close')
                    }, 300)
                }
            }
        })
    },
};
navFixed.init();

const scroll = {
    navList: document.querySelectorAll('#header a'),
    navName: [],
    secList: document.querySelectorAll('#main section'),
    secName: [],
    init() {
        this.NavNameList();
        this.SecOffsetList();
        this.clickNavList();
    },
    // Created Function who give scrolling`s name
    NavNameList() {
        this.navList.forEach((item) => {
            this.navName.push(item.dataset.scroll)
        });
    },
    // Created function who give offset scrolling`s sections
    SecOffsetList() {
        this.navName.forEach((name) => {
            this.secList.forEach((sec) => {
                if (sec.dataset.scrollto === name) {
                    console.log(sec.querySelector('div[class$="-container"]'))
                    this.secName.push(sec.querySelector('div[class$="-container"]').offsetTop)
                }
            })
        })
    },
    // Created function to click on navList
    clickNavList() {
        this.navList.forEach((nav, index) => {
            nav.addEventListener('click', (e) => {
                if (nav.dataset.scroll === 'home') {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    })
                } else {
                    window.scrollTo({
                        top: this.secName[index],
                        left: 0,
                        behavior: "smooth"
                    })
                }
            })
        })
    },

};
scroll.init();

const video = {

}