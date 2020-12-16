function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function addToCart(e)
{
  // console.log(e.children[0].textContent);
  // console.log(e.children[1].textContent);

  let item = e.children[0].textContent.toString();
  console.log(item);

  let price = Number(e.children[1].textContent.toString().split("₹")[1]);
  console.log(price);

  let items = localStorage.getItem("items");
  let prices = localStorage.getItem("prices");

  if(  items == null )
    {
        itemsObj = [];
        pricesObj = [];
    }
    else
    {
        itemsObj = JSON.parse(items);
        pricesObj = JSON.parse(prices);
    }

  itemsObj.push(item);
  pricesObj.push(price);

  localStorage.setItem("items", JSON.stringify(itemsObj));
  localStorage.setItem("prices", JSON.stringify(pricesObj));
  
}
// addToCart.addEventListener('click', function() {
//     console.log("Hello");
// });