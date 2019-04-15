import { ThisRoot } from "../thisroot.js";

export class BlocPerfFunct extends ThisRoot {
        initperffunct(domELT) {
                let data = {
                        inputgoal: this.root[1].value,
                        inputcurr: this.root[2].value,
                        inputname: this.root[0].value,
                    }
                // Calcul
                function percent() {
                        const perf = data.inputgoal;
                        const curr = data.inputcurr;
                        const result = (curr * 100) / perf;

                        return Math.round(result);
                }

                //insertion du resultat de perc
                function insertresult(domELT) {
                        domELT.querySelector(`.input--value__current`).classList.add("data--ok");
                        domELT.querySelector(`.input--value__current`).insertAdjacentHTML('beforebegin', '<small class="small">Current performance</small>');
                        domELT.querySelector(`.data--ok`).value = percent() + '%';
                        domELT.querySelector(`.data--ok`).readOnly = true;
                }
                insertresult(domELT);
        }
}