// const s1h = document.querySelector("#s1")

// function collapseClick(e) {
//   e.target.classList.toggle("bodyCollapse")
//   // e.target.classList.toggle("bodyExpand")
// }

// s1.addEventListener("click", collapseClick)

// document.querySelector("#container").addEventListener("click", function (e) {
//   const isBar = e.target.className.includes("bar")

//   // if i click on bar, expand 1, collapse 2, and 3
//   if (isBar) {
//     const selection = "#" + e.target.id + "-b"
//     document.querySelector(selection).classList.toggle("bodyCollapse")
//   } else {
//   }
// })

// document.querySelector("#s1").addEventListener("click", function (a) {
//   if (document.querySelector("#s1").classList.includes("bodyCollapse"))
//     document.querySelector("#s1").classList.add("bodyExpand")
//   document.querySelector(a).classList.remove("bodyCollapse")
// })

// document.querySelector("#s1").addEventListener("click", function (a) {
//   console.log(a)
// })

function showTextOne() {
  document.querySelector("#s1-b").classList.toggle("bodyExpand")
  document.querySelector("#s2-b").classList.remove("bodyExpand")
  document.querySelector("#s3-b").classList.remove("bodyExpand")
}

function showTextTwo() {
  document.querySelector("#s2-b").classList.toggle("bodyExpand")
  document.querySelector("#s1-b").classList.remove("bodyExpand")
  document.querySelector("#s3-b").classList.remove("bodyExpand")
}

function showTextThree() {
  document.querySelector("#s3-b").classList.toggle("bodyExpand")
  document.querySelector("#s1-b").classList.remove("bodyExpand")
  document.querySelector("#s2-b").classList.remove("bodyExpand")
}
