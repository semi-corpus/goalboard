import { blocperfnuminput } from "./blocperf/blocperfnuminput.js"

export class CreateBlocPerf {
    // Ajouter le bloc
    initblocperf() {
        let perfBlocID = 0;

        // Target Container
        const container = document.querySelector(".block-container");
        perfBlocID = perfBlocID + 1;
        // Create new block : JS
        const addedPerfBloc = document.createElement("form");
        addedPerfBloc.classList.add("block-added-pf");
        addedPerfBloc.id = "pf" + perfBlocID;
        // Create new block : HTML
        container.appendChild(addedPerfBloc);
        addedPerfBloc.innerHTML = `
        <input type="text" maxlength="25" class="input--name" placeholder="Name your new block" required>
        <input type="text" class="input--value__goal" placeholder="Performance Goal (must be a number)"  required>
        <input type="text" class="input--value__current" placeholder="Current Performance (must be a number)" required>
        <div class="submit--div"><input type="submit" value="GO" class="submit--input"></div>
        `;
        blocperfnuminput();
    }
}   