let imglink = [
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5177236/cover/1920x770cd788cc8f66e4f27accee7da64d1e9cd.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5149852/cover/1920x7708760d4e6a1c8429cbfea6f1e4a375f6d25ac3d74d6544bc89704d6475e368c79.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5161064/cover/1920x770141bcd9ccf9945d490a7935a3cc311069180d7d5e4c248279410203ac82bc67d.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5168144/cover/1920x7709b5906f9ab1347e7915762097af21c2e.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5172356/cover/1920x7704fe2f6ee01744cfc9f20007b29472a79.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x77050480c91c7534e2f846717dc69b6e82c.jpg",
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

let Data = [{
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-0-1z5177236/portrait/1920x77031ed2446062f4a528272aeb1989b923d.jpg",
        url: "https://www.zee5.com/global/movies/details/janhit-mein-jaari/0-0-1z5177236"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-4z5172328/portrait/1920x77024a217a8ed9f465eb6a2e48d980d1b6d.jpg",
        url: "https://www.zee5.com/global/web-series/details/maa-neella-tank/0-6-4z5172328"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-0-1z5181112/portrait/1920x770d52ddfe3dd874dea9613b3fb70b11b20.jpg",
        url: "https://www.zee5.com/global/movies/details/veetla-vishesham/0-0-1z5181112"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-0-1z5178627/portrait/1920x7708a56614e99064e63a5bd1fc85c8cab2c.jpg",
        url: "https://www.zee5.com/global/movies/details/kunjeldho/0-0-1z5178627"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-0-1z5184500/portrait/nodiswamyivanuirodeheegepfp1ag1920x770070720220c170e1d5b844cbba5fa2067ece6afb3.jpg",
        url: "https://www.zee5.com/global/movies/details/nodi-swamy-ivanu-irode-heege/0-0-1z5184500"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-0-1z5181170/portrait/kolkatarharrypfp1ag1920x77030062022343a73cafee7440fbeed5eea0ed0f260.jpg",
        url: "https://www.zee5.com/global/movies/details/kolkatar-harry/0-0-1z5181170"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-4z5172356/portrait/1920x770c090f8b1c2e14cafb5afc76742291e7f.jpg",
        url: "https://www.zee5.com/global/web-series/details/saas-bahu-achaar-pvt-ltd/0-6-4z5172356"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-3392/portrait/1920x770510f9f70fced431b90c14a4c862e0fa0.jpg",
        url: "https://www.zee5.com/global/tv-shows/details/bhagya-lakshmi/0-6-3392"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-3121/portrait/1920x7707b7a03b379e64d3d92272fc4da4475af.jpg",
        url: "https://www.zee5.com/global/tv-shows/details/mithai/0-6-3121"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-447/portrait/1920x770d0c395d09e244a7998dc5ab851447be4.jpg",
        url: "https://www.zee5.com/global/tv-shows/details/jodha-akbar/0-6-447"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-4z587365/portrait/1920x770b44896d2b6254d4b861a5f83b73662d3.jpg",
        url: "https://www.zee5.com/global/tv-shows/details/tu-tevha-tashi/0-6-4z587365"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-4z590912/portrait/1920x770ee688d8229674d04bf9882d78b8db07a593964145abe40b88d6043837c6c3b44.jpg",
        url: "https://www.zee5.com/global/tv-shows/details/sa-re-ga-ma-pa-the-singing-superstar/0-6-4z590912"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-4z5130241/portrait/1920x770654d26f77a884557af4d789057232da9.jpg",
        url: "https://www.zee5.com/global/tv-shows/details/pyar-ka-pehla-naam-radha-mohan/0-6-4z5130241"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-366/portrait/1920x770c4431f058b7e41d184655edac7739655.jpg",
        url: "https://www.zee5.com/global/tv-shows/details/kundali-bhagya/0-6-366"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-0-1z5177236/portrait/1920x77031ed2446062f4a528272aeb1989b923d.jpg",
        url: "https://www.zee5.com/global/movies/details/janhit-mein-jaari/0-0-1z5177236"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_auto,q_auto:eco/resources/0-6-4z5172328/portrait/1920x77024a217a8ed9f465eb6a2e48d980d1b6d.jpg",
        url: "https://www.zee5.com/global/web-series/details/maa-neella-tank/0-6-4z5172328"
    }
];

Data.forEach(function(ele) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", ele.image);


    div.append(image);
    document.querySelector("#sony").append(div);
});





