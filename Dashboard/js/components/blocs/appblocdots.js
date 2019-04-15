import { blocdotssubmitted } from "./blocdots/blocdotssubmitted.js";
import { blocdotsdelete } from "./blocdots/blocdotsdelete.js";
import { BlocDotsFunct } from "./blocdots/blocdotsfunct.js";
import { DateBloc } from "./date.js";
import { ThisRoot } from "./thisroot.js";

export class AppBlocDots extends ThisRoot {
  initappblocdots(domELT) {
    function event(e) {
      e.preventDefault();
      let blocdotsfunct = new BlocDotsFunct(e.target)
      blocdotsfunct.initblocdotsfunct(e.target)
      let date = new DateBloc(e.target)
      date.initdate(e.target)
      blocdotssubmitted(e.target)
      blocdotsdelete(e.target) // pourquoi c'est là si c'est le store ? La suppression venant après
    }
    domELT.addEventListener('submit', event)
  }
}
