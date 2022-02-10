$('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow:`<button type='button' class='slick-prev slick-arrow pull-left'><img src="./images/eva_arrow-back-fill.png"></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow pull-right'><img src="./images/eva_arrow-back-fill1.png"</button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows : false
        }
      }
    ]
  });

  const toggle = document.querySelector('.menu-toggle');
  const menu  = document.querySelector('.header-menu');
  const activeClass = "is-show"
  toggle.addEventListener("click" , function(e) {
      menu.classList.add(activeClass)
  })

  window.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove(activeClass)
    }
  })