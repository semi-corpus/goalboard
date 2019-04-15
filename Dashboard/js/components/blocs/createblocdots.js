import { blocdotsnuminput } from "./blocdots/blocdotsnuminput.js"

export class CreateBlocDots {
    // Ajouter le bloc
    initblocdots() {
        let dotsBlocID = 0;
        // Target Container
        const container = document.querySelector(".block-container");
        dotsBlocID = dotsBlocID + 1;
        // Create new block : JS
        const addedDotsBloc = document.createElement("form");
        addedDotsBloc.classList.add("block-added-td");
        addedDotsBloc.id = "td" + dotsBlocID;
        // Create new block : HTML
        container.appendChild(addedDotsBloc);
        addedDotsBloc.innerHTML = `
        <input type="text" maxlength="25" class="input--name" placeholder="Name your new block" required>
        <input type="number" maxlength="2" value="" min="0" max="30" class="input--duration" placeholder="Duration" required>
        <div class="submit--div"><input type="submit" value="GO" class="submit--input"></div>
        `;
        blocdotsnuminput();
    }
}  