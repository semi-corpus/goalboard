import { ThisRoot } from "../thisroot.js"

export class BlocDotsFunct extends ThisRoot {

    initblocdotsfunct(domELT) {

        let data = {
            inputname: this.root[0].value,
            inputduration: this.root[1].value
        };

        let duration = data.inputduration;

        // Création de la div des puces
        function creationdots(domELT) {
            domELT.querySelector(".input--name").insertAdjacentHTML("afterend", `<div class="dot-list"><ul></ul></div>`);

            for (let i = 0; i < duration; i++) {
                domELT.querySelector(".dot-list ul").insertAdjacentHTML("beforeend", `<li>●</li>`);
            }
            domELT.insertAdjacentHTML("beforeend", `<div class="input--incredots">+</div>`);
        }
        creationdots(domELT);

        // Remplissage de la div des puces
        function incredots(domELT) {
            
            let position = 0;

            domELT.querySelector(".input--incredots").addEventListener('click', function () {
                let ii = 0;
                let lastDot = domELT.querySelector(".dot-list ul li:last-child");
                if (ii <= duration) {
                    domELT.querySelector(".dot-list ul").removeChild(lastDot);
                    domELT.querySelector(".dot-list ul").insertAdjacentHTML("afterbegin", `<li class="highlight">●</li>`);
                }
                if (position < duration) {
                    position++;
                }
                domELT.querySelector(".current--position").innerHTML = position + '/' + duration;
            });
        }
        incredots(domELT);
    }
}