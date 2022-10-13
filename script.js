//object which sku with it's image

// const obj = {
//     240367: "https://www.russellandbromley.co.uk/file/general/700x591_Indie.jpg"

//     }

//     // extracting sku from URL
//     const skuVal = window.location.pathname.split("/").pop();

//     //["2407", "7680" ].includes("2407") = true
//     //["2407", "7680" ].includes("2047") = false
//     if ( Object.keys(obj).includes(skuVal)) {

//       const imageUrl = obj.skuVal;


//       // create elemnt 
//      // 1. clone and edit the url


//      // 2.assigning complete div 
//       const newImageDiv = document.querySelector(".component-wrapper");
//     //append to class="carousel-inner"
//     //   const newIm = document.querySelector(".carousel-inner");
//     //   newIm.append("New test");
//     let parent = document.createElement("div")
//     parent.append("Some text")

//     }

// Possible solution for the Zoom Up test 


// function valid_ur(){ 
//   let page_url = window.location.pathname.split("/")[2]; 
//   let products = [240165, 21222, 21333, 22555, 222666 ];
//   products.forEach(element => { if(element == page_url){ 
//     return true; 
//   } 
// });
//  return false; 
// }
// valid_url();

// window.location.pathname
// window.location.pathname.split("/")
// window.location.pathname.split("/")[2]




//My first try for a solution 

// let url =  window.location.pathname.split("/")[2];
// let prod = [105063, 240367, 105109, 105083, 240330, 432127, 431999, 240165, 105266, 240021, 105193, 240578, 123953, 240149, 240150,
//             240643, 240176, 124342, 240428, 240579, 567888, 527698, 527874, 567994, 527241, 568004, 530850, 527980, 240254, 527290,
//             240605, 528700, 527470, 530630, 240203, 527980, 240198, 568099, 528725, 527561, 240350, 240627, 240704, 706237, 240505, 
//             714118, 706331, 706481, 240498, 706433, 706333, 705882, 706327, 713166, 706332, 240440, 240347, 240668, 240336, 706019];
// function valid_url(){
//     prod.forEach(element => {
//     if(element === url){
//       return true;
//     }
//     console.log("oi");
//  });
//   return false;
// }
// valid_url();


// Function to insert the 5th image
// function injectNewImg(){
//   let divItem = document.createElement("div");
//   divItem.innerHTML = `<div class="carousel-inner">
//   <div class="mobile-image-wrapper">
//   <div id="cc_img__resize_wrapper" class="" style="max-width: 100%; min-height: 0px; height: 100%;">
//       <img align="middle" data-bind="ccResizeImage: {
//         isSrcSetEnabled : false,
//         source:$data + '&amp;height=300&amp;width=300' ,
//         xsmall:'300,300',
//         alt:$parent.displayName,
//         errorSrc:'/img/no-image.jpg',
//         errorAlt:'No Image Found'
//       }" alt="product-w-productDetails" data-error-src="/img/no-image.jpg" data-default-error-src="/img/no-image.jpg" data-error-alt="No Image Found" class="ccLazyLoaded" data-lazy-loading-image-class="ccLazyLoad" data-lazy-loaded-image-class="ccLazyLoaded" data-lazy-loading-parent-class="ccLazyLoad-background" data-src="/ccstore/v1/images/?source=/file/v535825198738328201/products/528752_xlalt3_V2.jpg&amp;height=300&amp;width=300" data-lazy-loading="false" src="/ccstore/v1/images/?source=/file/v535825198738328201/products/528752_xlalt3_V2.jpg&amp;height=300&amp;width=300">
//       </div>
//     </div>
//     </div>`;
// console.log("hi..");  
//   // let divItem = document.createElement("div");
//   divItem.setAttribute("class","item");
//   divItem.setAttribute("data-bind","css: {'active': $index() == 0}");

//   let content = document.querySelector(".carousel-slide");
//   content.appendChild(divItem);  
//   // let content2 = document.querySelector(".carousel-indicators");
//   // content2.appendChild(divItem);
//  }
// injectNewImg();   





//   <div class="item" data-bind="css: {'active': $index() == 0}">
//   <div class="mobile-image-wrapper">
//     <div id="cc_img__resize_wrapper" class="" style="max-width: 100%; min-height: 0px; height: 100%;">
//       <img align="middle" data-bind="ccResizeImage: {
//         isSrcSetEnabled : false,
//         source:$data + '&amp;height=300&amp;width=300' ,
//         xsmall:'300,300',
//         alt:$parent.displayName,
//         errorSrc:'/img/no-image.jpg',
//         errorAlt:'No Image Found'
//       }" alt="product-w-productDetails" data-error-src="/img/no-image.jpg" data-default-error-src="/img/no-image.jpg" data-error-alt="No Image Found" class="ccLazyLoaded" data-lazy-loading-image-class="ccLazyLoad" data-lazy-loaded-image-class="ccLazyLoaded" data-lazy-loading-parent-class="ccLazyLoad-background" data-src="/ccstore/v1/images/?source=/file/v535825198738328201/products/528752_xlalt3_V2.jpg&amp;height=300&amp;width=300" data-lazy-loading="false" src="/ccstore/v1/images/?source=/file/v535825198738328201/products/528752_xlalt3_V2.jpg&amp;height=300&amp;width=300"></div>
//   </div>
// </div>





