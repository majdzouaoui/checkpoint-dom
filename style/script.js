/*******************DOM selectors */
var cartId = document.getElementById("cart")
// console.log(cartId);

var cards = document.getElementsByClassName("card")
// console.log(cards);

var images = document.getElementsByTagName("img")
// console.log(images);

var query = document.querySelector("img")
// console.log(query);

var queryAll = document.querySelectorAll("img")
// console.log(queryAll);

/*******************DOM attributes */
var cartClassName = cartId.getAttribute("class")
// console.log(cartClassName);

// cartId.setAttribute("style", "background-color: red")

// cartId.removeAttribute("id")

/*******************DOM manipulation */
cartId.style.width = "100%"
// cartId.style.backgroundColor = "red"

// var newDiv = document.createElement("div")
// var trashIcon = document.createElement("i")
// var heartIcon = document.createElement("i")

// var cardBody = document.getElementById("card-body")

// cardBody.appendChild(newDiv)
// newDiv.appendChild(trashIcon)
// newDiv.appendChild(heartIcon)

// trashIcon.setAttribute("class", "fas fa-trash-alt")
// heartIcon.setAttribute("class", "fas fa-heart")

/*******************DOM events */
// trashIcon.addEventListener("click", function() {
//     trashIcon.closest(".cardToDelete").remove()
// })



/*******************Increment quantity */
var plusButtons = document.getElementsByClassName("fa-plus-circle")
console.log(plusButtons);

for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", function() {
        plusButtons[i].nextElementSibling.innerText++
        calculateTotal()
    })
}

/*******************Decrement quantity */
var minusButtons = document.getElementsByClassName("fa-minus-circle")
console.log(minusButtons);

for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", function() {
        if (minusButtons[i].previousElementSibling.innerText > 0) {
            minusButtons[i].previousElementSibling.innerText--
            calculateTotal()
        }
    })
}

/*******************Calculate total price */
function calculateTotal() {
    let price = document.getElementsByClassName("price")
    let quantity = document.getElementsByClassName("quantity")

    let sum = 0

    for (let i = 0; i < price.length; i++) {
        sum = sum + price[i].innerText * quantity[i].innerText
    }

    document.getElementById("total").innerText = sum
}
calculateTotal()

/*******************Delete item */
let trashButtons = document.querySelectorAll(".fa-trash-alt")

// for (let i = 0; i < trashButtons.length; i++) {
//     trashButtons[i].addEventListener("click", function() {
//         console.log(i);
//         trashButtons[i].parentElement.parentElement.parentElement.parentElement.remove()
        
//     })
// }

trashButtons.forEach(function (element) {
    element.addEventListener("click", function() {
        element.closest(".cardToDelete").remove()
    })
});

/*******************Like */
let likeButtons = document.querySelectorAll(".fa-heart")

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function() {
        likeButtons[i].classList.toggle("like")
    })
}