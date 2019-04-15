import { blocperfsubmitted } from "./blocperf/blocperfsubmitted.js"
import { blocperfdelete } from "./blocperf/blocperfdelete.js"
import { BlocPerfFunct } from "./blocperf/blocperffunct.js"
import { DateBloc } from "./date.js"
import { ThisRoot } from "./thisroot.js"

export class AppBlocPerf extends ThisRoot {
    initappblocperf(domELT) {
        function event(e) {
            e.preventDefault();
            let perfFunct = new BlocPerfFunct(e.target)
            perfFunct.initperffunct(e.target)
            blocperfsubmitted(e.target)
            let date = new DateBloc(e.target)
            date.initdate(e.target)
            blocperfdelete(e.target)
        }
        domELT.addEventListener('submit', event)
    }
}