//   let imagemNova = document.querySelector(".carousel-inner");
//   let carousel = document.querySelector("#cc_img__resize_wrapper");
//  imagemNova.append(carousel);

//  .carousel-inner
// .row-fluid

//   let imagemNova = document.querySelector("#cc_img__resize_wrapper-carouselImg3");
//   let carousel = document.querySelector(".item");
//   carousel.prepend(imagemNova);


//   let image = document.querySelector(".item");
//   let clone = document.querySelector("#cc_img_resize_wrapper");

//   document.querySelector(".item").append(clone);









// Query when targetting mobile 

// jQuery("#CC-prodDetails-longDescription .panel-group .panel-rb").length > 0 && window.innerWidth > 992;



//  function injectNewImg(){
//     let divItem = document.createElement("div");
//     divItem.innerHTML = `<div class="carousel-inner">
//     <div class="mobile-image-wrapper">
//     <div id="cc_img__resize_wrapper" class="" style="max-width: 100%; min-height: 0px; height: 100%;">
//         <img align="middle" data-bind="ccResizeImage: {
//           isSrcSetEnabled : false,
//           source:$data + '&amp;height=300&amp;width=300' ,
//           xsmall:'300,300',
//           alt:$parent.displayName,
//           errorSrc:'/img/no-image.jpg',
//           errorAlt:'No Image Found'
//         }" alt="product-w-productDetails" data-error-src="/img/no-image.jpg" data-default-error-src="/img/no-image.jpg" data-error-alt="No Image Found" class="ccLazyLoaded" data-lazy-loading-image-class="ccLazyLoad" data-lazy-loaded-image-class="ccLazyLoaded" data-lazy-loading-parent-class="ccLazyLoad-background" data-src="/ccstore/v1/images/?source=/file/v535825198738328201/products/528752_xlalt3_V2.jpg&amp;height=300&amp;width=300" data-lazy-loading="false" src="/ccstore/v1/images/?source=/file/v535825198738328201/products/528752_xlalt3_V2.jpg&amp;height=300&amp;width=300">
//         </div>
//       </div>
//       </div>`;
//   console.log("hi..");  
//     // let divItem = document.createElement("div");
//     divItem.setAttribute("class","item");
//     divItem.setAttribute("data-bind","css: {'active': $index() == 0}");

//     let content = document.querySelector("#prodDetails-mobileCarousel");
//     let contentImages = content.firstElementChild();
//     let contentSelectors = content.lastElementChild(".row-fluid");//esse e para os seletores

//     contentImages.appendChild(divItem);


//    }
//   injectNewImg();  


//   function injetNewImg() {
//     let divItem = document.createElement("div");
//     let divMobileiWrap = document.createElement("div");
//     let divImage = document.createElement("div");
//     let img = document.createElement("img");

//     divItem.setAttribute("class", "item");
//     divItem.setAttribute("data-bind", "css: {'active': $index() == 0}");

//     divMobileiWrap.setAttribute("class", "mobile-image-wrapper");

//     divImage.setAttribute("id", "cc_img__resize_wrapper");
//     divImage.setAttribute("style", "max-width: 100%; min-height: 0px; height: 100%;");

//     let imgAtribute = `ccResizeImage: {
//                         isSrcSetEnabled : false,
//                         source:$data + '&amp;height=300&amp;width=300' ,
//                         xsmall:'300,300',
//                         alt:$parent.displayName,
//                         errorSrc:'/img/no-image.jpg',
//                         errorAlt:'No Image Found'
//                         }`;
//     let imgUrl = "/ccstore/v1/images/?source=/file/v535825198738328201/products/528752_xlalt3_V2.jpg&amp;height=300&amp;width=300";
//     img.setAttribute("align", "middle");
//     img.setAttribute("class", "ccLazyLoaded");
//     img.setAttribute("style", "width: 300px;")//it was needed
//     img.setAttribute("alt", "product-w-productDetails");
//     img.setAttribute("data-bind", imgAtribute);
//     img.setAttribute("data-error-src", "/img/no-image.jpg");
//     img.setAttribute("data-error-alt", "No Image Found");
//     img.setAttribute("data-lazy-loading", "false");
//     img.setAttribute("data-lazy-loading-image-class", "ccLazyLoad");
//     img.setAttribute("data-lazy-loaded-image-class", "ccLazyLoaded");
//     img.setAttribute("data-default-error-src", "/img/no-image.jpg");
//     img.setAttribute("data-lazy-loading-parent-class", "ccLazyLoad-background");
//     img.setAttribute("data-src", imgUrl);
//     img.setAttribute("src", imgUrl);

//     divImage.append(img);
//     divMobileiWrap.append(divImage);
//     divItem.append(divMobileiWrap)

