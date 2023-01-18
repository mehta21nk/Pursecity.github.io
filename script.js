// Menu
var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight = "0px";
function menutoggle() {
  if (menuitems.style.maxHeight == "0px") {
    menuitems.style.maxHeight = "200px";
  } else {
    menuitems.style.maxHeight = "0px";
  }
};
var NavBar = document.querySelectorAll('.navbar');

popUpCart();
//image gallery
function popUpImg(){
  let Gallery= '<div id="imagemodal" class="image-modal"><span class="spanClose" onclick="CloseGallery()">&times;</span> <span class="spanLeft" onclick="previousImg()">&#10216;</span> <span class="spanRight" onclick="nextImg()">&#9002;</span> <img id="mainPopImg" src="PurseCity/10b.png" alt=""></div>';

  let popDiv = document.createElement("div");
  popDiv.innerHTML=Gallery;
  document.body.insertBefore(popDiv,document.body.firstChild)
};

//For call Gallery
let PopImg;
let Current;
OpenGallery();
function OpenGallery(){
  PopImg=document.getElementsByClassName('sampleImg');
  for(var i=0;i<PopImg.length;i++){
    PopImg[i].style.cursor = 'pointer';
    PopImg[i].addEventListener('click',function(){
      document.getElementById("mainPopImg").src = this.src;
      document.getElementById("imagemodal").style.display="block";
    })
  }
  popUpImg();
};
//Close Gallery
function CloseGallery(){
  document.getElementById("mainPopImg").src = "";
  document.getElementById("imagemodal").style.display="none";
};
//To move img left
function previousImg(){
getCurrentImg();
Current--;
document.getElementById("mainPopImg").src = PopImg[Current].src;
};
//To move img Right
function nextImg(){
  getCurrentImg();
  Current++;
  document.getElementById("mainPopImg").src = PopImg[Current].src;
};
//For Left right in gallery
function getCurrentImg(){
  for(var i=0; i<PopImg.length;i++){
    if(PopImg[i].src == document.getElementById("mainPopImg").src){
      Current = i;
    }
  }
};
// Login or Account
var Loginform = document.getElementById("Loginform");
var Regform = document.getElementById("Regform");
var Indicator = document.getElementById("Indicator");

function register() {
  Regform.style.transform = "translateX(0px)";
  Loginform.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
};
function login() {
  Regform.style.transform = "translateX(300px)";
  Loginform.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
};

// LoginModal
var LogInModal = document.getElementById("Loginmodal");

function LoginModal(){
  LogInModal.style.display = 'none';
};
//Add to cart
addToCart();
function addToCart(){
let CartItem='<td id="dummy"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="Images/add.png" alt="Hand Bag"></div><div><p class="pdName">Add Poducts</p><small>Price: Rs <span class="pdPrice">00.00</span></small><br><a class="removeBtn" href="#" onclick="closeCart()">Remove</a></div></div></td><td id="dummy2"><input type="number" value="0" min="0"></td><td id="dummy3">Rs <span class="pdPrice" >00.00</span></td>';
let addHere = document.getElementById('AddTr');
var newRow = addHere.insertRow();
newRow.innerHTML = CartItem;
num =num+1;
};
var TotalItem =document.getElementById('NumOfItem');
var tableRow=document.getElementById('AddTr');
var Dummy=document.getElementById('dummy');
var Dummy2=document.getElementById('dummy2');
var Dummy3=document.getElementById('dummy3');

