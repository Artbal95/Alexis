// Give me navBar container who have tags link with data-scroll attribute
const header = document.getElementById('header')
// Give me where you want to show the navbar(px), pl without px only number
const navShow = 650

// Give me containers where we must scrolling html with data-scrollTo attribute
const contList = document.querySelectorAll('section[data-scrollTo]')


// Show Navbar Object
const showNavContainer = {
    
    // If we have any problems
    error: null,
    // Getting The html document
    document: document.querySelector('html'),
    // Getting Header Document
    headerDoc(navContainer) {
        // If there have a problem
        if(navContainer){
            return navContainer
        }else{
            this.error ? this.error = null : this.error = 'Error: We don`t have any navBar container'
        }
    },
    // The Css Animate Name of Class (Open, Close)
    open: 'header-animate-open',
    close: 'header-animate-close',
    // Checks the number
    isInteger(num) {
        return (num ^ 0) === num && num > 0;
    },
    // The Show pixels
    navShow(num){
        // If there have a problem
        if(this.isInteger(num)){
            return num
        }else{
            this.error ? this.error = null : this.error = 'Error: Please enter only a number'
        }
    },
    // Create the Scrolling function
    scrollFunc(html, navbar, open, close, pixels){
        window.addEventListener('scroll', (e) => {
            e.preventDefault()
            if (html.scrollTop > pixels) {
                navbar.classList.add(open)
            }
            if (navbar.classList.contains(open)) {
                if (html.scrollTop < (+pixels - 50)) {
                    navbar.classList.remove(open);
                    navbar.classList.add(close);
                    const time = setTimeout(() => {
                        navbar.classList.remove(close)
                        clearTimeout(time)
                    }, 300)
                }
            }
        })
    },
    init(navcontainer, number) {
        const navbar = this.headerDoc(navcontainer)
        const pixels = this.navShow(number)
        if(this.error){
            alert(this.error)
        }else{
            this.scrollFunc(this.document, navbar, this.open, this.close, pixels)
        }
    },
};
showNavContainer.init(header, navShow);

const scroll = {
    // Getting The html document
    document: document.querySelector('html, body'),
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

