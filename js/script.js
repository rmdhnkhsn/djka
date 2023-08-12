
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
