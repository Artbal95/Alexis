document.addEventListener('DOMContentLoaded', function () {
// Give me navBar container who have tags link with data-scroll attribute
    const header = document.getElementById('header');
// Give me where you want to show the navbar(px), pl without px only number
    const navShow = 650;

// Give me containers where we must scrolling html with data-scrollTo attribute
    const contList = document.querySelectorAll('section[data-scrollTo]');


// Show Navbar Object
    const showNavContainer = {
        // If we have any problems
        error: null,

        // Getting The html document
        document: document.querySelector('html'),

        // Getting Header Document
        headerDoc(navContainer) {
            // If there have a problem
            if (navContainer) {
                return navContainer
            } else {
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
        navShow(num) {
            // If there have a problem
            if (this.isInteger(num)) {
                return num
            } else {
                this.error ? this.error = null : this.error = 'Error: Please enter only a number'
            }
        },

        // Create the Scrolling function
        scrollFunc(html, navbar, open, close, pixels) {
            if (html.scrollTop > pixels) {
                navbar.classList.add(open)
            }
            window.addEventListener('scroll', (e) => {
                e.preventDefault();
                if (html.scrollTop > pixels) {
                    navbar.classList.add(open)
                }
                if (navbar.classList.contains(open)) {
                    if (html.scrollTop < (+pixels - 50)) {
                        navbar.classList.remove(open);
                        navbar.classList.add(close);
                        const time = setTimeout(() => {
                            navbar.classList.remove(close);
                            clearTimeout(time)
                        }, 300)
                    }
                }
            })
        },

        // Initialization all methods in this object
        init(navcontainer, number) {
            const navbar = this.headerDoc(navcontainer);
            const pixels = this.navShow(number);
            if (this.error) {
                alert(this.error)
            } else {
                this.scrollFunc(this.document, navbar, this.open, this.close, pixels)
            }
        },
    };
    showNavContainer.init(header, navShow);

// Scrolling The document
    const scrollDoc = {
        // If we have any problems
        error: null,

        // Getting The html document
        document: document.querySelector('html, body'),

        // Getting Header Height 55(px)
        headerHeight(navContainer) {
            // If there have a problem
            if (navContainer) {
                return navContainer.clientHeight
            } else {
                this.error ? this.error = null : this.error = 'Error: We don`t have any navBar container'
            }
        },

        // Getting All a link on header [a, a, a, ....]
        navList(navContainer) {
            if (navContainer) {
                return document.querySelectorAll('#header a')
            } else {
                this.error ? this.error = null : this.error = 'Error: We don`t have any link'
            }
        },

        // Getting All Sections [section, section, ....]
        secList(secContList) {
            if (secContList) {
                return secContList
            } else {
                this.error ? this.error = null : this.error = "Error: We dont have any sections"
            }
        },

        // Getting All a scrolling name id
        navName: [], // [about, focus,...]

        // Getting All Section`s offsetTop where must be scroll
        secName: [], // [55, 905, ...]

        // Created Function who give scrolling`s name
        NavNameList(navContainer) {
            if (this.error) {
                alert(this.error)
            } else {
                this.navList(navContainer).forEach((item) => {
                    if (item.hasAttribute('data-scroll')) {
                        this.navName.push(item.dataset.scroll)
                    } else {
                        this.error ? this.error = null : this.error = 'Error: Link doesn`t have any data-scroll Attribute'
                    }
                });
            }
        },

        // Created function who give offset scrolling`s sections
        SecOffsetList(navContainer, secContainer) {
            if (this.error) {
                alert(this.error)
            } else {
                this.navName.forEach((name) => {
                    this.secList(secContainer).forEach((sec) => {
                        if (sec.dataset.scrollto === name) {
                            this.secName.push(sec.offsetTop - this.headerHeight(navContainer))
                        } else {
                            this.error ? this.error = null : this.error = 'Error: Sections doesn`t have any data-scrollTo Attribute'
                        }
                    })
                })
            }
        },

        // Created function to click on navList
        clickNavList(navContainer) {
            if (this.error) {
                alert(this.error)
            } else {
                this.navList(navContainer).forEach((nav, index) => {
                    nav.addEventListener('click', () => {
                        if (nav.hash !== '') {
                            window.location.hash = nav.hash;
                            this.document.scrollTo({
                                top: this.secName[index],
                                left: 0,
                                behavior: 'smooth'
                            })
                        } else {
                            this.document.scrollTo({
                                top: this.secName[index],
                                left: 0,
                                behavior: 'smooth'
                            })
                        }
                    })
                })
            }
        },

        // Initialization all methods in this object
        init(navContainer, secContList) {
            this.NavNameList(navContainer);
            this.SecOffsetList(navContainer, secContList);
            this.clickNavList(navContainer);
        },
    };
    scrollDoc.init(header, contList);

// Show or Hide Video Container
    const modaVideo = {
        // Getting Video Container
        videoContainer: document.getElementById('moda-video'),

        videoBgClose: document.getElementById('moda-bg-close'),

        // Getting Open tag
        openTag: document.getElementById('moda-video-open'),

        // Getting close Tag
        closeTag: document.getElementById('moda-video-close'),

        // Getting Video Tag
        videoTag: document.getElementById('moda-video-item'),

        // Created Function to open Video container
        openVideoTag() {
            let count = 0;
            this.openTag.addEventListener('click', (e) => {
                e.preventDefault();
                count++;
                if (count === 1) {
                    this.videoContainer.style.top = '0%';
                    const time = setTimeout(() => {
                        this.videoTag.play();
                        clearTimeout(time)
                    }, 1100);
                    count = 0
                }
            })
        },

        // Created Function to close Video container
        closeVideoTag() {
            let count = 0;
            count++;
            if (count === 1) {
                this.videoContainer.style.top = '-200%';
                this.videoTag.pause();
                this.videoTag.currentTime = 0;
                count = 0
            }
        },

        // Created Function to close Video Container with video container
        closeVideoTagVideoContainer() {
            this.closeTag.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeVideoTag()
            });
            this.videoBgClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeVideoTag()
            })
        },

        // Initialization all methods in this object
        init() {
            this.openVideoTag();
            this.closeVideoTagVideoContainer()
        }

    };
    modaVideo.init();

