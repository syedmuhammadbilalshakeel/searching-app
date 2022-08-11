var products = {
    data:[
        {
        productName: "regular white shirt",
        categeory: "Topwear",
        price: "30",
        image: "white tshirt.jpg",
    },
    {
        productName: "Beige short skirt",
        categeory: "bottomwear",
        price: "49",
        image: "short-skirt.jpg",
    },
    {
        productName: "sporty smartWatch",
        categeory: "watch",
        price: "99",
        image: "sport-smartwatch.jpg",
    },
    {
        productName: "Basic Knitted Top",
        categeory: "Topwear",
        price: "29",
        image: "knitted-top.jpg",
    },
    {
        productName: "Black Leather Jacket",
        categeory: "Jacket",
        price: "129",
        image: "black-ledder.webp",
    },
    {
        productName: "Stylish pink Trousers",
        categeory: "Bottomwear",
        price: "89",
        image: "pink-trousers.jpg",
    },
    {
        productName: "Brown men's jacket",
        categeory: "Jacket",
        price: "189",
        image:"brown-jacket.jpg",
    },
    {
        productName: "Comfy Gray Pants",
        categeory: "Bottomwear",
        price: "49",
        image:"comfy-gray-pants.jpg",
    },
],
 };


//  for(let i of products.data){
//     let card =document.createElement("div");
    
//     card.classList.add("card" ,"i.category");
    
//     let imgContainer = doucment.createElement("div");
//     imgContainer.classList.add("image-container");

//     let image =doucment.createElement("img");
//     image.setAttribute("src",i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);

//      document.getElementById("products").appendChild(card);
//  }

for (let i of products.data){
   
    let card =document.createElement("div");
    card.classList.add("card" , i.categeory ,"hide");

let imgContainer = document.createElement("div");
imgContainer.classList.add("image-container");

let image= document.createElement("img");
image.setAttribute("src", i.image);
imgContainer.appendChild(image);
card.appendChild(imgContainer);

let container= document.createElement("div");
container.classList.add("container");

let name =document.createElement("h5");
name.classList.add("product-name");
name.innerText =i.productName.toUpperCase();

container.appendChild(name);

// let price =doucment.createElement("h6");
// price.innerText ="$" + i.price;
// container.appendChild(price);

let price = document.createElement("h6");
price.innerText = "$"+ i.price;
container.appendChild(price);





card.appendChild(container);





document.getElementById("products").appendChild(card);

}


function filterProduct(value){

    let buttons =document.querySelectorAll(".button-value");
    buttons.forEach(button => {
       if(value.toUpperCase() == button.innerText.toUpperCase()){
         button.classList.add("active");
        }
       else{
        button.classList.remove("active");

       }
    });

// let elements = doucment.querySelectorAll(".card");
// elements.forEach((element) => {

//         if(value == "all"){
//        element.classList.remove("hide");
// //     }
//     // else{
//     //     if(element.classList.contains(value)){
//     //         element.classList.remove("hide");

//     //     }else{
//     //         element.classList.add("hide");
//     //     }
//     }
// });

let elements =document.querySelectorAll(".card");
elements.forEach((element) => {
     if(value == "all"){
        element.classList.remove("hide");

     }
     else{
        if(element.classList.contains(value)){
         element.classList.remove("hide")
        }else{
            element.classList.add("hide")
        }
     }
});


}

document.getElementById("search").addEventListener("click" ,() => {
    let searchInput =document.getElementById("search-input").value;
    let element =document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
 console.log(searchInput);
    // element.forEach((element,index)=>{
    //     if(element.innerText.)
    // })
    // if(element.innerText.include(searchInput.toUpperCase())){
    //     card[index].classList.remove("hide")
    // }else{
    //     card[index].classList.add("hide");
    // }
    
});

window.onload=  () => {

    filterProduct("all");
};