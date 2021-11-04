var plusBtn = document.getElementsByClassName("button-plus");
var minusBtn = document.getElementsByClassName("button-moins");
var quantity = document.getElementsByClassName("quantity");
plusBtn[0].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[0].innerHTML
  );
  document.getElementsByClassName("quantity")[0].innerHTML = quantity + 1;
  const prix0 = document.getElementsByClassName("prix")[0].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) + Number(prix0);
});

minusBtn[0].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[0].innerHTML
  );
  if (+document.getElementsByClassName("quantity")[0].innerHTML > 0) {
    document.getElementsByClassName("quantity")[0].innerHTML = quantity - 1;
    const prix0 = document.getElementsByClassName("prix")[0].innerHTML;
    const total = document.getElementById("toot");
    total.innerHTML = Number(total.innerHTML) - Number(prix0);
  } else {
    alert("pay attention");
  }
});

plusBtn[1].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[1].innerHTML
  );
  document.getElementsByClassName("quantity")[1].innerHTML = quantity + 1;
  const prix1 = document.getElementsByClassName("prix")[1].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) + Number(prix1);
});
minusBtn[1].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[1].innerHTML
  );
  if (+document.getElementsByClassName("quantity")[1].innerHTML > 0) {
    document.getElementsByClassName("quantity")[1].innerHTML = quantity - 1;
    const prix1 = document.getElementsByClassName("prix")[1].innerHTML;
    const total = document.getElementById("toot");
    total.innerHTML = Number(total.innerHTML) - Number(prix1);
  } else {
    alert("pay attention");
  }
});

plusBtn[2].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[2].innerHTML
  );
  document.getElementsByClassName("quantity")[2].innerHTML = quantity + 1;
  const prix2 = document.getElementsByClassName("prix")[2].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) + Number(prix2);
});

minusBtn[2].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[2].innerHTML
  );
  if (+document.getElementsByClassName("quantity")[2].innerHTML > 0) {
    document.getElementsByClassName("quantity")[2].innerHTML = quantity - 1;
    const prix2 = document.getElementsByClassName("prix")[2].innerHTML;
    const total = document.getElementById("toot");
    total.innerHTML = Number(total.innerHTML) - Number(prix2);
  } else {
  }

});

plusBtn[3].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[3].innerHTML
  );
  document.getElementsByClassName("quantity")[3].innerHTML = quantity + 1;
  const prix3 = document.getElementsByClassName("prix")[3].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) + Number(prix3);
});

minusBtn[3].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[3].innerHTML
  );
  if (+document.getElementsByClassName("quantity")[3].innerHTML > 0) {
    document.getElementsByClassName("quantity")[3].innerHTML = quantity - 1;
    const prix3 = document.getElementsByClassName("prix")[3].innerHTML;
    const total = document.getElementById("toot");
    total.innerHTML = Number(total.innerHTML) - Number(prix3);
  } else {
    alert("pay attention");
  }
});
//* button remove   */

function myFunction0() {
  var myobj = document.getElementById("rev0");
  myobj.remove();
}

function myFunction1() {
  var myobj = document.getElementById("rev1");
  myobj.remove();
}

function myFunction2() {
  var myobj = document.getElementById("rev2");
  myobj.remove();
}

function myFunction3() {
  var myobj = document.getElementById("rev3");
  myobj.remove();
}
//* like iteme    */

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

// * total */