//     let caroselContent = document.querySelector("#prodDetails-mobileCarousel");
//     let carolselContentImages = caroselContent.firstElementChild;
//     let carolselContentBullets = caroselContent.lastElementChild;

//     carolselContentImages.append(divItem);

//     //carolselContentImages.insertBefore(divImage, carolselContentImages.lastElementChild);

//     let newItemBullet = carolselContentBullets.lastElementChild.lastElementChild.cloneNode(true);
//     newItemBullet.setAttribute("data-slide-to", 4);
//     carolselContentBullets.lastElementChild.append(newItemBullet)
// }

// injetNewImg();

// let url =  window.location.pathname.split("/")[2];
//   let prod = [105063, 240367, 105109, 105083, 240330, 432127, 431999, 240165, 105266, 240021, 105193, 240578, 123953, 240149, 240150,
//               240643, 240176, 124342, 240428, 240579, 567888, 527698, 527874, 567994, 527241, 568004, 530850, 527980, 240254, 527290,
//               240605, 528700, 527470, 530630, 240203, 527980, 240198, 568099, 528725, 527561, 240350, 240627, 240704, 706237, 240505, 
//               714118, 706331, 706481, 240498, 706433, 706333, 705882, 706327, 713166, 706332, 240440, 240347, 240668, 240336, 706019];
//   function valid_url(){
//       prod.forEach(element => {
//       if(element === url){
//         return true;
//       }
//       console.log("It's looping");
//    });
//     return false;
//   }
//   valid_url();


//   function injetNewImg() {
//     let divItem = document.createElement("div");
//     let divMobileiWrap = document.createElement("div");
//     let divImage = document.createElement("div");
//     let img = document.createElement("img");

//     divItem.setAttribute("class", "item");
//     divItem.setAttribute("data-bind", "css: {'active': $index() == 0}");

//     divMobileiWrap.setAttribute("class", "mobile-image-wrapper");

//     divImage.setAttribute("id", "cc_img__resize_wrapper");
//     divImage.setAttribute("style", "max-width: 100%; min-height: 0px; height: 100%;");

//     let imgAttribute = `ccResizeImage: {
//                         isSrcSetEnabled : false,
//                         source:$data + '&amp;height=300&amp;width=300',
//                         xsmall:'300,300',
//                         alt:$parent.displayName,
//                         errorSrc:'/img/no-image.jpg',
//                         errorAlt:'No Image Found'
//                         }`;
//     let imgUrl = "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg";
//     img.setAttribute("align", "middle");
//     img.setAttribute("class", "ccLazyLoaded");
//     img.setAttribute("style", "width: 300px;")//it was needed
//     img.setAttribute("alt", "product-w-productDetails");
//     img.setAttribute("data-bind", imgAttribute);
//     img.setAttribute("data-error-src", "/img/no-image.jpg");
//     img.setAttribute("data-error-alt", "No Image Found");
//     img.setAttribute("data-lazy-loading", "false");
//     img.setAttribute("data-lazy-loading-image-class", "ccLazyLoad");
//     img.setAttribute("data-lazy-loaded-image-class", "ccLazyLoaded");
//     img.setAttribute("data-default-error-src", "/img/no-image.jpg");
//     img.setAttribute("data-lazy-loading-parent-class", "ccLazyLoad-background");
//     img.setAttribute("data-src", imgUrl);
//     img.setAttribute("src", imgUrl);

//     divImage.append(img);
//     divMobileiWrap.append(divImage);
//     divItem.append(divMobileiWrap)

//     let caroselContent = document.querySelector("#prodDetails-mobileCarousel");
//     let carolselContentImages = caroselContent.firstElementChild;
//     let carolselContentBullets = caroselContent.lastElementChild;

//     carolselContentImages.append(divItem);

//     //carolselContentImages.insertBefore(divImage, carolselContentImages.lastElementChild);

//     let newItemBullet = carolselContentBullets.lastElementChild.lastElementChild.cloneNode(true);
//     newItemBullet.setAttribute("data-slide-to", 4);
//     carolselContentBullets.lastElementChild.append(newItemBullet)
// }
// injetNewImg();


// Version 1 

/*
var products é um array de objetos;
Cada objeto representa um produto;
Cada produto possui 2 atributos
    -> id : numero do produto
    -> imgUrl: endereco da imagem

*ATENÇÂO*
cada objeto deve ter essa mesma estrutura
{
    id: XXXX
    imgUrl: "xxxxxxxxxxxxxxxxxxx"
}    
*/

// let products = [
// {
//     id: 240071,
//     imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
// },
// {
//     id: 204882,
//     imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
// },
// {
//     id: 204992,
//     imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
// },
// {
//     id: 240072,
//     imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
// }
// ];

// //valida a url da pagina atual
// function valid_url() {
// /*
//     extrai do url a id do produto
//     Ex https://www.russellandbromley.co.uk/strictly/240072
//     retorn 240072
// */
// let product_page_id = window.location.pathname.split("/")[2];