// Show Person`s information
    const personInfo = {
        // Getting Persons containers, who have data-infoCard attribute
        personCard: document.querySelectorAll('#team-table-card div[data-infoCard]'),

        // Getting Information Tags who must animated, and who have data-name attribute
        infoCard: document.querySelectorAll('#team-table-slide div[data-infoCard]'),

        // Getting All Titles
        pTags: document.querySelectorAll('#team-table-slide .team-table-info-title'),

        // Getting that classname who help us to animated
        animateClass: 'team-slide',

        // Getting Arrow
        arrowTag: document.getElementById('team-arrow'),

        // Give Current place where must be Arrow
        arrowPlace() {
            let leftBord = +this.personCard[0].offsetLeft;
            let cardWidth = +this.personCard[0].offsetWidth / 2;
            let arrow = {};
            this.personCard.forEach((person, index) => {
                arrow[index] = (+person.offsetLeft - leftBord) + cardWidth
            })
            return arrow
        },

        // Writing Names
        writeName() {
            this.personCard.forEach((person, index) => {
                this.pTags[index].innerHTML = `About ${person.dataset.name}`
            })
        },

        // Created Function to animated
        personClick() {
            const arrow = this.arrowPlace()
            this.personCard.forEach((person, index) => {
                person.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.infoCard.forEach((info) => {
                        if (person.dataset.infocard === info.dataset.infocard) {
                            info.classList.remove(this.animateClass);
                            this.arrowTag.style.left = `${arrow[index]}px`
                        } else {
                            info.classList.add(this.animateClass)
                        }
                    })
                })
            })
        },


        // Initialization all methods in this object
        init() {
            this.arrowPlace()
            this.writeName()
            this.personClick()
        }
    };
    personInfo.init()

// Options animated
    const options = {
        // Get options tags
        optionTags: document.querySelectorAll('#options p[data-option]'),// [p, p, p, p]

        // Get p tags data-options name
        optionNameWrite(){
            let optionName = []
            this.optionTags.forEach((option) => {
                optionName.push(option.dataset.option)
            })
            return optionName
        },

        // Get default value if there have a problem with server
        byDefault() {
            const optionName = this.optionNameWrite()
                return{
                    [optionName[0]]: 12458,
                    [optionName[1]]: 1796,
                    [optionName[2]]: 1000,
                    [optionName[3]]: 1500,
                }
        },

        // Numbers styling
        styleNumbers(){
            const byDefault = this.byDefault()
            let styledNum = []
            Object.keys(byDefault).forEach((numIndex) => {
                let numLength = +(`${byDefault[numIndex]}`.length)
                let numString = `${byDefault[numIndex]}`
                let some = []
                if(numLength % 3 >= 1){
                    let count = -1
                    for( let i = numLength-1; i >= 0; i--){
                        count++
                        if( count === 3 ){
                            some.unshift(',')
                            some.unshift(numString.split('')[i])
                        }else{
                            some.unshift(numString.split('')[i])
                        }
                    }
                    styledNum.push(some.join(''))
                }else{
                    styledNum.push(byDefault[numIndex])
                }
            })
            return styledNum
        },

        // Create function who write that numbers
        writeNumbers() {
            this.optionTags.forEach((option, index) => {
                option.innerHTML = `${this.styleNumbers()[index]}+`
            })
        },

        // Scrolling Function
        init(){
            this.writeNumbers()
        }
    }
    options.init()






});