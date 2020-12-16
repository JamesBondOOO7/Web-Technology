showCart();

function showCart() {
    let totalItems = document.getElementsByClassName("price")[0];

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

    totalItems.children[1].textContent = itemsObj.length;

    let container = document.getElementsByClassName("container")[1];

    itemsObj.forEach(function(element, index){
    let ele = document.createElement('p');
    ele.innerHTML = `<a id=${"i" + index}>${element}</a> <span class="price" id=${"p" + index}>₹${pricesObj[index]}</span> 
    <button id="${index}" class="btn btn-danger" onclick="deleteItem(this.id)"> X</button>`;
    container.appendChild(ele);
    });

    let totalPrice = 0;
    pricesObj.forEach(function(element){
    totalPrice += Number(element);
    });

    let total = document.createElement("p");

    total.innerHTML = `<hr>Total <span class="price" style="color:black"><b>₹${totalPrice}</b></span>`;

    container.appendChild(total);
}

function deleteItem(index) {
    let totalItems = document.getElementsByClassName("price")[0];

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

    itemsObj.splice(index,1);
    pricesObj.splice(index,1);

    localStorage.setItem("items", JSON.stringify(itemsObj));
    localStorage.setItem("prices", JSON.stringify(pricesObj));
    let container = document.getElementsByClassName("container")[1];
    container.innerHTML = `<h4>
    Cart
    <span class="price" style="color: black"
      ><i class="fa fa-shopping-cart"></i> <b>0</b></span
    >
    </h4>`;
    showCart();
}
