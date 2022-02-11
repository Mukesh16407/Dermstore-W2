var totalCartValue = 0;
var prodInfo = JSON.parse(localStorage.getItem("Dermcart")) || [];
displayitems(prodInfo)

function addCounter(event) {
    prodInfo.forEach(function (item) {
        if (item.id == event.target.value) {
            item.quantity++
        }
    })
    displayitems(prodInfo)
    // localStorage.setItem('Dermcart', prodInfo)
}

function reduceCounter(event) {
    prodInfo.forEach(function (item) {
        if (item.id == event.target.value) {
            item.quantity--
        }
    })
    displayitems(prodInfo)
    // localStorage.setItem('Dermcart', prodInfo)
}

function displayitems(productInfo) {
    document.querySelector("tbody").textContent = "";

    prodInfo.map(function (item, index) {
        var tr = document.createElement("tr");
        tr.setAttribute("id", "setfontsize")

        var td1 = document.createElement("td");
        td1.innerHTML = `<img class='cartImage' src='${item.image_url}'/>`

        var td2 = document.createElement("td");
        td2.textContent = item.MRP;

        var td3 = document.createElement("td");

        var btn1 = document.createElement("div");
        btn1.setAttribute("id", "plusBtn");
        btn1.setAttribute('value', item.id)
        btn1.setAttribute('class', 'box5');
        var plusBtn = document.createElement('button');
        plusBtn.innerHTML = '+';
        plusBtn.value = item.id;

        plusBtn.addEventListener('click', addCounter)
        btn1.append(plusBtn)

        h1Tag = document.createElement("p");
        h1Tag.textContent = item.quantity;
        h1Tag.setAttribute("class", "box5")

        var btn2 = document.createElement("div");
        btn2.setAttribute('class', 'box5')
        var minusBtn = document.createElement('button');
        minusBtn.innerHTML = '-';
        minusBtn.value = item.id;
        minusBtn.addEventListener('click', reduceCounter)
        btn2.append(minusBtn)

        td3.append(btn1, h1Tag, btn2);


        var td4 = document.createElement("td");
        td4.setAttribute("class", "addTotalPrice")
        td4.innerHTML = (item.quantity) * Number(item.MRP);
        totalCartValue += (item.quantity) * Number(item.MRP);

        var td5 = document.createElement("td");
        td5.setAttribute("id", "box6");
        var deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', deleteBtn);
        deleteBtn.setAttribute('value', item.id)
        deleteBtn.innerHTML = 'X'
        td5.append(deleteBtn);

        td5.addEventListener("click", deleteItem);

        tr.append(td1, td2, td3, td4, td5);
        document.querySelector("tbody").append(tr);
        document.getElementById('subtotal').innerText = `$ ` + totalCartValue || 0;
    });

}


function checkout(){
    localStorage.setItem('Dermcart', JSON.stringify(prodInfo));
    window.location.href = 'checkout.html'

};
function deleteItem(event) {
    prodInfo = prodInfo.filter(function(item){
        return item.id != event.target.value
    })
    displayitems(prodInfo)
}
window.addEventListener("load", function () {
    var productInfo = JSON.parse(localStorage.getItem("Dermcart"));
    displayitems(productInfo)
})




    
  