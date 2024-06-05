//tạo nút tim 
var isHearted = false;

        function toggleHeart() {
            var heartSpan = document.querySelector('.home-product-item__heart');
            isHearted = !isHearted;
            if (isHearted) {
                heartSpan.classList.add('home-product-item__hearted');
            } else {
                heartSpan.classList.remove('home-product-item__hearted');
            }
        }








