// - - - - - - - VARIBLES - - - - - - - - - -
let darkModeTracker = 0;
const sections = ['bio','projects','home','experiences','contact'];

// - - - - - - - FUNCTIONS - - - - - - - - -
const darkMode =()=> {
    // ADD Transition
    if (darkModeTracker === 0){
        $(':root').css('--background', 'var(--D1)');
        $(':root').css('--font-color', 'var(--D2)');
        $(':root').css('--social-icons', 'var(--D3)');
        $(':root').css('--side-button-1', 'var(--D4)');
        $(':root').css('--side-button-1-font', 'var(--D5)');
        $(':root').css('--side-button-2', 'var(--D6)');
        $(':root').css('--side-button-2-font', 'var(--D7)');
        $(':root').css('--side-button-3', 'var(--D8)');
        $(':root').css('--side-button-3-font', 'var(--D9)');
        $(':root').css('--side-button-4', 'var(--D10)');
        $(':root').css('--side-button-4-font', 'var(--D11)');
        $(':root').css('--footer', 'var(--D12)');
        $(':root').css('--resume-download', 'var(--D13)');
        $('.dark').css('display', 'block');
        $('.light').css('display', 'none');
        darkModeTracker += 1;
    } else {
        $(':root').css('--background', 'var(--L1)');
        $(':root').css('--font-color', 'var(--L2)');
        $(':root').css('--social-icons', 'var(--L3)');
        $(':root').css('--side-button-1', 'var(--L4)');
        $(':root').css('--side-button-1-font', 'var(--L5)');
        $(':root').css('--side-button-2', 'var(--L6)');
        $(':root').css('--side-button-2-font', 'var(--L7)');
        $(':root').css('--side-button-3', 'var(--L8)');
        $(':root').css('--side-button-3-font', 'var(--L9)');
        $(':root').css('--side-button-4', 'var(--L10)');
        $(':root').css('--side-button-4-font', 'var(--L11)');
        $(':root').css('--footer', 'var(--L12)');
        $(':root').css('--resume-download', 'var(--L13)');
        $('.dark').css('display', 'none');
        $('.light').css('display', 'block');
        darkModeTracker -= 1;
    }
};

    const changeMainDisplay =(sectionID)=> {
        $(`#${sectionID}`).prependTo('#main-display');
    };

    const adjustSideButtons =(sectionPosition)=> {
        // hide everything in the off sections
        $(`.left-side`).appendTo('#off-left');
        $(`.right-side`).appendTo('#off-right');
        // left
        for (let i =1; i < sectionPosition; i++) {
            $(`#L${i}`).appendTo('#on-left');
        }
        // right
        for (let i = (sections.length)+1; i > sectionPosition; i--) {
            $(`#R${i}`).prependTo('#on-right');
        }
        // fade ins
        $(`.left-side`).fadeIn(3000);
        $(`.right-side`).fadeIn(3000);
    };

const sectionButton =(sectionID, sectionIndex)=> {
    // fade outs
    $(`.left-side`).fadeOut(1);
    $(`.right-side`).fadeOut(1);
    // Functions
    changeMainDisplay(sectionID);
    adjustSideButtons(sectionIndex+1);
    window.scrollTo(0,0);
};

const leftCarousel =()=> {
    $('.project-imgs').children().last().prependTo('.project-imgs');
};

const rightCarousel =()=> {
    $('.project-imgs').children().first().appendTo('.project-imgs');
};

const showModal =(num)=> {
    $(`#P${num}`).css('visibility', 'visible'); 
};

const hideModal =()=> {
    $(".modal-project").css('visibility', 'hidden');    
};


// - - - - - - - - DOM - - - - - - - - - - -
$(()=> {
    // Fade in at the start
    // $('.background').fadeTo(3000, 0.5);
    // Dark Mode button
    $('input').on('click', darkMode);
    // Navigating buttons
    $('.home-button').on('click', ()=>{sectionButton('home', sections.indexOf('home'))});
    $('.projects-button').on('click', ()=>{sectionButton('projects', sections.indexOf('projects'))});
    $('.bio-button').on('click', ()=>{sectionButton('bio', sections.indexOf('bio'))});
    $('.experiences-button').on('click', ()=>{sectionButton('experiences', sections.indexOf('experiences'))});
    $('.contact-button').on('click', ()=>{sectionButton('contact', sections.indexOf('contact'))});
    // Projects Carousel
    $('#left-arrow').on('click', leftCarousel);
    $('#right-arrow').on('click', rightCarousel);
    // Modal
    $('#project1').on('click', ()=> {showModal(1)});
    $('#project2').on('click', ()=> {showModal(2)});
    $('#project3').on('click', ()=> {showModal(3)});
    $('.modal-project').on('click', hideModal);
});