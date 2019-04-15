export function blocperfdelete(domELT) {
  const inputDelete = domELT.querySelector(".delete--input");
  inputDelete.addEventListener("click", function(e) {
    e.preventDefault()
    domELT.style.display = "none"
  })
}