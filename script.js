let watch = [
    {
        img: "https://static.wixstatic.com/media/a9ff3b_14fdf403ceef4f678368fdc3ee455fdf.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_14fdf403ceef4f678368fdc3ee455fdf.webp",
        name: "Casio",
        price: 30000,
    },
    {
        img: "https://static.wixstatic.com/media/a9ff3b_4f89ba04c5d6495c9699ede2a992e276.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_4f89ba04c5d6495c9699ede2a992e276.webp",
        name: "Rolex",
        price: 50000,
    },
    {
        img: "https://static.wixstatic.com/media/a9ff3b_9ef56661e3354b10821ac0d339bef2a4.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_9ef56661e3354b10821ac0d339bef2a4.webp",
        name: "Casio",
        price: 90000,
    },
    {
        img: "https://static.wixstatic.com/media/a9ff3b_85212c6b6d9145d2b22c20865fe7c00e.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_85212c6b6d9145d2b22c20865fe7c00e.webp",
        name: "Fossil",
        price: 10000,
    },
    {
        img: "https://static.wixstatic.com/media/a9ff3b_e89951f99c7443d9ba138aef21663e22.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_e89951f99c7443d9ba138aef21663e22.webp",
        name: "Casio",
        price: 20000,
    },
    {
        img: "https://static.wixstatic.com/media/a9ff3b_d3a1874bd67f42199ed0a997d4fae279.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_d3a1874bd67f42199ed0a997d4fae279.webp",
        name: "Fossil",
        price: 10000,
    },
    {
        img: "https://static.wixstatic.com/media/a9ff3b_7dce82cc188848a09707966954bd73eb.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_7dce82cc188848a09707966954bd73eb.webp",
        name: "Fossil",
        price: 15000,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0019/4471/5373/products/98A293_068120fb-5c6c-43b7-b425-4ca7da430297_300x.jpg?v=1644950983",
        name: "Giordano",
        price: 60000,
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG/800px-Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG",
        name: "Giordano",
        price: 5000,
    },
    {
        img: "https://m.media-amazon.com/images/I/51iM66a16bL._AC._SR360,460.jpg",
        name: "Giordano",
        price: 25000,
    },
    {
        img: "https://rukminim1.flixcart.com/image/332/398/l08gsy80/watch/z/i/3/1-pwrm-king-piaoma-men-original-imagc2k8ch8vkstx.jpeg?q=50",
        name: "Rolex",
        price: 10000,
    },
    {
        img: "https://www.watchtime.com/wp-content/uploads/2018/03/Webp.net-resizeimage-320-e1522357065901.jpg",
        name: "Rolex",
        price: 500000,
    },
    {
        img: "https://i5.walmartimages.com/asr/3a03a276-bf6e-454f-9c44-eb24b4678957_1.df6a14b41a2ff1e149bd99024f7d591c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        name: "Fossil ",
        price: 30000,
    },
    {
        img: "https://rukminim1.flixcart.com/image/332/398/kuwzssw0/watch/q/z/s/1-ls2820-limestone-men-original-imag7xhe6m4sccax.jpeg?q=50",
        name: "Rolex",
        price: 200000,
    },
];

function watchDiv(watch){
    return `
    <div class="products-div">
                <img class="products-img" src="${watch.img}" alt="">
                <p id="products-name">${watch.name}</p>
                <p id="products-price">$${watch.price}</p>
                <button onclick="increment()" class="more">Buy</button>
            </div>
    `
}
watchDiv(watch)

function mapOnwatches(watch){
    let divs = watch.map((div) => watchDiv(div)).join(" ")
document.getElementById("watch").innerHTML = divs;
};
mapOnwatches(watch)

// filter
let buttonRolex = document.getElementById("rolex").addEventListener("click" ,()=>{
    let filterRolex = watch.filter((div) => div.name === "Rolex");
    mapOnwatches(filterRolex)
})
let buttonCasio = document.getElementById("casio").addEventListener("click" ,()=>{
    let filterCasio = watch.filter((div) => div.name === "Casio");
    mapOnwatches(filterCasio)
})
let buttonFossil = document.getElementById("fossil").addEventListener("click",()=>{
    let filterFossil = watch.filter((div) => div.name === "Fossil");
    mapOnwatches(filterFossil)
})

let buuttonGiordano = document.getElementById("giordano").addEventListener("click", () =>{
    let filterGiordano = watch.filter((div) =>div.name == "Giordano");
    mapOnwatches(filterGiordano)
})


function timeDate(){

let currentTime = new Date()
let day = currentTime.getDay()
let hours = currentTime.getHours()
let mins = currentTime.getMinutes()

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let formatDay = days[day]

// date formate
hours = (hours > 12)? hours - 12:hours

if (mins < 10) {
    mins = `0${mins}`;
}

function grreetingMessage() {
    if (hours < 6) {
        greeting = "OPEN";
    } else {
        greeting = "CLOSED";
    }
}
grreetingMessage();


document.getElementById("day").innerHTML = formatDay
document.getElementById("hours").innerHTML = hours
document.getElementById("min").innerHTML = mins
document.getElementById("workingHours").innerHTML = greeting
}
setInterval(timeDate, 1000)


// addcart

let countId = document.getElementById("addCart")
let count = 0;

function increment() {
    count = count + 1
    countId.innerHTML = count    
}

increment()