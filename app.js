// - - - - - - - VARIBLES - - - - - - - - - -
let darkModeTracker = 0;
const sections = ['bio','projects','home','experiences','contact'];

// - - - - - - - FUNCTIONS - - - - - - - - -
const darkMode =()=> {
    // ADD Transition
    if (darkModeTracker === 0){
        $(':root').css('--background', 'var(--space-blue)');
        $(':root').css('--font-color', 'whitesmoke');
        darkModeTracker += 1;
    } else {
        $(':root').css('--background', 'whitesmoke');
        $(':root').css('--font-color', 'var(--space-blue)');
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
};

const sectionButton =(sectionID, sectionIndex)=> {
    changeMainDisplay(sectionID);
    adjustSideButtons(sectionIndex+1);
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