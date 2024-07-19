alert("Hi");

const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");

let left_content = document.querySelectorAll(".Left_Content p");
let Description = document.querySelectorAll(".Description div");
let mobile = document.querySelectorAll(".Mobile_nav li");

let main = document.querySelectorAll(".main .Content");
let content_normal = document.querySelectorAll(".Rightnav ul li");

for (let i = 0; i < main.length; i++) {  
    mobile[i].addEventListener("click", function() {
        selection(mobile, main, i , 'flex');
        mobile[i].classList.remove("selected");
    });

    content_normal[i].addEventListener("click", function() {
        selection(content_normal, main, i , 'flex');
        content_normal[i].classList.remove("selected");
    });
}

function hideall() { //function to hide all pages
    for (let onepage of Description) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}

function selection(content_bar, Desc, pgno , styling) {
    for (var i = 0; i < content_bar.length; i++) {
        console.log(pgno);
        console.log(i);
        if (pgno == i) {
            
            content_bar[i].classList.remove("none");
            content_bar[i].classList.add("selected");
            Desc[i].style.display = styling;
            // Desc[i].classList.remove('Sector');
            // Desc[i].classList.add('Sector_Selected');
        }
        else{
            
            content_bar[i].classList.remove("selected");
            content_bar[i].classList.add("none");
            Desc[i].style.display = 'none';
            // Desc[i].classList.remove('Sector_Selected');
            // Desc[i].classList.add('Sector');
        }
    }
}

function hover(hover , change){
    for (let i = 0 ;i < hover.length ; i++){

        hover[i].addEventListener('mouseover' , () =>{
            hover[i].classList.add(change);

        });

        hover[i].addEventListener('mouseout' , () =>{
            hover[i].classList.remove(change);

        });
    }
}

document.addEventListener('DOMContentLoaded', function(){
    hover(left_content , 'hover');
});

document.addEventListener('DOMContentLoaded', function(){
    hover(mobile , 'hover');
});

page1btn.addEventListener("click", function() {
    selection(left_content, Description, 0 , 'block');
});

page2btn.addEventListener("click", function() {
    selection(left_content, Description, 1 ,'block');
});

page3btn.addEventListener("click", function() {
    selection(left_content, Description, 2 , 'block');
});

page4btn.addEventListener("click", function() {
    selection(left_content, Description, 3 , 'block');
});


const Slider = document.querySelectorAll('background');
var slider_index;
function Initial(){
    
}
const nav = document.querySelector('.topnav');

const hamberger_menu = document.querySelector(".Hamberger_menu");
const mobile_nav = document.querySelector(".Mobile_nav");

function MenuColorChange(){
    
    window.addEventListener('scroll', function() {
        IfScroll(nav);
    });
    window.addEventListener('resize', check);
}

function IfScroll(navigation){
    if (window.scrollY > 0) {
        navigation.classList.add('solid-bg');
    } 
    // else if (window.scrollY <= 0 && window.innerWidth < 800 && !mobile_nav.classList.contains('Sector')) {
        
    // }
    else{
        navigation.classList.remove('solid-bg'); 
    }
}


// mobile_nav.classList.contains('Sector');

function Show_menu(){
    
    if(mobile_nav.classList.contains('Sector') == true){
        mobile_nav.classList.remove('Sector')
        nav.classList.add('solid-bg');
    }
    else if(mobile_nav.classList.contains('Sector') == false){
        mobile_nav.classList.add('Sector')
        if(window.scrollY <= 0){
            nav.classList.remove('solid-bg');
        }
        // nav.classList.remove('solid-bg');
    }

    // if(mobile_nav.style.display == 'none'){
    //     mobile_nav.style.display = 'flex';
    // }
    // else if(mobile_nav.style.display == 'flex'){
    //     mobile_nav.style.display = 'none';
    // }

}

function check(){
    if (window.scrollY > 0 || (window.innerWidth < 800 && !(mobile_nav.classList.contains('Sector')))) {
        nav.classList.add('solid-bg');
    } 
    else {
        nav.classList.remove('solid-bg');
    }
}



document.addEventListener('DOMContentLoaded', check);
document.addEventListener('DOMContentLoaded', MenuColorChange);
hamberger_menu.addEventListener('click', Show_menu);
