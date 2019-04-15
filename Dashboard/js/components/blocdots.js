import { CreateBlocDots } from "./blocs/createblocdots.js";
import { AppBlocDots } from "./blocs/appblocdots.js";

const addblocbtn = document.querySelector("#add--todoblock__btn");

export class BlocDots {

    initblocdots() {

        addblocbtn.addEventListener("click", function (e) {

            e.preventDefault()
            let createblocdots = new CreateBlocDots()
            createblocdots.initblocdots()

            const domELT = document.querySelector(".block-added-td:last-child")
            let appblocdots = new AppBlocDots(domELT)
            appblocdots.initappblocdots(domELT)
        });
    }
}