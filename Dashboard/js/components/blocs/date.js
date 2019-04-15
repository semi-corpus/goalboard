import { ThisRoot } from "./thisroot.js";

export class DateBloc extends ThisRoot {
        
        initdate(domELT) {
                function initsubmitdate() {
                        var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1;
                        var yyyy = today.getFullYear();

                        if (dd < 10) dd = "0" + dd;
                        if (mm < 10) mm = "0" + mm;
                        return dd + "/" + mm + "/" + yyyy;
                }
                function initdatestyle(domELT) {
                        domELT.querySelector(`.input--name`).insertAdjacentHTML("beforebegin", '<div class="block--added__date"></div>');
                        domELT.querySelector(`.block--added__date`).innerHTML = initsubmitdate();

                }
                initdatestyle(domELT)
        }
}
