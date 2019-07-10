Vue.component('review-and-subscribe', {
    template:`
    <div class="review-and-subscribe main_review-and-subscribe">
    <div class="review-and-subscribe__wrap">
        <div class="review">
            <img src=".././img/Layer_40.png" alt="face" class="review__photo">
            <div class="review__text-wrap">
                <p class="review__text">&laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi,
                    a&nbsp;pulvinar purus condimentum&nbsp;a. Aliquam condimentum mattis neque sed pretium&raquo;</p>
                <p class="review__reviewer-info">Bin Burhan
                    <span class="review__reviewer-info-city">Dhaka, Bd</span>
                </p>
            </div>

        </div>
        <div class="subscribe">
            <div class="subscribe__wrap">
                <h2 class="subscribe__heading_big">
                    Subscribe
                </h2>
                <h3 class="subscribe__heading_small">
                    FOR OUR NEWLETTER AND PROMOTION
                </h3>
                <form action="html/product.html" class="subscribe__form">
                    <input type="text" class="subscribe__form-input" placeholder="Enter Your Email">
                    <button class="subscribe__form-btn">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
    </div>`
})