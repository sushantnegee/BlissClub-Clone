import { checkout_cart, checkout_cart1, displayitems, displayitems1, shipping_item} from "../utils/checkout_cart.js";

document.getElementById("checkout_mid2").innerHTML = checkout_cart();


document.querySelector("#checkout_mid_hidden").innerHTML = checkout_cart1();

let allitem = JSON.parse(localStorage.getItem("cart_items"))||[] ;
console.log(allitem);
displayitems(allitem);

displayitems1(allitem);

//  document.querySelector(".checkout_adress_div").innerHTML=contact_adress_html();

 shipping_item();