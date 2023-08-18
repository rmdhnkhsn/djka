
let sidebar = document.querySelector(".sidebar");
let backdrop = document.querySelector("#backdrop");
let sidebarBtn = document.querySelector(".nav-toggle");

sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
  backdrop.classList.toggle("sidebar-backdrop");
});

var classList = document.getElementById('sideBar').classList;
var maxWidth850 = window.matchMedia("(max-width: 850px)");
function match() {
    maxWidth850.matches ? classList.add('close') : classList.remove('close');
}
maxWidth850.addListener(match);
match();

$(".hideBar").on("click", function(){
  $(".sidebar").addClass("close");
  $("#backdrop").removeClass("sidebar-backdrop");
});


// MENU ACTIVE FUNCTION
$(".menu-link").on("click", function(){
  $(".menu-link").removeClass("active");
  $(this).addClass("active");

  $(".submenu-link").on("click", function(){
    $(".menu-link").removeClass("active");
  });
});

$(".submenu-link").on("click", function(){
  $(".submenu-link").removeClass("active");
  $(this).addClass("active");

  $(".menu-link").on("click", function(){
    $(".submenu-link").removeClass("active");
  });
});

const accordionBtns = document.querySelectorAll(".accordionHead");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});

// ACCORDION SIDE BAR
let accHeading = document.querySelectorAll(".arrow-link");
let accPanel = document.querySelectorAll(".submenu");

for (let i = 0; i < accHeading.length; i++) {
    accHeading[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels();
        } else {
           showPanel(this);
        } 
    };
}
function showPanel(elem) {
  hidePanels();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}
function hidePanels() {
  for (let i = 0; i < accPanel.length; i++) {
      accPanel[i].style.maxHeight = null;
      accHeading[i].classList.remove("active");
  }
}