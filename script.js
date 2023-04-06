//  hanlde class
function toggle (eles = [], classes) {
  eles.forEach(ele => {
    ele.classList.toggle(classes);
  })
}
function remove (elements = [], classer) {
  elements.forEach(element => {
    element.classList.remove(classer);
  })
}
function Color(items = [], colors) {
  items.forEach(item => {
    item.style.color = (colors);
  })
}
// handle click Form 
(function() {
const headerIconSearch = document.querySelector(".header-icon-search");
const headerContainer = document.querySelector(".header-container");
const headerForm = document.querySelector(".header-form");
const headerFormClose = document.querySelector(".header-form-icons");
const headerbarsMb = document.querySelector(".header-bars-mobile");
const headerbarsTb = document.querySelector(".header-bars-table");
headerIconSearch.addEventListener("click", (e) => {
  toggle([headerContainer,  headerbarsMb, headerbarsTb], "is-noneForm")
  headerForm.classList.toggle("is-showForm");
})
headerFormClose.addEventListener("click",() => {
  toggle([headerbarsMb,headerContainer, headerbarsTb ], "is-noneForm")
  headerForm.classList.toggle("is-showForm");
})

})();
// handle click Mobile 
(function () {
  const menuMobileIcon = document.querySelector(".header-bars-mobile");
  const menuMobile = document.querySelector(".menu-mb");
  const wrapperMobile = document.querySelector(".wrapper ");
  const headerMobile = document.querySelector(".header ");
  menuMobileIcon.addEventListener("click", (e) => {
    menuMobile.classList.toggle("is-showMenuMb");
    toggle([headerMobile,wrapperMobile], "is-showMb");
  })
  document.addEventListener("click", (e) => {
    if (!menuMobile.contains(e.target) && !e.target.matches(".header-bars-mobile")) {
      menuMobile.classList.remove("is-showMenuMb");
      remove([headerMobile, wrapperMobile], "is-showMb");
    }
  });
})();
// handle click Menu-tb
(function() {
const menuTableIcon = document.querySelector(".header-bars-table");
const menuTable = document.querySelector(".menu-tb");
const wrapperTable = document.querySelector(".wrapper ");
const headerTable = document.querySelector(".header ");
const optionTable = document.querySelector(".option");
const optionIconTable = document.querySelector(".option-icon");
menuTableIcon.addEventListener("click", () => {
  toggle([wrapperTable, headerTable], "is-showLeftTB")
  menuTable.classList.toggle("is-showTb");
  optionTable.classList.toggle("is-showOptionTB");
});
optionIconTable.addEventListener("click", () => {
  toggle([wrapperTable, headerTable], "is-showLeftTB")
  menuTable.classList.toggle("is-showTb");
  optionTable.classList.toggle("is-showOptionTB");
  optionTable.classList.toggle("option-show");
});
})();
// Header Scroll
(function() {
  const header = document.querySelector(".header");
  const headerImg = document.querySelector(".header-img");
  const headerLink = document.querySelectorAll(".header-item-link");
  const headerIcon = document.querySelectorAll(".header-icon");
  const headerIconBars = document.querySelector(".header-icon-bars");
  const headerIconBarsMobile = document.querySelector(".header-bars-mobile");
  const formIconClose = document.querySelector(".header-form-icons");
  const headerTbImg = document.querySelector(".header-bars-table");
  const headerMbImg = document.querySelector(".header-bars-mobile");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    if (scrollY >= 100) {
      headerLink.forEach((item) => (item.style.color = "#333"));
      headerIcon.forEach((item) => (item.style.color = "#333"));
      header.style.background = "#fff";
      header.style.boxShadow = "0 0 2px rgb(0 0 0 / 10)";
      headerIconBars.style.borderColor = "#e1e1e1";
      headerImg.setAttribute("src","http://zozothemes.com/html/epoint/demo/images/logo.png");
      Color([formIconClose, headerTbImg, headerMbImg], "#000")
    } else {
      headerLink.forEach((item) => (item.style.color = "#fff"));
      headerIcon.forEach((item) => (item.style.color = "#fff"));
      header.style.background = "transparent";
      headerIconBars.style.borderColor = "rgba(255,255,255,.2)";
      header.style.boxShadow = "none";
      headerImg.setAttribute( "src", "http://zozothemes.com/html/epoint/demo/images/logo-light.png");
      Color([formIconClose, headerTbImg, headerMbImg, headerIconBarsMobile], "#fff")
    }
  });

})();
// handle Click Dropdown Shopping
(function() {
  const headerIconShopping = document.querySelector(".header-icon-shopping");
  const shoppingDropdown = document.querySelector(".shopping-dropdown");
  headerIconShopping.addEventListener("click", (e) => {
  shoppingDropdown.classList.toggle("is-show");
  e.target.classList.toggle("blur");
});
document.addEventListener("click", (e) => {
  if (!e.target.matches(".header-icon-shopping")) {
    shoppingDropdown.classList.remove("is-show");
    headerIconShopping.classList.remove("blur");
  }
});
// handle Click Option
const optionIcon = document.querySelector(".option-icon");
const option = document.querySelector(".option");
optionIcon.addEventListener("click", () => {
  toggle([option], "option-show");
});
})();
// Handle Click Menu
(function() {
  const menu = document.querySelector(".menu");
  const wrapper = document.querySelector(".wrapper");
  const menuClose = document.querySelector(".menu-close");
  const headerIconBars = document.querySelector(".header-icon-bars");
  const header = document.querySelector(".header")
  const body = document.body;
  headerIconBars.addEventListener("click", () => {
    toggle([header, wrapper], "menu-left");
    menu.classList.toggle("menu-show");
    body.style.overflow = "hidden"
  });
  menuClose.addEventListener("click", () => {
    toggle([header, wrapper], "menu-left")
    menu.classList.remove("menu-show");
    body.style.overflow = "scroll"
  });
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".header-icon-bars")) {
      menu.classList.remove("menu-show");
      remove([header, wrapper], "menu-left")
      body.style.overflow = "scroll"
    }
  });
})();


