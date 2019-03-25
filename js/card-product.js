let productList = [
    {
        name: "MANGO PEOPLE T-SHIRT",
        id: 1,
        price: '$52.00',
        imgHref: "img/item-1.png"
    },
    {
        name: "MANGO PEOPLE T-SHIRT",
        id: 2,
        price: '$52.00',
        imgHref: "img/item-2.png"
    },
    {
        name: "MANGO PEOPLE T-SHIRT",
        id: 3,
        price: '$52.00',
        imgHref: "img/item-3.png"
    },
    {
        name: "MANGO PEOPLE T-SHIRT",
        id: 4,
        price: '$52.00',
        imgHref: "img/item-4.png"
    },
    {
        name: "MANGO PEOPLE T-SHIRT",
        id: 5,
        price: '$52.00',
        imgHref: "img/item-5.png"
    },
    {
        name: "MANGO PEOPLE T-SHIRT",
        id: 6,
        price: '$52.00',
        imgHref: "img/item-6.png"
    },
    {
        name: "MANGO PEOPLE T-SHIRT",
        id: 7,
        price: '$52.00',
        imgHref: "img/item-7.png"
    },
    {
        name: "MANGO PEOPLE T-SHIRT",
        id: 8,
        price: '$52.00',
        imgHref: "img/item-8.png"
    }
];


// create DOM element
let makeEl = function (tagName, className, text){
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};



// create one product cart
let createCartElement = function (productEl) {
    let product = makeEl('div', 'card-product');
    product.classList.add('card-product_index');

    let productLinkImg = makeEl('a','card-product__img-link');
    productLinkImg.href = 'html/single-page.html';
    product.appendChild(productLinkImg);

    let productImg = makeEl('img', 'card-product__img');
    productImg.src = productEl.imgHref;
    productImg.alt = productEl.name;
    productLinkImg.appendChild(productImg);

    let productInfo = makeEl('div', 'card-product__info');
    product.appendChild(productInfo);

    let productLink = makeEl('a', 'card-product__text-link', productEl.name);
    productLink.href = 'html/single-page.html';
    productInfo.appendChild(productLink);

    let productPrice = makeEl('span', 'card-product__price', productEl.price);
    productInfo.appendChild(productPrice);

    let cartLinkContainer = makeEl('div', 'card-product__link-container');
    product.appendChild(cartLinkContainer);

    let cartLink = makeEl('a','card-product__add-to-cart');
    cartLink.href = '#';
    cartLinkContainer.appendChild(cartLink);

    let cartImg = makeEl('img', 'card-product__white-cart-img');
    cartImg.src = 'sass/img/whie-cart.svg';
    cartImg.alt = 'white-cart';
    cartLink.appendChild(cartImg);

    let cartText = makeEl('p', 'card-product__add-to-cart-text', 'Add to Cart');
    cartLink.appendChild(cartText);


    return product;
};

let renderCart = function (productArray, container){
    for (let i = 0; i < productArray.length; i++ ) {
        container.appendChild(createCartElement(productArray[i]));
    }
};