// //pecorre todos os itens do array products
// products.forEach(product => {
//     //caso encontre algum produto chama 
//     //a function injectNewImg passando a url da image do produto
//     if (product.id == product_page_id) {
//         injetNewImg(product.imgUrl);
//         return;//interrompe o loop
//     }
// });
// }

// function injetNewImg(imgUrl) {

// //pega a div content do carosel
// let caroselContent = document.querySelector("#prodDetails-mobileCarousel");
// //pega a div content das imagens do carosel
// let carolselContentImages = caroselContent.firstElementChild;
// //pega a div content das bolinhas(não sei o nome, eu chamo de bullet kkkkk) que fica embaixo das imagens
// let carolselContentBullets = caroselContent.lastElementChild;

// //pega a ultima div de imagem no carosel clona ela
// let newContentImage = carolselContentImages.lastElementChild.cloneNode(true);

// //pega a img do novo content
// let img = newContentImage.firstElementChild.firstElementChild.firstElementChild;

// //altera os atributo da nova image passando a url da imagem nova 
// img.setAttribute("data-src", imgUrl);
// img.setAttribute("src", imgUrl);
// //mesmo clonando foi preciso setar um tamanho para a nova imagem
// img.setAttribute("style", "width: 300px;")

// //insere a nova content image no carolsel
// carolselContentImages.append(newContentImage);

// /*
//     ps/ se olhar a estrutura pega no carolselContentBullets
//     ele tem uma 'div', que tem uma 'ol' que tem 3 'li'
//     por isso usei o carolselContentBullets.lastElementChild para pegar a ol (não era preciso já que só tem a ol dentro dele kkkkk)
//     depois  lastElementChild novamente para pegar o ultimo li para ser clonado (agora era preciso usar lastElementChild mesmo kkkk)
// */
// //pega a ultima bolinha do carolselContentBullets e clona ele
// let newItemBullet = carolselContentBullets.lastElementChild.lastElementChild.cloneNode(true);
// //alteramos o atributo do clone de 3 para 4;
// newItemBullet.setAttribute("data-slide-to", 4);
// //injetamos o 5º bullet para referenciar a 5º imagen
// carolselContentBullets.lastElementChild.append(newItemBullet)

// }


// valid_url();




// //Version 2 


// let products = [
//   {
//       id: 240071,
//       imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//   },
//   {
//       id: 204882,
//       imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//   },
//   {
//       id: 204992,
//       imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//   },
//   {
//       id: 240072,
//       imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//   }
// ];


// function valid_url(){
//   let product_page_id = window.location.pathname.split("/")[2];
//   products.forEach(product => {
//       if(product.id == product_page_id){
//           injetNewImg(product.imgUrl);
//           return;
//       }
//   });
// }


// function injetNewImg(imgUrl) {
//   let divItem = document.createElement("div");
//   let divMobileiWrap = document.createElement("div");
//   let divImage = document.createElement("div");
//   let img = document.createElement("img");

//   divItem.setAttribute("class", "item");
//   divItem.setAttribute("data-bind", "css: {'active': $index() == 0}");

//   divMobileiWrap.setAttribute("class", "mobile-image-wrapper");

//   divImage.setAttribute("id", "cc_img__resize_wrapper");
//   divImage.setAttribute("style", "max-width: 100%; min-height: 0px; height: 100%;");

//   let imgAttribute = `ccResizeImage: {
//                       isSrcSetEnabled : false,
//                       source:$data + '&amp;height=300&amp;width=300' ,
//                       xsmall:'300,300',
//                       alt:$parent.displayName,
//                       errorSrc:'/img/no-image.jpg',
//                       errorAlt:'No Image Found'
//                       }`;

//   img.setAttribute("align", "middle");

//   img.setAttribute("class", "ccLazyLoaded");                
//   img.setAttribute("style", "width: 300px;")//it was needed
//   img.setAttribute("alt", "product-w-productDetails");
//   img.setAttribute("data-bind", imgAttribute);
//   img.setAttribute("data-error-src", "/img/no-image.jpg");
//   img.setAttribute("data-error-alt", "No Image Found");
//   img.setAttribute("data-lazy-loading", "false");
//   img.setAttribute("data-lazy-loading-image-class", "ccLazyLoad");
//   img.setAttribute("data-lazy-loaded-image-class", "ccLazyLoaded");
//   img.setAttribute("data-default-error-src", "/img/no-image.jpg");
//   img.setAttribute("data-lazy-loading-parent-class", "ccLazyLoad-background");
//   img.setAttribute("data-src", imgUrl);
//   img.setAttribute("src", imgUrl);

//   divImage.append(img);
//   divMobileiWrap.append(divImage);
//   divItem.append(divMobileiWrap)

//   let caroselContent = document.querySelector("#prodDetails-mobileCarousel");
//   let carolselContentImages = caroselContent.firstElementChild;
//   let carolselContentBullets = caroselContent.lastElementChild;

//   carolselContentImages.append(divItem);

//   let newItemBullet = carolselContentBullets.lastElementChild.lastElementChild.cloneNode(true);
//   newItemBullet.setAttribute("data-slide-to", 4);
//   carolselContentBullets.lastElementChild.append(newItemBullet)

