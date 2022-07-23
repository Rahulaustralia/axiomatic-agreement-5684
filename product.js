let container = document.getElementById("container");
// let filtered=document.getElementById("filter");
let cartLs = JSON.parse(localStorage.getItem("Mens-page")) || [];

let totalcart = document.getElementById("total-cart");

function Display(mensData) {

    container.innerHTML = null;
    let total = 0;
    mensData.forEach(function(ele, index) {

        total += Number(ele.cart);

        let product = document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.image_url;

        let name = document.createElement("p");
        name.innerText = ele.name;

        let price = document.createElement("h4");
        price.innerText = "MRP:-" + ele.price;

        let cart = document.createElement("button");
        cart.innerText = "Delete";
        cart.addEventListener("click", function() {
            DeleteCart(index);
        });

        product.append(img, name, price, cart);
        container.append(product);

    });
    //  document.querySelector("#total-cart").innerText=total;
    // totalcart.textContent=total;
}

// console.log(cartLs);
// Display(mensData);
//Display(cartLs);

Display(cartLs);

function DeleteCart(index) {
    let DeletedCart = cartLs.filter(function(el, i) {
        return i != index;
    });
    Display(DeletedCart);
    localStorage.setItem("Mens-page", JSON.stringify(DeletedCart));
}














let imglink = [
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5146416/cover/1920x77030295e51fe54452d8c85e76c5ec756e892b2b3c05ed24c43919a4293fbe8344b.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5149852/cover/1920x77021ec1afd9d0243d4af86c516ecd3985c.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5168144/cover/1920x7709b5906f9ab1347e7915762097af21c2e.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5177236/cover/1920x770c10a267e362144ae9a8d5c60199fd633.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-2467/cover/1920x7703d442d332d68445da5a6c0aca75a2a8c.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5161064/cover/1920x770141bcd9ccf9945d490a7935a3cc311069180d7d5e4c248279410203ac82bc67d.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x770e6a8bcf4c3b24c93a74b3dd28f81ead4.jpg",
]

let crauser = document.getElementById("crauser");
let leftbtn = document.getElementById("left-btn");
let rightbtn = document.getElementById("right-btn");

let imgstate = 0;
rightbtn.addEventListener("click", function() {
    imgstate++;
    if (imgstate === imglink.length) {
        imgstate = 0;
    }
    crauser.src = imglink[imgstate];
})
leftbtn.addEventListener("click", function() {
    imgstate--;
    if (imgstate < 0) {
        imgstate = imglink.length - 1;
    }
    crauser.src = imglink[imgstate];
})