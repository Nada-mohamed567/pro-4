
var products = document.querySelectorAll(".product")
var cartItems = document.getElementById("cartItems")
var cartCount = document.getElementById("cartCount")
var cartNumber = 0

var subtotal = document.getElementById("subtotal")
var discount = document.getElementById("discount")
var total = document.getElementById("total")
var discountMessage = document.getElementById("discountMessage")
var showPrice = document.getElementById("showPrice")
var search = document.getElementById("search")
var categoryButtons = document.querySelectorAll(".category-btn")
var shopNow = document.getElementById("shopNow")
var cartButton = document.getElementById("cartButton")

var totalPrice = 0




products.forEach(function(product) {
    var addButton = product.querySelector(".add-cart")

    addButton.onclick = function() {
        var price = Number(product.dataset.price)
        totalPrice += price
        
      cartNumber++
      cartCount.innerHTML = cartNumber

        var name = product.querySelector("h3").innerHTML
        var image = product.querySelector("img").src


        var cartProduct = document.createElement("div")
        cartProduct.innerHTML = `
            <img src="${image}" width="80" height="100">
            <h3>${name}</h3>
            <p>${price} EGP</p>

            <button class="remove-button">
            <i class="fa-solid fa-trash"></i>
            Remove
            </button>
            <hr>

        `
        cartItems.appendChild(cartProduct)


        var removeButton = cartProduct.querySelector(".remove-button")

        removeButton.onclick = function() {
            totalPrice -= price

            cartNumber--
            cartCount.innerHTML = cartNumber

            cartProduct.remove()
            updatePrice()

        }
        updatePrice()

    }

})




function updatePrice() {
    var discountValue = 0

    if (totalPrice >= 5000) {
        discountValue = totalPrice * 0.30
        discountMessage.innerHTML = "Congratulations! You got 30% discount"

    }else {

        discountMessage.innerHTML = "Add more products to get 30% discount!"

    }


    var finalPrice = totalPrice - discountValue
    subtotal.innerHTML = totalPrice
    discount.innerHTML = discountValue
    total.innerHTML = finalPrice

}




showPrice.onclick = function() {
    updatePrice()

}




search.oninput = function() {
    var value = search.value.toLowerCase()

    products.forEach(function(product) {
        var name = product.querySelector("h3").innerHTML.toLowerCase()

        if (name.includes(value)) {
            product.style.display = ""

        }else {
            product.style.display = "none"
        }

    })

}




categoryButtons.forEach(function(button) {
    button.onclick = function() {

        var category = button.dataset.category

        products.forEach(function(product) {
            var productCategory = product.dataset.category

            if (
                category == "all" ||
                productCategory == category
            ) {
                product.style.display = ""

            }else {
                product.style.display = "none"
            }

        })

    }

})


/* shop Now */

shopNow.onclick = function() {
    document.getElementById("shop").scrollIntoView()

}


/* Cart Button */

cartButton.onclick = function() {
    document.getElementById("cart").scrollIntoView()

}




updatePrice()







