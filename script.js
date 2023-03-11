function replace() {
  var a = document.getElementById("input").value;
  var b = a.trim();
  var c = b.replace(/i/g, "I");
  document.getElementById("output").innerHTML = c;
}

function replace1() {
  var d = document.getElementById("input1").value;
  var e = d.trim();
  var f = e.toUpperCase();
  document.getElementById("output1").innerHTML = f;
}

function replace2() {
  var g = document.getElementById("input2").value;
  var h = g.trim();
  var i = h.toLowerCase();
  document.getElementById("output2").innerHTML = i;
}

// let text= "I love cats.Cats are very easy to love. Cats are very popular.";

// text = text.replaceAll(/Cats/g,"Dogs")
// text = text.replaceAll(/cats/g,"dogs")
// ------------------------------------------------------
// let text8 = "        hello  world               hello  world        "
// let text9 = text8.trim();

// console.log(text9)
