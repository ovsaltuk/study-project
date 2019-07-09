Vue.component('brand-header', {
    template: `<div class="container header_container">
    <div class="header__left">
        <logo></logo>
         <div class="search search_header">
                <details class="search__details">
                    <summary class="search__summary">
                        Browse
                        <i class="fas fa-sort-down search__summary-arrow"></i>
                    </summary>
                    <div class="search__details-drop-down">
                        <div class="search__details-drop-down-triangle"></div>
                        <ul class="search__details-drop-down-list">
                            <li class="search__details-drop-down-list-el search__details-drop-down-list-el_heading">
                                <a href="../product.html" class="search__details-drop-down-link">woman</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Dresses</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Tops</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Sweaters/Knits</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Jackets/Coats</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Blazers</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Denim</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Leggings/Pants</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Skirts/Shorts</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Accessories</a>
                            </li>
                        </ul>
                        <ul class="search__details-drop-down-list">
                            <li class="search__details-drop-down-list-el search__details-drop-down-list-el_heading">
                                <a href="../product.html" class="search__details-drop-down-link">men</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Tees/Tank tops</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Shirts/Polos</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Sweaters</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html"
                                   class="search__details-drop-down-link">Sweatshirts/Hoodies</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Blazers</a>
                            </li>
                            <li class="search__details-drop-down-list-el">
                                <a href="../product.html" class="search__details-drop-down-link">Jackets/vests</a>
                            </li>
                        </ul>
                    </div>
                </details>
                <form action="#" class="search__form">
                    <input type="text" placeholder="Search for Item..." class="search__input">
                    <button class="search__btn"><i class="fas fa-search"></i></button>
                </form>
            </div>
    </div>
    <div class="header__right">
            <div class="cart__container">
                <div class="cart__link-container">
                    <a href="html/cart.html" class="cart__link">
                        <img src=".././img/basket.svg" alt="black basket" class="cart__btn-img">
                    </a>
                </div>
                <div class="cart__product-counter">0</div>
                <div class="cart">
                    <div class="cart__triangle"></div>
                    <div class="cart__products"></div>
                    <div class="cart__total">
                        <p>total</p>
                        <p class="cart__total-numbers">$00.00</p>
                    </div>
                    <div class="cart__buttons">
                        <a href="html/checkout.html" class="cart__button">Checkout</a>
                        <a href="html/cart.html" class="cart__button">Go to cart</a>
                    </div>
                </div>
            </div>
            <button class="button button_header">My account <i class="fas fa-sort-down button__sort-down_my-account">

            </i></button>
        </div>
</div>
    `
})