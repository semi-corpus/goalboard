import { ChooseOptionBtn } from "./menuoption.js";
import { BlocDots } from "./components/blocdots.js";
import { BlocPerf } from "./components/blocperf.js";

let choosemenu = new ChooseOptionBtn();
choosemenu.initchooseoptionbtn();

let blocdots = new BlocDots ();
blocdots.initblocdots();

let blocperf = new BlocPerf();
blocperf.initblocperf();