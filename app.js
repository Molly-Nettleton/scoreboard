let yourScore = 0
let theirScore = 0

let yourscore_div = document.getElementById('yourScore')
let theirscore_div = document.getElementById('theirScore')


function increasehome1() {
  // @ts-ignore
  yourscore_div.innerText = yourScore;
  yourScore++
}

function increasehome2() {
  // @ts-ignore
  yourscore_div.innerText = yourScore;
  yourScore+= 2
}

function increaseaway1() {
  // @ts-ignore
  theirscore_div.innerText = theirScore;
  theirScore++
  
}

function increaseaway2() {
  // @ts-ignore
  theirscore_div.innerText = theirScore;
  theirScore+=2
}

function resetAll() {
 yourScore = 0
  theirScore = 0
  drawYourScore()
  drawTheirScore()
}

function drawYourScore() {
  // @ts-ignore
document.getElementById('yourScore').innerHTML=`<div> ${yourScore} </div>`
}

function drawTheirScore() {
  // @ts-ignore
document.getElementById('theirScore').innerHTML=`<div> ${theirScore} </div>`

}

// function drawCheese() {
  
//   if (!cheese.soldOut) {
//     // ! means NOT. aka false.

//   // innertext vs innerhtml is text with no styling. innerHTML utilizes..HTML code!

//     document.getElementById('gouda').innerHTML = `
//   <div>
//   ${cheese.name} - The Price of cheese..
//   <b class="text-danger"> $${(cheese.price * 1.06).toFixed(2)} </b>
//   </div>
//   `
//   }
//   else {document.getElementById('gouda').innerHTML = `<div class="alert alert-danger">Da Gouda Is Gone</div>`}
// }


// function inflation() {
//   cheese.price++
//   drawCheese()


// when you have a list this variable has an S on it. PLURAL.
// let groceries = [
//   'bananas🍌',
//   'alchohol🍸',
//   'monkey bread🐒🍞',
//   'cheese 🧀' ]


// let cheese = {
//   name: 'gouda',
//   proof: 40,
//   price: 10.05,
//   soldOut: false
//   }
