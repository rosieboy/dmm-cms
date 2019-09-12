var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: true,
        inventory: 100,
        cartEmpty: true,
        onSale: false,
        details: ["80% cotton", "20% raketost", "to the knees"],
        cart: 0,
        variants: [
            {
                variantId: 2333,
                variantColor: "Red",
                variantImage: './assets/vmSocks-red-onWhite.jpg',
                availableSizes: [
                    ["Small", 10],
                    ["Medium", 4],
                    ["Large", 22],
                ],
            },
            {
                variantId: 2334,
                variantColor: "Green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                availableSizes: [
                    ["Small", 5],
                    ["Medium", 12],
                    ["Large", 2],
                ],
            },
            {
                variantId: 2335,
                variantColor: "Blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                availableSizes: [
                    ["Extra small", 4],
                    ["Small", 8],
                    ["Medium", 2],
                    ["Large", 0],
                    ["Extra Large", 2],
                ],
            }
        ]
    },
    methods: { 
        addToCart: function () {
            this.cart += 1
            cartEmpty = false;
        },        
        removeFromCart: function () {
            if (this.cart > 0)
                this.cart -= 1
            else
                this.cartEmpty = true
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})
