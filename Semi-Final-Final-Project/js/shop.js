let carts = document.querySelectorAll('button');

let products = [
    {
        name: 'Apple Pie',
        tag: 'Apple Pie.jpg',
        price: 14,
        inCart: 0
    },
    {
        name: 'Blueberry Pie',
        tag: 'Blue berry Pie.jpg',
        price: 16,
        inCart: 0
    },
    {
        name: 'Cherry Pie',
        tag: 'Cherry Pie.jpeg',
        price: 15,
        inCart: 0
    },
    {
        name: 'Chocolate Pie',
        tag: 'Chocolate Bite Sizes Pie.jpeg',
        price: 13,
        inCart: 0
    },
    {
        name: 'Pumpkin Pie',
        tag: 'Pumpkin Pie.jpeg',
        price: 14,
        inCart: 0
    },
    {
        name: 'Peach n Cream Pie',
        tag: 'peaches-and-cream-fried-pie.webp',
        price: 15,
        inCart: 0
    },
    {
        name: 'Cheesy Ube Pie',
        tag: 'image003_2022_07_01_16_47_05 (1).jpg',
        price: 12,
        inCart: 0
    },
    {
        name: 'Peach Mango Pie',
        tag: 'Peach Mango Pie.jpeg',
        price: 11,
        inCart: 0
    },
    {
        name: 'Strawberry Pie',
        tag: 'Strawberry Pie.jpg',
        price: 16,
        inCart: 0
    },
    {
        name: 'Cappucinno',
        tag: 'Cappuccino_at_Sightglass_Coffee.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Einspanner',
        tag: 'Einspanner-at-Archivist-in-South-Korea-2.jpeg',
        price: 55,
        inCart: 0
    },
    {
        name: 'Iced Americano',
        tag: 'Iced Americano.jpg',
        price: 40,
        inCart: 0
    },
    {
        name: 'Dark Chocolate Cherry Smoothie',
        tag: 'Dark Chocolate Cherry Smoothie.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Mint Chocolate Smoothie',
        tag: 'Mint Chocolate Smoothie.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Raspberry Sunrise Smoothie',
        tag: 'Raspberry Sunrise Smoothie.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Strawberry Smoothie',
        tag: 'Strawberry Smothie.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Avocado Smoothie',
        tag: 'Avocado Smoothie.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Mango Madness Smoothie',
        tag: 'Mango Madness Smoothie.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Pineapple Cucumber Smoothie',
        tag: 'Pineapple Cucumber Smoothie.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Green Goddes Smoothie',
        tag: 'Green Goddes Smoothie.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Coffee Smoothie',
        tag: 'Coffe Smoothie.jpg',
        price: 45,
        inCart: 0
    },
    {
        name: 'Apple Pie Family Sized',
        tag: 'Family-Size-Apple-Pie.jpg',
        price: 150,
        inCart: 0
    },
    {
        name: 'Blueberry Pie Family Sized',
        tag: 'Family-Size-Blueberry-Pie.jpg',
        price: 150,
        inCart: 0
    },
    {
        name: 'Strawberry Pie Family Sized',
        tag: 'Family-Size-Strawberry-Pie.jpg',
        price: 150,
        inCart: 0
    },

];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product)
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price)
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    console.log(cartItems);
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="allProducts">
                <div class="products">
                    <span class="remove">&#x1D605;</span>
                    <img src="images/${item.tag}" style ="width: 15vh;
                    height: 10vh">
                    <i>${item.name}</i>
                </div>
                <div class="price"><p>${item.price}</p></div>
                <div class="quantity">
                    <span>&#8249;</span>
                    <i>${item.inCart}</i>
                    <span>&#8250;</span>
                </div
                <div class="total">
                    ${item.inCart * item.price}.00
                </div>
            </div>
            `;
        });

        productContainer.innerHTML += `
        <div class ="basketTotalContainer">
            <h4 class = >
        `
    }

}

onLoadCartNumbers();
displayCart();