// }
// valid_url();


////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// WORKING BUT GETTING DUPLICATED //////////

// console.log("Zoom Up Mobile");
// (function v2() {

//     (function(win) {
//         'use strict';

//         var listeners = [], 
//         doc = win.document, 
//         MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
//         observer;

//         function ready(selector, fn) {
//             // Store the selector and callback to be monitored
//             listeners.push({
//                 selector: selector,
//                 fn: fn
//             });
//             if (!observer) {
//                 // Watch for changes in the document
//                 observer = new MutationObserver(check);
//                 observer.observe(doc.documentElement, {
//                     childList: true,
//                     subtree: true
//                 });
//             }
//             // Check if the element is currently in the DOM
//             check();
//         }

//         function check() {
//             // Check the DOM for elements matching a stored selector
//             for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
//                 listener = listeners[i];
//                 // Query for elements matching the specified selector
//                 elements = doc.querySelectorAll(listener.selector);
//                 for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
//                     element = elements[j];
//                     // Make sure the callback isn't invoked with the
//                     // same element more than once
//                     if (!element.ready) {
//                         element.ready = true;
//                         // Invoke the callback with the element
//                         listener.fn.call(element, element);
//                     }
//                 }
//             }
//         }

//         // Expose 'ready'
//         win.optiReady = ready;

//     })(this);

//     function waitUntil(predicate, success, error) {
//         var int = setInterval(function () {
//             if (predicate()) {
//                 clearInterval(int);
//                 int = null;
//                 success();
//             }
//         }, 33);
//         setTimeout(function () {
//             if (int !== null) {
//                 clearInterval(int);
//                 if (typeof (error) === 'function') {
//                     error();
//                 }
//             }
//         }, 20000);
//     }

//     function zoomUpMobile() {
//      let products = [
//     {
//         id: 240241,
//         imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//     },
//     {
//         id: 204882,
//         imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//     },
//     {
//         id: 204992,
//         imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//     },
//     {
//         id: 240072,
//         imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//     }
//   ];


//   function valid_url(){
//     let product_page_id = window.location.pathname.split("/")[2];
//     products.forEach(product => {
//         if(product.id == product_page_id){
//             injetNewImg(product.imgUrl);
//             return;
//         }
//     });
//   }


//   function injetNewImg(imgUrl) {
//     let divItem = document.createElement("div");
//     let divMobileiWrap = document.createElement("div");
//     let divImage = document.createElement("div");
//     let img = document.createElement("img");

//     divItem.setAttribute("id", "Zoom_Up");
//     divItem.setAttribute("class", "item");
//     divItem.setAttribute("data-bind", "css: {'active': $index() == 0}");

//     divMobileiWrap.setAttribute("class", "mobile-image-wrapper");

//     divImage.setAttribute("id", "cc_img__resize_wrapper");
//     divImage.setAttribute("style", "max-width: 100%; min-height: 0px; height: 100%;");

//     let imgAttribute = `ccResizeImage: {
//                         isSrcSetEnabled : false,
//                         source:$data + '&amp;height=300&amp;width=300' ,
//                         xsmall:'300,300',
//                         alt:$parent.displayName,
//                         errorSrc:'/img/no-image.jpg',
//                         errorAlt:'No Image Found'
//                         }`;

//     img.setAttribute("align", "middle");

//     img.setAttribute("class", "ccLazyLoaded");                
//     img.setAttribute("style", "width: 300px;");//it was needed
//     img.setAttribute("alt", "product-w-productDetails");
//     img.setAttribute("data-bind", imgAttribute);
//     img.setAttribute("data-error-src", "/img/no-image.jpg");
//     img.setAttribute("data-error-alt", "No Image Found");
//     img.setAttribute("data-lazy-loading", "false");
//     img.setAttribute("data-lazy-loading-image-class", "ccLazyLoad");
//     img.setAttribute("data-lazy-loaded-image-class", "ccLazyLoaded");
//     img.setAttribute("data-default-error-src", "/img/no-image.jpg");
//     img.setAttribute("data-lazy-loading-parent-class", "ccLazyLoad-background");
//     img.setAttribute("data-src", imgUrl);
//     img.setAttribute("src", imgUrl);

//     divImage.append(img);
//     divMobileiWrap.append(divImage);
//     divItem.append(divMobileiWrap);

//     let caroselContent = document.querySelector("#prodDetails-mobileCarousel");
//     let carolselContentImages = caroselContent.firstElementChild;
//     let carolselContentBullets = caroselContent.lastElementChild;

//     carolselContentImages.append(divItem);

//     let newItemBullet = carolselContentBullets.lastElementChild.lastElementChild.cloneNode(true);
//     newItemBullet.setAttribute("data-slide-to", 4);
//     newItemBullet.setAttribute("id","Zoom_2");
//     carolselContentBullets.lastElementChild.append(newItemBullet); {  

//   }
//   valid_url();       
//  }

