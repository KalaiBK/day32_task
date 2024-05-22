import { createSlice } from "@reduxjs/toolkit";

//products array was set as initialState to use with entire app components where needed.
const initialState = {
    products: [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "quantity": 1,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.pinimg.com/originals/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg",
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "quantity": 1,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i1.wp.com/www.mobilebd.co/wp-content/uploads/2020/04/Apple-iPhone-9-Picture-White-550x550.jpg"
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "quantity": 1,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://www.lifewire.com/thmb/22rZzi91HjLWJUb-8EVMktQfV2Q=/1500x1500/filters:fill(auto,1)/4043781-6-HeroSquare-ff6cc4599b9d4120a540c5c3bbf74b20.jpg"
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "quantity": 1,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://images.fonearena.com/blog/wp-content/uploads/2021/04/OPPO-F19-1-1024x1015.jpg",
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "quantity": 1,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://urbankenyans.com/wp-content/uploads/2019/04/5.jpg",
        }
    ]
}
const detailsSlice = createSlice({
    name: "productDetails",
    initialState,
    // id & quantity from cart was passed as payload,here we access with object destructure method.
    reducers: {
        setQuantity(state, action) {
            const {id, quantity} = action.payload
            // to update the quantity of perunit product, selected product was filtered and updated with the selectedProduct variable.
         const selectedProduct = state.products.filter(product => product.id == id);
         selectedProduct[0].quantity = quantity; 
    }
}
})

export const { setQuantity } = detailsSlice.actions;
export default detailsSlice.reducer;