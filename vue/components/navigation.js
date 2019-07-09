Vue.component('navigation', {
    template: `
    <nav class="nav">
    <div class="container nav_container">
        <ul class="nav__list">
            <li class="nav__list-el"><a href="index.html" class="nav__link">Home</a></li>
            <li class="nav__list-el"><a href="../product.html" class="nav__link">Man</a>
                <div class="nav__mega-menu">
                    <div class="nav__mega-menu-triangle"></div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Blazers</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Denim</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Leggings/Pants</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Skirts/Shorts</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Accessories</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <div class="nav_mega-menu-img-block">
                            <img src=".././img/mega-menu-img.jpg" alt="super sale">
                            <div class="nav_mega-menu-img-block-text">Super<br>sale!</div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__list-el"><a href="../product.html" class="nav__link">Women</a>
                <div class="nav__mega-menu">
                    <div class="nav__mega-menu-triangle"></div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Blazers</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Denim</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Leggings/Pants</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Skirts/Shorts</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Accessories</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <div class="nav_mega-menu-img-block">
                            <img src=".././img/mega-menu-img.jpg" alt="super sale">
                            <div class="nav_mega-menu-img-block-text">Super<br>sale!</div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__list-el"><a href="../product.html" class="nav__link">Kids</a>
                <div class="nav__mega-menu">
                    <div class="nav__mega-menu-triangle"></div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Blazers</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Denim</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Leggings/Pants</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Skirts/Shorts</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Accessories</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <div class="nav_mega-menu-img-block">
                            <img src=".././img/mega-menu-img.jpg" alt="super sale">
                            <div class="nav_mega-menu-img-block-text">Super<br>sale!</div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__list-el"><a href="../product.html" class="nav__link">Accoseriese</a>
                <div class="nav__mega-menu">
                    <div class="nav__mega-menu-triangle"></div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Blazers</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Denim</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Leggings/Pants</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Skirts/Shorts</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Accessories</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <div class="nav_mega-menu-img-block">
                            <img src=".././img/mega-menu-img.jpg" alt="super sale">
                            <div class="nav_mega-menu-img-block-text">Super<br>sale!</div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__list-el"><a href="../product.html" class="nav__link">Featured</a>
                <div class="nav__mega-menu">
                    <div class="nav__mega-menu-triangle"></div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Blazers</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Denim</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Leggings/Pants</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Skirts/Shorts</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Accessories</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <div class="nav_mega-menu-img-block">
                            <img src=".././img/mega-menu-img.jpg" alt="super sale">
                            <div class="nav_mega-menu-img-block-text">Super<br>sale!</div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__list-el"><a href="../product.html" class="nav__link">Hot Deals</a>
                <div class="nav__mega-menu">
                    <div class="nav__mega-menu-triangle"></div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Blazers</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Denim</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Leggings/Pants</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Skirts/Shorts</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Accessories</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                        </ul>
                    </div>
                    <div class="nav_mega-menu-block">
                        <ul class="nav__mega-menu-list">
                            <li class="nav__mega-menu-list-elem">
                                <h4 class="nav__mega-menu-headline">woman</h4></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Dresses</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Tops</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Sweaters/Knits</a></li>
                            <li class="nav__mega-menu-list-elem"><a href="../product.html"
                                                                    class="nav__mega-menu-link">
                                Jackets/Coats</a></li>
                            <li class="nav__mega-menu-list-elem">
                        </ul>

                        <div class="nav_mega-menu-img-block">
                            <img src=".././img/mega-menu-img.jpg" alt="super sale">
                            <div class="nav_mega-menu-img-block-text">Super<br>sale!</div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>
    `
})