//   waitUntil(function () {
//       return document.querySelectorAll("#prodDetails-mobileCarousel .row-fluid").length > 0 &&
//             typeof jQuery === 'function';
//     }, function () {
//         zoomUpMobile();
//    });  
// }());


///////// My version //////



// function waitUntil(predicate, success, error) {
//   var int = setInterval(function () {
//       if (predicate()) {
//           clearInterval(int);
//           int = null;
//           success();
//       }
//   }, 33);
//   setTimeout(function () {
//       if (int !== null) {
//           clearInterval(int);
//           if (typeof (error) === 'function') {
//               error();
//           }
//       }
//   }, 20000);
// }

// function zoomUpMobile(){
//   let products = [
//     {
//         id: 240241,
//         imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//     },
//     {
//         id: 204882,
//         imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//     },
//     {
//         id: 204992,
//         imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//     },
//     {
//         id: 240072,
//         imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
//     }
//   ];


//   function valid_url(){
//     let product_page_id = window.location.pathname.split("/")[2];
//     products.forEach(product => {
//         if(product.id == product_page_id){
//             injetNewImg(product.imgUrl);
//             return;
//         }
//     });
//   }


//   function injetNewImg(imgUrl) {
//     let divItem = document.createElement("div");
//     let divMobileiWrap = document.createElement("div");
//     let divImage = document.createElement("div");
//     let img = document.createElement("img");

//     divItem.setAttribute("class", "item");
//     divItem.setAttribute("data-bind", "css: {'active': $index() == 0}");

//     divMobileiWrap.setAttribute("class", "mobile-image-wrapper");

//     divImage.setAttribute("id", "cc_img__resize_wrapper");
//     divImage.setAttribute("style", "max-width: 100%; min-height: 0px; height: 100%;");

//     let imgAttribute = `ccResizeImage: {
//                         isSrcSetEnabled : false,
//                         source:$data + '&amp;height=300&amp;width=300' ,
//                         xsmall:'300,300',
//                         alt:$parent.displayName,
//                         errorSrc:'/img/no-image.jpg',
//                         errorAlt:'No Image Found'
//                         }`;

//     img.setAttribute("align", "middle");

//     img.setAttribute("class", "ccLazyLoaded");                
//     img.setAttribute("style", "width: 300px;");//it was needed
//     img.setAttribute("alt", "product-w-productDetails");
//     img.setAttribute("data-bind", imgAttribute);
//     img.setAttribute("data-error-src", "/img/no-image.jpg");
//     img.setAttribute("data-error-alt", "No Image Found");
//     img.setAttribute("data-lazy-loading", "false");
//     img.setAttribute("data-lazy-loading-image-class", "ccLazyLoad");
//     img.setAttribute("data-lazy-loaded-image-class", "ccLazyLoaded");
//     img.setAttribute("data-default-error-src", "/img/no-image.jpg");
//     img.setAttribute("data-lazy-loading-parent-class", "ccLazyLoad-background");
//     img.setAttribute("data-src", imgUrl);
//     img.setAttribute("src", imgUrl);

//     divImage.append(img);
//     divMobileiWrap.append(divImage);
//     divItem.append(divMobileiWrap);

//     let caroselContent = document.querySelector("#prodDetails-mobileCarousel");
//     let carolselContentImages = caroselContent.firstElementChild;
//     let carolselContentBullets = caroselContent.lastElementChild;

//     carolselContentImages.append(divItem);

//     let newItemBullet = carolselContentBullets.lastElementChild.lastElementChild.cloneNode(true);
//     newItemBullet.setAttribute("data-slide-to", 4);
//     carolselContentBullets.lastElementChild.append(newItemBullet);

//   }
//   valid_url();

// }

// waitUntil(function () {
//   return document.querySelectorAll('#prodDetails-mobileCarousel').length > 4 &&
//         // document.querySelectorAll('.row-fluid').length > 0 &&
//       typeof jQuery === 'function';
// }, function () {
//   zoomUpMobile();
// });

////////////////////////////////////////////////////////////////////////////

