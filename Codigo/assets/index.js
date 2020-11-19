const navbarMenu = document.getElementById('navbar-list');
const hamburger = document.getElementById('hamburger-menu');
const miniatures = document.querySelectorAll(".miniature");
const mainImg = document.getElementById('main-image');
const colorChange = document.querySelectorAll('.color-img-alt');
const price = document.getElementById("price");

hamburger.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    hamburger.classList.toggle('rotate');
})

miniatures.forEach(function(el) {
    el.addEventListener("click", function(e) {
    mainImg.src = e.target.alt
    })
})

miniatures.forEach(function(el) {
    el.addEventListener("mouseover", function(e) {
    mainImg.src = e.target.alt;
    })
})

colorChange.forEach(function(el) {
    el.addEventListener('click', function(e) {
        var specialPrice = "59,99 €";
        mainImg.src = e.target.alt;
        for (let i = 0; i < miniatures.length; i++) {
            miniatures[i].src = e.target.alt.replace("1", (i+1));
            miniatures[i].alt = e.target.alt.replace("1", (i+1));
        }
        if (e.target.classList.contains("special-price")) {
            price.textContent = specialPrice;
        } else {
            price.textContent = "49.99 €";
        }
    })
})

/* Buy button */