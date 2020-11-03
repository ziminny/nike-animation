// movement animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title")
const sneaker = document.querySelector(".sneaker img")
const purchase = document.querySelector(".purchase button")
const description = document.querySelector(".info h3")
const sizes = document.querySelector(".sizes")

// Moving Animation Event
container.addEventListener("mousemove", function(e){
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    console.log(xAxis ,yAxis)

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// Animate in
container.addEventListener("mouseenter", function(e){
  card.style.transition = 'none';
  title.style.transform = "translateZ(125px)"
  description.style.transform = "translateZ(100px)"
  sizes.style.transform = "translateZ(75px)"
  sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)"

})

// Animate out
container.addEventListener("mouseleave", function(e){
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0)"
  sneaker.style.transform = "translateZ(0)"
  description.style.transform = "translateZ(0)"

  
})