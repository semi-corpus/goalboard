export function blocdotssubmitted (domELT){
        // Target : Div du Bouton GO
        const formDivInput = domELT.querySelector(".submit--div");
        // Disparition du bouton GO
        formDivInput.style.display = "none";
        // Apparition du bouton Delete
        domELT.insertAdjacentHTML("beforeend",`<div class="delete--input"></div>`);
        // Stop From Editing
        domELT.querySelector(`.input--name`).readOnly = true;
        domELT.querySelector(`.input--duration`).style.display = "none";
        domELT.querySelector(`.input--duration`).insertAdjacentHTML("beforebegin",`<div class="current--position">Click + to start timer</div>`);
        // Change Border Bottom Color
        domELT.querySelector(`.input--name`).style.borderBottom = `1px solid #faffff`;
        domELT.querySelector(`.input--duration`).style.borderBottom = `1px solid #faffff`;
}