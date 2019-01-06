const Connector: any = {
    'www.asos.fr': {
        name: ['.core-product-container h1', 'innerText'],
        price: ['.core-product-container .current-price', 'innerText'],
        imageUrl: ['.product-gallery .fullImageContainer img', 'src']
    },
    'www.zara.com': {
        name: ['.product-info-container .product-name', 'innerText'],
        price: ['.product-info-section .price span', 'innerText'],
        imageUrl: ['.product-card .product-images-section .main-image img', 'src'],
    },
    // hm
    // etam
    // sandro
    // mango
    // berschka
}

export default Connector;