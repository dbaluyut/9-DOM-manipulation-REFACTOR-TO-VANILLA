const s1h = document.querySelector("#s1h")

function collapseClick(e) {
  // e.target.classList.toggle("")
  e.target.classList.add("bodyCollapse")
}

s1h.addEventListener("click", collapseClick)
