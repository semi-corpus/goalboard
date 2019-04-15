export function blocperfsubmitted(domELT){
    // Target : Div du Bouton GO
    const formDivInput = domELT.querySelector(".submit--div");
    // Disparition du bouton GO
    formDivInput.style.display = "none";
    // Apparition du bouton Delete
    domELT.insertAdjacentHTML("beforeend",`<div class="delete--div"><div class="delete--input"></div></div>`);
    // Stop From Editing
    domELT.querySelector(`.input--name`).readOnly = true;
    domELT.querySelector(`.input--value__goal`).readOnly = true;
    // Change Border Bottom Color
    domELT.querySelector(`.input--name`).style.borderBottom = `1px solid #faffff`;
    domELT.querySelector(`.input--value__goal`).style.borderBottom = `1px solid #faffff`;
}