const servicesItem = document.querySelectorAll(".services-item");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    if (scrollY >= 850) {
      servicesItem.forEach((item) => {
        item.classList.add("services-item-animation");
      });
    }
  });
  // theme show
  (function(){
  const themeTitle = document.querySelector(".theme-title");
  const themeBtn = document.querySelector(".theme-btn");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    if (scrollY >= 2150) {
      themeTitle.style.animation = "themeTitle 0.5s linear";
      themeBtn.style.animation = "themeButton 0.5s linear";
    }
  });
  })();

//slide show
function sliderShow(slider, slides, prevButton = null, nextButton = null){
  let index = 1
  let offset = 0
  let dragStart = null
  let positionInitial = 0
  let item = Array.from(slides.children)
  let countItemInWindow = Math.round(slides.clientWidth / item[0].clientWidth)
  console.log(countItemInWindow)
  
  
  function disableNativeDragging (element) {
    element.draggable = false
  }
  
  function withTransitionSuspended (callback) {
    let scheduled = null
    return () => {
      if (scheduled) {
        window.cancelAnimationFrame(scheduled)
      }
  
      scheduled = window.requestAnimationFrame(() => {
        slides.style.transition = 'none'
        callback()
  
        scheduled = window.requestAnimationFrame(() => {
          slides.style.transition = ''
          scheduled = null
        })
      })
    }
  }
  
  function getOffset () {
    return item.slice(0, index).reduce((width, image) =>
      width + image.clientWidth, 0)
  }
  
  function translateSlides (deltaX = 0) {
    slides.style.transform = `translateX(${-offset + deltaX}px)`
  }
  
  function shiftSlides (newIndex = index) {
    removeAnimation(index)
    index = newIndex
    offset = getOffset()
    translateSlides()
    addAnimation(index)
  }
  
  function fakeInfinity () {
    switch (index) {
      case 0:
        return shiftSlides(item.length - (countItemInWindow+1))
      case item.length - countItemInWindow:
        return shiftSlides(countItemInWindow)
      default:
        // pass
    }
  }
  function startDragging (event) {
      grabbing()
      slides.style.transition = 'none'
      dragStart = event.clientX
  }
  function doDragging (event) {
      if (dragStart === null) {
        return
      }
      translateSlides(event.clientX - dragStart)
  }
  function stopDragging (event) {
      grab()
      if (dragStart === null) {
        return
      }
    
      slides.style.transition = ''
      shiftSlides(index + (event.clientX < dragStart ? 1 : -1))
      dragStart = null
  }
  function startDraggingMb (event) {
      slides.style.transition = 'none'
      dragStart = event.touches[0].clientX
  }
  function doDraggingMb (event) {
      if (dragStart === null) {
        return
      }
      positionInitial = event.touches[0].clientX
      translateSlides(event.touches[0].clientX - dragStart)
  }
  function stopDraggingMb (event) {
      if (dragStart === null) {
        return
      }
      slides.style.transition = ''
      shiftSlides(index + (positionInitial < dragStart ? 1 : -1))
      positionInitial = 0
      dragStart = null
  }
  function grab(){
      slides.style.cursor = `grab`
  }
  function grabbing(){
      slides.style.cursor = `grabbing`
  }
  function addAnimation(index){
    if(slider.id == 'banner-wrapper'){
      var h2 = item[index].querySelector("h2")
      var p = item[index].querySelector("p")
      var btn = item[index].querySelector(".banner-btn")
      h2.classList.add("animation-banner")
      p.classList.add("animation-bannerDesc")
      btn.classList.add("animation-bannerBtn")
    }
  }
  function removeAnimation(index){
    if(slider.id == 'banner-wrapper'){
      var h2 = item[index].querySelector("h2")
      var p = item[index].querySelector("p")
      var btn = item[index].querySelector(".banner-btn")
      h2.classList.remove("animation-banner")
      p.classList.remove("animation-bannerDesc")
      btn.classList.remove("animation-bannerBtn")
    }
  }
  
  ;[slides, ...item].forEach(disableNativeDragging)
  if(prevButton !== null){
    prevButton.addEventListener('click', () => shiftSlides(index - 1))
  }
  if(nextButton !== null){
    nextButton.addEventListener('click', () => shiftSlides(index + 1))
  }
  window.dispatchEvent(new Event('resize'))
  window.addEventListener('resize', withTransitionSuspended(shiftSlides))
  slider.addEventListener('mousedown', startDragging)
  slider.addEventListener('mousemove', doDragging)
  slider.addEventListener('mouseleave', stopDragging)
  slider.addEventListener('mouseup', stopDragging)
  slider.addEventListener('touchstart', startDraggingMb)
  slider.addEventListener('touchmove', doDraggingMb)
  slider.addEventListener('touchend', stopDraggingMb)
  slider.addEventListener('transitionend', withTransitionSuspended(fakeInfinity))

}


