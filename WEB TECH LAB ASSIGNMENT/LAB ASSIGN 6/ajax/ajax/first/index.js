const button=document.getElementById("btn");
var div=document.querySelector(".afterclick");
var info=document.querySelector(".info");
var incomesumrybtn=document.getElementById("incomesumry")
var userbtn=document.getElementById("userbtn");
// selecting and printing for user detail
var id1=document.getElementById("id1");
var firstname=document.getElementById("firstname");
var lastname=document.getElementById("lastname");
var incomes=document.getElementById("incomes");
// alll Expenses list
// var first10=document.getElementById("p10");
// var first11=document.getElementById("p11");
// var first12=document.getElementById("p12");
// var first13=document.getElementById("p13");

// var second20=document.getElementById("p20");
// var second21=document.getElementById("p21");
// var second22=document.getElementById("p22");
// var second23=document.getElementById("p23");

// var third30=document.getElementById("p30");
// var third31=document.getElementById("p31");
// var third32=document.getElementById("p32");
// var third33=document.getElementById("p33");

//  for TAKING iNPUT
var pid=[];
var pname=[];
var pdate=[];
var prices=[];
var submit=document.getElementById("submit");
var tbody=document.getElementById("tbodys");
var count=0;

// for total expenses
var totalexpenses=document.querySelector(".span1");
var totals;
//select expense list button
var expensebtn=document.getElementById("expenselistbtn");
var i=0;

//for balance
var balance=document.querySelector(".span2");
var balance1= Number(balance.innerHTML);
 var k=submit.addEventListener("click",function()
{
    let id=document.getElementById("p10");
    let name=document.getElementById("p11");
    let date=document.getElementById("p12");
    let price=document.getElementById("p13");
    pid.push(id.value);
    pname.push(name.value);
    pdate.push(date.value);
    prices.push(price.value);
    id.value="";
    name.value="";
    date.value="";
    price.value="";

expensebtn.disabled=false;

});

expensebtn.addEventListener("click",function()
{
   count++;
  for( ;i<pid.length;i++)
  {
      let tr=document.createElement("tr");
      let th1=document.createElement("th");
      let th2=document.createElement("th");
      let th3=document.createElement("th");
      let th4=document.createElement("th");
      th1.innerHTML=pid[i];
      th2.innerHTML=pname[i];
      th3.innerHTML=pdate[i];
      th4.innerHTML=prices[i];
      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      tbody.appendChild(tr);
    //   totalexpenses.innerHTML=prices[i];
  }
      var sum=0;
      let sumbefore=[];
      for(let j=0;j<prices.length;j++)
      {
          sum=sum+Number(prices[j]);
      }
      totalexpenses.innerHTML=sum;
      let b=balance1-sum;
    balance.innerHTML=b;
    $(this).prop('disabled', true);
});
 



button.addEventListener("click",ajaxstart);
function ajaxstart()
{
    div.classList.add("div2");
    console.log("button clicked");
}
userbtn.addEventListener("click",function()
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.responseType="json";
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState===XMLHttpRequest.DONE && xhr.status===200){
        id1.innerHTML=xhr.response.id;
        console.log(xhr.response.firstname);
        firstname.innerHTML=xhr.response.name1;
        lastname.innerHTML=xhr.response.name2;
        incomes.innerHTML=xhr.response.income; 
        balance1=xhr.response.income;
        if(totals==null)
        balance.innerHTML=xhr.response.income;
        else if(totals!=null)
        balance.innerHTML=balance1-totals;     
    }
    else
    {
        console.log("Error Occured");
    }
    };
    xhr.send();
});
incomesumrybtn.addEventListener("mouseover",function()
{
 info.classList.add("infos");
});
incomesumrybtn.addEventListener("mouseout",function()
{
 info.classList.remove("infos");
});
// expensebtn.addEventListener("click",function()
// {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.json", true);
//     xhr.responseType="json";
//     xhr.onreadystatechange=function()
//     {
//         if(xhr.readyState===XMLHttpRequest.DONE && xhr.status===200){
//         first10.innerHTML=xhr.response.products[0].id;
//         console.log(xhr.response.firstname);
//         first11.innerHTML=xhr.response.products[0].name;
//         first12.innerHTML=xhr.response.products[0].quant;
//         first13.innerHTML=xhr.response.products[0].expense;

//         second20.innerHTML=xhr.response.products[1].id;
//         second21.innerHTML=xhr.response.products[1].name;
//         second22.innerHTML=xhr.response.products[1].quant;
//         second23.innerHTML=xhr.response.products[1].expense;

//         third30.innerHTML=xhr.response.products[2].id;
//         third31.innerHTML=xhr.response.products[2].name;
//         third32.innerHTML=xhr.response.products[2].quant;
//         third33.innerHTML=xhr.response.products[2].expense;
//          totals=xhr.response.products[2].expense+xhr.response.products[1].expense+xhr.response.products[0].expense;
//         totalexpenses.innerHTML=totals;
//         let balancelast=balance1-totals;
//         balance.innerHTML=balancelast;
//     }
//     else
//     {
//         console.log("Error Occured");
//     }
//     };
//     xhr.send();
// });

