

function yScroll(){
    var pageTop = document.getElementById('pageTop');
    var menu = document.getElementById('menu');
    var yPosition = window.pageYOffset;
    var logo1 = document.getElementById('logo');
    var logo2 = document.getElementById('logo2');
    var wrapper = document.getElementById('wrapper');
    var width = window.innerWidth;


    if (yPosition > 100 && width < 600) {
        //Shrink banner
        pageTop.style.height = '30px';
        logo1.style.display='none';
        logo2.style.display='initial';
        logo2.style.marginTop='0px';
        menu.style.marginTop = '30px';

    } else if (yPosition < 100 && width < 600) {
        // Restore banner to default
        pageTop.style.height = '100px';
        logo1.style.display='initial';
        logo2.style.display='none';
        menu.style.marginTop = '67px';

    } else if (width < 600  ) {
        // Shrink Banner
        pageTop.style.height = '30px';
        logo1.style.display='none';
        logo2.style.display='initial';
        logo2.style.marginTop='0px';
        menu.style.marginTop = '30px';

    } else if ( yPosition > 100 ) {
        // Shrink Banner
        pageTop.style.height = '30px';
        logo1.style.display='none';
        logo2.style.display='initial';
        logo2.style.marginTop='0px';
        menu.style.marginTop = '30px';
    } else {
        // Restore banner to default
        pageTop.style.height = '200px';
        logo1.style.display='initial';
        logo2.style.display='none';
        menu.style.marginTop = '115px';
    }
};

window.addEventListener('scroll', yScroll);

window.addEventListener('resize', yScroll);

//var intial window size = innerwidth
//window.innerwidth


var more1 = document.getElementById('more1');
var more2 = document.getElementById('more2');
var about1 = document.getElementById('aboutParagraph1');
var about2 = document.getElementById('aboutParagraph2');


function toggleAbout1(){
    if (about1.style.display === 'none') {
        about1.style.display = 'inline-block'
    } else {
        about1.style.display = 'none'
    }
}

function toggleAbout2(){
    if (about2.style.display === 'none') {
        about2.style.display = 'inline-block'
    } else {
        about2.style.display = 'none'
    }
}


more1.addEventListener('click', toggleAbout1);
more2.addEventListener('click', toggleAbout2);