const bannerSlider = document.getElementById("banner-wrapper")
const bannerSlides = bannerSlider.querySelector('.banner-container')
const bannerPrevButton = document.getElementById("banner-prev")
const bannerNextButton = document.getElementById("banner-next")
sliderShow(bannerSlider, bannerSlides, bannerPrevButton, bannerNextButton)



const newSlider = document.getElementById("news-wrapper")
const newSlides = newSlider.querySelector('.news-container')
sliderShow(newSlider, newSlides)

const projectSlider = document.getElementById("projects-wrapper")
const projectSlides = projectSlider.querySelector('.projects-container')
sliderShow(projectSlider, projectSlides)









//temp
function sliderAuto(wrapperAuto, containerAuto, itemsAuto, time) {
  var widthItem = itemsAuto[0].clientWidth + 10;
  console.log
  var widthSlide = widthItem*itemsAuto.length;
  var i =0;
  // Auto
  setInterval(() => {
    i+= widthItem;
    if (i > widthSlide - containerAuto.clientWidth) {
      i = 0;
    }
    containerAuto.style.transform = `translateX(${-i}px)`;
  }, time);
};

function autoSlide(){
  const testimonialsWrapper = document.querySelector(".testimonials-wrapper");
  const testimonialsContainer = document.querySelector(".testimonials-container");
  const testimonialsItem = document.querySelectorAll(".testimonials-item");
  document.addEventListener("DOMContentLoaded", function () {
    testimonials_slide()
  });
  function testimonials_slide() {
    sliderAuto(testimonialsWrapper, testimonialsContainer, testimonialsItem, 2000);
  }
}
autoSlide()

