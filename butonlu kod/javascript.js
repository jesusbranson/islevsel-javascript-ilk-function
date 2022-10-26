//class ekleme
const div=document.getElementById("add");
div.classList.add("fancy","add","addMetod");
//add
const add = document.getElementById("add")
const buton3 = document.getElementById("buton3");
buton3.addEventListener("click",function(){add.classList.add("add1")})
//remove
const buton2 = document.getElementById("buton2")
const yazı = document.getElementById("pRemove");
buton2.addEventListener("click",function(){yazı.classList.remove("colorp")})
//ıtem


//replace
const buton4 = document.getElementById("buton4")
const replace31 = document.getElementById("replace31")

buton4.addEventListener("click",function(){replace31.classList.replace( "peplace2","peplace3")})


//ıtem
const buton6 = document.getElementById("buton5")

buton6.addEventListener("click",function(){alert('selam')})

//contains
const contaın = document.getElementById("contaın")

contaın.addEventListener("click",function(){alert(Boolean("pContainsTrue"))});

const contaın1 = document.getElementById("contaın1")

contaın1.addEventListener("click",function(){alert(Boolean(1<0))})


























//toggle
const pToggle = document.getElementById("pToggle")
const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click",function(){pToggle.classList.toggle("colorp");
})

document.getElementById("length").innerHTML="Class names length:"+" "+div.classList.length;


