// a-list
onload = () => {

  let list = document.querySelector(".landing-section header .a-list")
  let ul = document.querySelector(".landing-section header ul")

  list.addEventListener("click", () => {
    ul.classList.toggle("disappear")
  })
  addEventListener("click", (e) => {
    if (e.target != list && e.target != ul) {
      ul.classList.add("disappear")
    }
  })
}

// landing background 
let land = document.querySelector(".landing-section ")
let landOn = true
let landI = 2;
setInterval(() => {
  if (landOn) {
    land.style.backgroundImage = `url("media/0${landI}.jpg")`
    landI = landI%5 +1
  }
}, 10000)

// bubbles
let li = [... document.querySelectorAll(".landing-section header li a")] 

let bubbles =document.getElementsByClassName("bubbles")[0]

li.forEach(e=>{
  // console.log(e.getAttribute("href").slice(1))
  let a=document.createElement("a")
  a.setAttribute("href",e.getAttribute("href"))
  a.setAttribute("sec",e.getAttribute("href").slice(1))
  bubbles.append(a)
})



// setting 

let setting =document.querySelector(".setting .i")

setting.addEventListener("click",()=>{
  setting.parentElement.classList.toggle("seen")
})

// color

let color =[...document.querySelectorAll(".setting .buttons span")]

color.forEach(e=>{
  e.addEventListener("click",()=>{
    document.body.dataset.mode=e.dataset.color
  })
})


// background
let bakOn = document.getElementsByClassName("bak-yes")[0]
let bakOff = document.getElementsByClassName("bak-no")[0]

bakOn.addEventListener("click",()=>{
  landOn =true
  bakOn.classList.add(true)
  bakOff.classList.remove(true)
})
bakOff.addEventListener("click",()=>{
  landOn =false
  bakOff.classList.add(true)
  bakOn.classList.remove(true)
})
let bubbOn = document.getElementsByClassName("bubb-yes")[0]
let bubbOff = document.getElementsByClassName("bubb-no")[0]

bubbOn.addEventListener("click",()=>{
  bubbles.style.display = "flex"
  bubbOn.classList.add(true)
  bubbOff.classList.remove(true)
})
bubbOff.addEventListener("click",()=>{
  bubbles.style.display = "none"
  bubbOff.classList.add(true)
  bubbOn.classList.remove(true)
})

// skills

let skills = document.getElementById("skills");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset >
    skills.offsetTop + skills.offsetHeight - window.innerHeight
  ) {
    let bars = document.querySelectorAll("#skills .bar span");
    bars.forEach((e) => {
      e.style.width = e.dataset.progress;
    });
  }
});




