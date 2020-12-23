let my_storage = localStorage.getItem('products');
if (my_storage === null) {

}
$('button').on('click', function () {
    let my_storage = localStorage.getItem('products');
    let name = $(this).parent('.bloc1').find('h1').text();
    let img = $(this).parent('.bloc1').find('img').attr('src');
    let pricc = $(this).parent('.bloc1').find('h3').text();
    let sizee = $(this).parent('.bloc1').find('h4').text();
    let colorr = $(this).parent('.bloc1').find('h5').text();



    let my_product = {
        title: name,
        image: img,
        pric: pricc,
        size: sizee,
        color: colorr,
        count: 1,

    }
    if (my_storage === null) {
        let my_products = {
            products: [
                my_product
            ]


        }
        let myJSON = JSON.stringify(my_products);
        localStorage.setItem('products', myJSON);
    } else {
        my_storage = JSON.parse(my_storage);
        let my_products = my_storage.products;
        let iter = 0;
        for (let i = 0; i < my_products.length; i++) {
            if (my_products[i].title == name) {
                let counts = my_products[i].count;
                counts++;
                my_products[i].count = counts;
                iter = 1;


            }
        }
        if (iter == 0) {
            my_products.push(my_product);
        }

        my_storage = JSON.stringify(my_storage);
        localStorage.setItem('products', my_storage);
    }


});

$('.delete').on('click', function () {
    localStorage.removeItem('products');
});
$('.basket button ').on('click', function () {
    let products = JSON.parse(localStorage.getItem('products')).products;
    for (let i = 0; i < products.length; i++) {
        let title = products[i].title;
        $('.blocShow').append(
            '<div class="blocShow1"><h3>' + title + '</h3><img src=images/' + products[i].image + '/><h4>' + products[i].size + '</h4> <h5>' + products[i].color + '</h5> </div>');
    }

});
//            addEvent(d.getElementById('clear'), 'click', function (products) {
//                localStorage.removeItem('blocShow1');
//                cartCont.innerHTML = 'Корзина очишена.';





//
////расширение корзины
////    if (total_items > 4) {
////
////        $("#cart_items").animate({
////            width: "+=120"
////        }, 'slow');
////
////    }