let selection1 = [{
        image: "https://akamaividz2.zee5.com/image/upload/w_350,h_197,c_scale,f_auto,q_auto:eco/resources/0-1-6z5183360/list/00000172756195c558764c0a88ce9546056e27e9.jpg",
        url1: "https://www.zee5.com/tv-shows/details/mithai/0-6-4z5101301/will-mithai-go-to-jail/0-1-6z5183360",
        section2: "Mithai",
        section3: "E88 : 19 jul",
        selection2_url: "https://www.zee5.com/tv-shows/details/mithai/0-6-4z5101301/will-mithai-go-to-jail/0-1-6z5183360"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_350,h_197,c_scale,f_auto,q_auto:eco/resources/0-1-6z5183430/list/000002492d025ea681e848db9579cdc459bb65e5.jpg",
        url1: "https://www.zee5.com/tv-shows/details/bhagya-lakshmi/0-6-3392/balwinder-is-locked-in-the-bathroom/0-1-6z5183430",
        section2: "Bhagya Lakshmi",
        section3: "E90 : 20 jul",
        selection2_url: "https://www.zee5.com/tv-shows/details/bhagya-lakshmi/0-6-3392/balwinder-is-locked-in-the-bathroom/0-1-6z5183430"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_350,h_197,c_scale,f_auto,q_auto:eco/resources/0-1-6z5183328/list/00000101a840c45ee8294d1da737c1ad4740fdf1.jpg",
        url1: "https://www.zee5.com/tv-shows/details/kundali-bhagya/0-6-366/kundali-bhagya-july-21-2022/0-1-6z5183328",
        section2: "Kundali Bhagya",
        section3: "E93 : 21 jul",
        selection2_url: "https://www.zee5.com/tv-shows/details/kundali-bhagya/0-6-366/kundali-bhagya-july-21-2022/0-1-6z5183328"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_350,h_197,c_scale,f_auto,q_auto:eco/resources/0-1-6z5183435/list/00000022a91feb43877c48a6b299fc99b5606cb5.jpg",
        url1: "https://www.zee5.com/tv-shows/details/kumkum-bhagya/0-6-127/pallavi-apologises-to-prachi/0-1-6z5183435",
        section2: "Kumkum Bhagya",
        section3: "E95 : 22 jul",
        selection2_url: "https://www.zee5.com/tv-shows/details/kumkum-bhagya/0-6-127/pallavi-apologises-to-prachi/0-1-6z5183435"
    }
];

selection1.forEach(function(ele) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", ele.image);
    let para = document.createElement("p");
    para.innerText = ele.section2;
    let para2 = document.createElement("p");
    para2.innerText = ele.section3;

    div.append(image, para, para2);
    document.querySelector("#epi").append(div);
});



let actors = [{
        Aimage: "https://akamaividz2.zee5.com/image/upload/w_204,h_204,c_scale,f_auto,q_auto:eco/resources/0-8-6488/square/salmankhanfeaturedcelebsimagery1170x65809062022625a938fb39847fcad83c27afbcf457c.jpg",
        "url": "https://www.zee5.com/collections/salman-khan/0-8-6488",
        Aname: "Salman Khan",
        "selection2_url": "https://www.zee5.com/collections/salman-khan/0-8-6488"
    },
    {
        Aimage: "https://akamaividz2.zee5.com/image/upload/w_204,h_204,c_scale,f_auto,q_auto:eco/resources/0-8-3465/square/kanganaranaut_11_740919463.jpg",
        "url": "https://www.zee5.com/collections/kangana-ranaut/0-8-3465",
        Aname: "Kangana Ranaut",
        "selection2_url": "https://www.zee5.com/collections/kangana-ranaut/0-8-3465"
    },
    {
        Aimage: "https://akamaividz2.zee5.com/image/upload/w_204,h_204,c_scale,f_auto,q_auto:eco/resources/0-8-8267/square/vikrantmasseyplatformcreta.jpg",
        "url": "https://www.zee5.com/collections/vikrant-massey/0-8-8267",
        Aname: "Vikrant Massey",
        "selection2_url": "https://www.zee5.com/collections/vikrant-massey/0-8-8267"
    },

    {
        Aimage: "https://akamaividz2.zee5.com/image/upload/w_204,h_204,c_scale,f_auto,q_auto:eco/resources/0-8-2726/square/amitabhbacchan1943871325943d09c20f4de05425fad88119ceae03f2a.jpg",
        "url": "https://www.zee5.com/collections/amitabh-bachchan/0-8-2726",
        Aname: "Amitabh Bachchan",
        "selection2_url": "https://www.zee5.com/collections/amitabh-bachchan/0-8-2726"
    },

];


actors.forEach(function(ele) {
    let div = document.createElement("div");
    let image0 = document.createElement("img");
    image0.setAttribute("src", ele.Aimage);

    let para = document.createElement("p");
    para.innerText = ele.Aname;


    div.append(image0, para);
    document.querySelector("#actor").append(div);
});