console.info("Zoom Up Mobile");
//**********************/
(function v2() {
  (function (win) {
    'use strict';

    var listeners = [],
      doc = win.document,
      MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
      observer;

    function ready(selector, fn) {
      // Store the selector and callback to be monitored
      listeners.push({
        selector: selector,
        fn: fn
      });
      if (!observer) {
        // Watch for changes in the document
        observer = new MutationObserver(check);
        observer.observe(doc.documentElement, {
          childList: true,
          subtree: true
        });
      }
      // Check if the element is currently in the DOM
      check();
    }

    function check() {
      // Check the DOM for elements matching a stored selector
      for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
        listener = listeners[i];
        // Query for elements matching the specified selector
        elements = doc.querySelectorAll(listener.selector);
        for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
          element = elements[j];
          // Make sure the callback isn't invoked with the
          // same element more than once
          if (!element.ready) {
            element.ready = true;
            // Invoke the callback with the element
            listener.fn.call(element, element);
          }
        }
      }
    }

    // Expose 'ready'
    win.optiReady = ready;

  })(this);

  function zoomUpMobile() {
    let products = [{
      id: 105063,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
    },
    {
      id: 240367,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240367_xlalt3.jpg"
    },
    {
      id: 105109,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105109_xlalt3.jpg"
    },
    {
      id: 431999,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/431999_xlalt3.jpg"
    },
    {
      id: 240330,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240330_xlalt3.jpg"
    },
    {
      id: 432127,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/432127_xlalt3V2.jpg"
    },
    {
      id: 240165,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240165_xlalt3V2.jpg"
    },
    {
      id: 105266,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105266_xlalt3.jpg"
    },
    {
      id: 240021,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240021_xlalt3.jpg"
    },
    {
      id: 240643,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240643_xlalt3.jpg"
    },
    {
      id: 105193,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105193_xlalt3V2.jpg"
    },
    {
      id: 105083,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105083_xlalt3.jpg"
    },
    {
      id: 240579,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240579_xlalt3.jpg"
    },
    {
      id: 240149,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240149_xlalt3.jpg"
    },
    {
      id: 240150,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240150_xlalt3V2.jpg"
    },
    {
      id: 240176,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240176_xlalt3V2.jpg"
    },
    {
      id: 124342,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/124342_xlalt3.jpg"
    },
    {
      id: 240428,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240428_xlalt3V2.jpg"
    },
    {
      id: 567888,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/567888_xlalt3V2.jpg"
    },
    {
      id: 527698,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527698_xlalt3V2.jpg"
    },
    {
      id: 527874,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527874_xlalt3.jpg"
    },
    {
      id: 567994,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/567994_xlalt3.jpg"
    },
    {
      id: 527241,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527241_xlalt3V2.jpg"
    },
    {
      id: 568004,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/568004_xlalt3V2.jpg"
    },
    {
      id: 530850,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/530850_xlalt3.jpg"
    },
    {
      id: 527980,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527980_xlalt3V2.jpg"
    },
    {
      id: 240254,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240254_xlalt3.jpg"
    },
    {
      id: 257290,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/257290_xlalt3V2.jpg"
    },
    {
      id: 240605,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240605_xlalt3.jpg"
    },
    {
      id: 528700,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/528700_xlalt3.jpg"
    },
    {
      id: 527470,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527470_xlalt3V2.jpg"
    },
    {
      id: 530630,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/530630_xlalt3v2.jpg"
    },
    {
      id: 240203,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240203_xlalt3V2.jpg"
    },
    {
      id: 527980,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527980_xlalt3V2.jpg"
    },
    {
      id: 240198,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240198_xlalt3v2.jpg"
    },
    {
      id: 568099,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/568099_xlalt3.jpg.jpg"
    },
    {
      id: 528725,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/528725_xlalt3.jpg"
    },
    {
      id: 527561,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527561_xlalt3.jpg"
    },
    {
      id: 240350,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240350_xlalt3.jpg"
    },
    {
      id: 240627,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240627_xlalt3.jpg"
    },
    {
      id: 240704,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240704_xlalt3V2.jpg"
    },
    {
      id: 706237,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706237_xlalt3V2.jpg"
    },
    {
      id: 240505,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240505_xlalt3.jpg"
    },
    {
      id: 714118,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/714118_xlalt3V2.jpg"
    },
    {
      id: 706331,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706331_xlalt3.jpg"
    },
    {
      id: 706481,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706481_xlalt3.jpg"
    },
    {
      id: 240498,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240498_xlalt3.jpg"
    },
    {
      id: 706433,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706433_xlalt3.jpg"
    },
    {
      id: 706333,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706333_xlalt3V2.jpg"
    },
    {
      id: 705882,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/705882_xlalt3.jpg"
    },
    {
      id: 706327,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706327_xlalt3V2.jpg"
    },
    {
      id: 713166,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/713166_xlalt3.jpg"
    },
    {
      id: 706332,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706332_xlalt3.jpg"
    },
    {
      id: 240440,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240440_xlalt3V2.jpg"
    },
    {
      id: 240347,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240347_xlalt3.jpg"
    },
    {
      id: 240668,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240668_xlalt3V2.jpg"
    },
    {
      id: 240336,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240336_xlalt3.jpg"
    },
    {
      id: 706019,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706019_xlalt3V2.jpg"
    },
    {
      id: 240578,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240578_xlalt3V2.jpg"
    },
    {
      id: 123593,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/123593_xlalt3.jpg"
    }
    ];

    console.log(products);

    function valid_url() {
      if (!document.getElementById("Zoom_Up")) {
        let product_page_id = window.location.pathname.split("/")[2];
        products.forEach(product => {
          if (product.id == product_page_id) {
            injetNewImg(product.imgUrl);
            return;
          }
        });
      }
    }
    console.log(products);


    function injetNewImg(imgUrl) {
      let divItem = document.createElement("div");
      let divMobileiWrap = document.createElement("div");
      let divImage = document.createElement("div");
      let img = document.createElement("img");


      divItem.setAttribute("id", "Zoom_Up");
      divItem.setAttribute("class", "item");
      divItem.setAttribute("data-bind", "css: {'active': $index() == 0}");

      divMobileiWrap.setAttribute("class", "mobile-image-wrapper");

      divImage.setAttribute("id", "cc_img__resize_wrapper");
      divImage.setAttribute("style", "max-width: 100%; min-height: 0px; height: 100%;");

      let imgAttribute = `ccResizeImage: {
                        isSrcSetEnabled : false,
                        source:$data + '&amp;height=300&amp;width=300' ,
                        xsmall:'300,300',
                        alt:$parent.displayName,
                        errorSrc:'/img/no-image.jpg',
                        errorAlt:'No Image Found'
                        }`;

      img.setAttribute("align", "middle");

      img.setAttribute("class", "ccLazyLoaded");
      img.setAttribute("style", "width: 300px;"); //it was needed
      img.setAttribute("alt", "product-w-productDetails");
      img.setAttribute("data-bind", imgAttribute);
      img.setAttribute("data-error-src", "/img/no-image.jpg");
      img.setAttribute("data-error-alt", "No Image Found");
      img.setAttribute("data-lazy-loading", "false");
      img.setAttribute("data-lazy-loading-image-class", "ccLazyLoad");
      img.setAttribute("data-lazy-loaded-image-class", "ccLazyLoaded");
      img.setAttribute("data-default-error-src", "/img/no-image.jpg");
      img.setAttribute("data-lazy-loading-parent-class", "ccLazyLoad-background");
      img.setAttribute("data-src", imgUrl);
      img.setAttribute("src", imgUrl);

      divImage.append(img);
      divMobileiWrap.append(divImage);
      divItem.append(divMobileiWrap);

      let caroselContent = document.querySelector("#prodDetails-mobileCarousel");
      let carolselContentImages = caroselContent.firstElementChild;
      let carolselContentBullets = caroselContent.lastElementChild;

      carolselContentImages.append(divItem);

      let newItemBullet = carolselContentBullets.lastElementChild.lastElementChild.cloneNode(true);
      newItemBullet.setAttribute("data-slide-to", 4);
      carolselContentBullets.lastElementChild.append(newItemBullet);
    }

    setTimeout(valid_url, 100);

  }//and function zoomUpMobile

  optiReady('#prodDetails-mobileCarousel', (ele) => {
    console.info('zoomUpMobile calling function');
    zoomUpMobile();
  });

}());

