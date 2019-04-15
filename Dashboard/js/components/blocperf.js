import { CreateBlocPerf } from "./blocs/createblocperf.js";
import { AppBlocPerf } from "./blocs/appblocperf.js";

let addblocbtn = document.querySelector("#add--block__btn");

export class BlocPerf {

    initblocperf() {

        addblocbtn.addEventListener("click", function (e) {

            e.preventDefault();
            let createblocperf = new CreateBlocPerf();
            createblocperf.initblocperf();
            
            const domELT = document.querySelector(".block-added-pf:last-child");
            let appblocperf = new AppBlocPerf(domELT);
            appblocperf.initappblocperf(domELT);
        });
    }
}