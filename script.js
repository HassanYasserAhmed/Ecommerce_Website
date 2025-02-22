let imgSlected = document.querySelectorAll(".shop.secoundryImages div");
let mainImage = document.querySelector(".shop.mainImage");
let product = document.querySelector("#click");
imgSlected.forEach((e)=> {
    e.onclick = function() {
     mainImage.style.backgroundImage = window.getComputedStyle(e).backgroundImage;
    }
});



let products = document.querySelectorAll(".product");
products.forEach((e) =>
   e.onclick = function() {
    window.location.href="product.html";
   }
)


let productsContainer = document.querySelectorAll(".products");

function createProduct(productsContainerVar) {
    for(let i=0;i<8;i++) {
        let product = document.createElement("div");
        product.classList.add("product");
    let productImg = document.createElement("img");
    productImg.src ="img/products/f1.jpg";
    let productDetailsContainer = document.createElement("div");



    productDetailsContainer.classList.add("product-Details");
    productDetailsContainer.classList.add("product-Details");
    let productBrand = document.createElement("p");
    productBrand.textContent = "Addidos";
    let productTitle = document.createElement("h5");
    productTitle.textContent = "cartoon Astronoot T-Shirt";




    let ratingCountainer = document.createElement("div");

        let star1 = document.createElement("i");
        star1.classList.add("fas");
        star1.classList.add("fa-star");
        
        let star2 = document.createElement("i");
        star2.classList.add("fas");
        star2.classList.add("fa-star");

        let star3 = document.createElement("i");
        star3.classList.add("fas");
        star3.classList.add("fa-star");

        let star4 = document.createElement("i");
        star4.classList.add("fas");
        star4.classList.add("fa-star");

        let star5 = document.createElement("i");
        star5.classList.add("fas");
        star5.classList.add("fa-star");
   


     let pricingAndShoppingContainer = document.createElement("div");
     pricingAndShoppingContainer.classList.add("priceAndShopping");
     let price = document.createElement("h3");
     price.textContent = "$12.23";
     let shopit = document.createElement("a");
     shopit.href="product.html";
     let iShopit = document.createElement("i");
     iShopit.classList.add("fal");
     iShopit.classList.add("fa-shopping-cart");


     
    ratingCountainer.append(star1,star2,star3,star4,star5);
    productDetailsContainer.append(productBrand,productTitle,ratingCountainer);

    shopit.append(iShopit);
    pricingAndShoppingContainer.append(price,shopit);

    product.append(productImg,productDetailsContainer,pricingAndShoppingContainer);
    console.log(product)
    productsContainerVar.append(product);
    }

   
};
for(let i=0;i<productsContainer.length;i++) {
    createProduct(productsContainer[i])
}


let User = {
   email : "hassan-yasser@gmail.com",
   password:"1234has"
}

//Login
let emailOrPhoneInput = document.querySelector("input[type='text']");
let password = document.querySelector("input[type='password']");
let LoginBtn = document.querySelector(".loginBtn");
LoginBtn.onclick = function() {
    if(emailOrPhoneInput.value == User.email && password.value == User.password) {
      window.location.href="home.html";
    }else {
        let error = document.querySelector(".error");
        error.style.display= "block";
    }  
}