/// womens images /////
// general/240367_xlalt3.jpg
// general/105109_xlalt3.jpg
// general/105083_xlalt3.jpg
// general/240330_xlalt3.jpg
// general/431999_xlalt3.jpg
// general/432127_xlalt3V2.jpg
// general/240165_xlalt3V2.jpg
// general/105266_xlalt3.jpg
// general/240021_xlalt3.jpg
// general/105193_xlalt3V2.jpg
// general/240579_xlalt3.jpg
// general/240149_xlalt3.jpg
// general/240150_xlalt3V2.jpg
// general/240643_xlalt3.jpg
// general/240176_xlalt3V2.jpg
// general/124342_xlalt3.jpg
// general/240428_xlalt3V2.jpg



// general/567888_xlalt3V2.jpg
// general/527698_xlalt3V2.jpg
// general/527874_xlalt3.jpg
// general/567994_xlalt3.jpg
// general/527241_xlalt3V2.jpg
// general/568004_xlalt3V2.jpg
// general/530850_xlalt3.jpg
// general/527980_xlalt3V2.jpg
// general/240254_xlalt3.jpg
// general/257290_xlalt3V2.jpg
// general/240605_xlalt3.jpg
// general/528700_xlalt3.jpg
// general/527470_xlalt3V2.jpg
// general/530630_xlalt3v2.jpg
// general/240203_xlalt3V2.jpg
// general/527980_xlalt3V2.jpg
// general/240198_xlalt3v2.jpg
// general/568099_xlalt3.jpg.jpg
// general/528725_xlalt3.jpg
// general/527561_xlalt3.jpg

//// BAGS ////

// general/240350_xlalt3.jpg
// general/240627_xlalt3.jpg
// general/240704_xlalt3V2.jpg
// general/706237_xlalt3V2.jpg
// general/240505_xlalt3.jpg
// general/714118_xlalt3V2.jpg
// general/706331_xlalt3.jpg
// general/706481_xlalt3.jpg
// general/240498_xlalt3.jpg
// general/706433_xlalt3.jpg
// general/706333_xlalt3V2.jpg
// general/705882_xlalt3.jpg
// general/706327_xlalt3V2.jpg
// general/713166_xlalt3.jpg
// general/706332_xlalt3.jpg
// general/240440_xlalt3V2.jpg
// general/240347_xlalt3.jpg
// general/240668_xlalt3V2.jpg
// general/240336_xlalt3.jpg
// general/706019_xlalt3V2.jpg


//https://www.russellandbromley.co.uk/?_conv_eforce=100328792.1003128375&utm_medium=qa_audience

//general/image 1.jpg
//https://www.russellandbromley.co.uk/file/general/image 1.jpg