function Removepd2(){
  document.getElementById('pd2').parentElement.style.display = 'none';
  TotalItem.innerHTML =num - 1;
    num -=1;
};
function pd2(){
  let CartItem='<td id="pd2"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/6b.png" alt="Hand Bag"></div><div><p class="pdName">Daandiya Gol Hand Bag</p><small>Price: Rs <span class="pdPrice">230.00</span></small><br><span class="removeBtn" onclick="Removepd2()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">230.00</span></td>';
  let addHere = document.getElementById('AddTr');
  if(document.getElementById('pd2')){
    alert('Product Already Exists');
  }
  else{
    var newRow = addHere.insertRow();
  }
  newRow.innerHTML = CartItem;
  TotalItem.innerHTML =num + 1;
  num +=1;
  Dummy.style.display = 'none';
  Dummy2.style.display = 'none';
  Dummy3.style.display = 'none';
  };
  function Removepd3(){
    document.getElementById('pd3').parentElement.style.display = 'none';
    TotalItem.innerHTML =num - 1;
    num -=1;
  };
  function pd3(){
    let CartItem='<td id="pd3"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/14b.png" alt="Hand Bag"></div><div><p class="pdName">Cream Long Hand Bag</p><small>Price: Rs <span class="pdPrice">230.00</span></small><br><span class="removeBtn" onclick="Removepd3()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">230.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pd3')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function Removepd4(){
      document.getElementById('pd4').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function pd4(){
    let CartItem='<td id="pd4"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/7c.png" alt="Hand Bag"></div><div><p class="pdName">Cream Long Hand Bag</p><small>Price: Rs <span class="pdPrice">229.00</span></small><br><span class="removeBtn" onclick="Removepd4()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">229.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pd4')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function Removepd5(){
      document.getElementById('pd5').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function pd5(){
    let CartItem='<td id="pd5"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/8b.png" alt="Hand Bag"></div><div><p class="pdName">Golden Handle Hand Bag</p><small>Price: Rs <span class="pdPrice">205.00</span></small><br><span class="removeBtn" onclick="Removepd5()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">205.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pd5')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function Removepd6(){
      document.getElementById('pd6').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function pd6(){
    let CartItem='<td id="pd6"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/16c.png" alt="Hand Bag"></div><div><p class="pdName">Golden Chain Hand Bag</p><small>Price: Rs <span class="pdPrice">198.00</span></small><br><span class="removeBtn" onclick="Removepd6()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">198.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pd6')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function Removepd7(){
      document.getElementById('pd7').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function pd7(){
    let CartItem='<td id="pd7"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/19a.png" alt="Hand Bag"></div><div><p class="pdName">Mayur Hand Bag</p><small>Price: Rs <span class="pdPrice">179.00</span></small><br><span class="removeBtn" onclick="Removepd7()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">179.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pd7')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function Removepd8(){
      document.getElementById('pd8').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function pd8(){
    let CartItem='<td id="pd8"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/18a.png" alt="Hand Bag"></div><div><p class="pdName">Mayur Hand Bag</p><small>Price: Rs <span class="pdPrice">215.00</span></small><br><span class="removeBtn" onclick="Removepd8()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">215.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pd8')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function Removepd9(){
      document.getElementById('pd9').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function pd9(){
    let CartItem='<td id="pd9"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/23a.png" alt="Hand Bag"></div><div><p class="pdName">Billi Handle Hand Bag</p><small>Price: Rs <span class="pdPrice">229.00</span></small><br><span class="removeBtn" onclick="Removepd9()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">229.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pd9')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function Removepd10(){
      document.getElementById('pd10').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function pd10(){
    let CartItem='<td id="pd10"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/26a.png" alt="Hand Bag"></div><div><p class="pdName">Churi Handle Hand Purse</p><small>Price: Rs <span class="pdPrice">219.00</span></small><br><span class="removeBtn" onclick="Removepd10()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">219.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pd10')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function Removepd11(){
      document.getElementById('pd11').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function pd11(){
    let CartItem='<td id="pd11"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/10b.png" alt="Hand Bag"></div><div><p class="pdName">Kachra Dori Hand Bag</p><small>Price: Rs <span class="pdPrice">236.00</span></small><br><span class="removeBtn" onclick="Removepd11()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">236.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pd11')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function RemoveuniquePurse(){
      document.getElementById('pdUP').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function uniquePurse(){
    let CartItem='<td id="pdUP"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/24a.png" alt="Hand Bag"></div><div><p class="pdName">Shopper Golden Chain Hand Bag</p><small>Price: Rs <span class="pdPrice">230.00</span></small><br><span class="removeBtn" onclick="RemovepduniquePurse()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">230.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pdUP')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function RemovePd(){
      document.getElementById('pdPd').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function productdetail(){
    let CartItem='<td id="pdPd"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/17a.png" alt="Hand Bag"></div><div><p class="pdName">Blue Mayur Hand Bag</p><small>Price: Rs <span class="pdPrice">220.00</span></small><br><span class="removeBtn" onclick="RemovePd()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">220.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pdPd')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };
    function RemovePd1(){
      document.getElementById('pdPd1').parentElement.style.display = 'none';
      TotalItem.innerHTML =num - 1;
    num -=1;
    };
  function productdetail1(){
    let CartItem='<td id="pdPd1"><div class="cart-info"><div class="cartimg"><img class="pdImg" src="PurseCity/21b.png" alt="Hand Bag"></div><div><p class="pdName">Blue Haathi Hand Bag</p><small>Price: Rs <span class="pdPrice">190.00</span></small><br><span class="removeBtn" onclick="RemovePd1()">Remove</span></div></div></td><td><input type="number" value="1" min="1"></td><td>Rs <span class="pdPrice">190.00</span></td>';
    let addHere = document.getElementById('AddTr');
    if(document.getElementById('pdPd1')){
      alert('Product Already Exists');
    }
    else{
      var newRow = addHere.insertRow();
    }
    newRow.innerHTML = CartItem;
    TotalItem.innerHTML =num + 1;
    num +=1;
    Dummy.style.display = 'none';
    Dummy2.style.display = 'none';
    Dummy3.style.display = 'none';
    };

//Popup Cart
function popUpCart(){
  let PopCart= '<div id="CartModal" class="CartModal"><span class="spanClose" onclick="closeCart()">&times;</span><div class="cart-page"><table id="AddTr"><tr ><th>Product</th><th>Quantity</th><th>Subtotal</th></tr></table><div class="total-price"><table><tr><td><span class="btn" >Check Out</span></td></tr></table> </div></div></div>';

  let popDiv = document.createElement("div");
  popDiv.innerHTML=PopCart;
  document.body.insertBefore(popDiv,document.body.firstChild)
};
//Close Cart
function closeCart(){
  document.getElementById('CartModal').style.display = 'none';
};
function openCart(){
  document.getElementById('CartModal').style.display = 'block';
};

var num=0;

//scrolls button
let mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
// scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
})
};
// Product Detail
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("Small-Img");

(SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
}),
  (SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
  }),
  (SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
  }),
  (SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
  });
 

