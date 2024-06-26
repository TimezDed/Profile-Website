const rectitle = ["Magi", "Blue Period", "OMORI (trigger warning)", "Serenade"];

const recdesc = ["It's a story inspired by One Thousand and One Nights, a collection of Middle Eastern folktales, following two protagonists Alibaba and Aladdin.",
"A story about an artist's journey; how one's experience can change their perspective and ambitions.",
"You've been here as long as you can remember. Stuck in a white space with nothing but you and your belongings and your cat. There's nothing much to do here... Do you want to go outside?",
"A song by the KPOP group \"BOYNEXTDOOR\"; OO-E-OO-E-OO-E-OO my first serenade~ Oh why! I don't know, swear you'll like it!"];

const recimg = ["assets/images/magi2.png", "assets/images/blue_period.png", "assets/images/omori.png", "assets/images/serenade.png"];

const id = ["magi", "blueperiod", "omori", "serenade"];

let keepTrack = "magi";

function changeText(num) {
  document.getElementById("chgtitle").innerHTML = rectitle[num];
  document.getElementById("chgtext").innerHTML = recdesc[num];

  const img = document.getElementById("chgimg");
  img.src = recimg[num];

  if(id[num] != keepTrack) {
    document.getElementById(keepTrack).style.background = "rgb(233, 63, 67)";
    keepTrack = id[num];
    document.getElementById(keepTrack).style.background = "#2b6a72";
  }  
}

var isOld = true;

function changeTime() {
  const time = document.getElementById("oldtonew");
  const chg = document.getElementById("posts");
  if(isOld) {
    chg.style.flexDirection = "column-reverse"
    time.innerHTML = "Newest to Oldest";
    isOld = false;
  }else {
    chg.style.flexDirection = "column";
    time.innerHTML = "Oldest to Newest";
    isOld = true;
  }
}

// alert("Hello World");

// var, let, const
// var is global scope
// let & const have a block-level scope (better)
// let can reassign values
// const can't be changed
// always use const unless you know you are going to reassign it

// String, Numbers, Boolean, null, undefined, Symbol

let num = 1;

while(num <= 100) {
  if(num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  }else if(num % 3 == 0) {
    console.log("Fizz");
  }else if(num % 5 == 0) {
    console.log("Buzz");
  }else {
    console.log(num);
  }

  num++;
}

// Exercise: print to the browser console the numbers 1-100, but if a number is 
// divisible by 3 print "Fizz",
// divisible by 5 print "Buzz"
// divisible by both 3 and 5, print "FizzBuzz"