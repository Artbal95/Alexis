const navFixed = {
    headerDoc: document.getElementById('header'),
    init() {
        window.addEventListener('scroll', (e) => {
            if (window.pageYOffset > 650) {
                this.headerDoc.classList.add('header-animate-open')
            }
            if (this.headerDoc.classList.contains('header-animate-open')) {
                if (window.pageYOffset < 600) {
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
    // Getting The html document
    document: document.querySelector('html'),
    // Getting Header Height
    headHeight: +document.getElementById('header').clientHeight,
    // Getting All a link on header
    navList: document.querySelectorAll('#header a'),
    // Getting All a scrolling name id
    navName: [], // [about, focus,...]
    // Getting All Sections
    secList: document.querySelectorAll('section'),
    // Getting All Section`s offsetTop who have scroll
    secName: [], // [55, 905, ...]
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
                    this.secName.push(sec.offsetTop - this.headHeight)
                }
            })
        })
    },
    // Created function to click on navList
    clickNavList() {
        this.navList.forEach((nav, index) => {
            nav.addEventListener('click', (e) => {
                    this.document.scrollTo({
                        top: this.secName[index],
                        left: 0,
                        behavior: 'smooth'
                    })
            })
        })
    },

};
scroll.init();

