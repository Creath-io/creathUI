import { Routes, Route } from "react-router-dom";

import {
  AdeGoriOkun,
  ASentimentalCyborg,
  AugustVisitor,
  Burnout,
  CrudeRule,
  DailyBread,
  DeadBonesShallRiseAgain,
  DeadPlusSearedMind,
  DisastrousThoughts,
  DyingTender,
  EGoBetter,
  Estelle,
  GasFee,
  JagaJaga,
  JusticeIsComing,
  NakedWeapon,
  OurHorror,
  Ozymandias,
  ParentsInheritance,
  PuppetryI,
  PuppetryIII,
  ShortStory,
  TheHoldI,
  TheHoldII,
  TheHoldIII,
  TheOriginalGangster,
  TogetherAtDusk,
  UpThere,
  WakingTheSleepingGiant,
} from "./productComponents";

export default function PagesRoutes() {
  return (
    <Route>
      <Route
        path="/marketplace/asentimentalcyborg"
        element={<ASentimentalCyborg />}
      />
      <Route path="/marketplace/augustvisitor" element={<AugustVisitor />} />
      <Route path="/marketplace/burnout" element={<Burnout />} />
      <Route path="/marketplace/cruderule" element={<CrudeRule />} />
      <Route path="/marketplace/dailybread" element={<DailyBread />} />
      <Route
        path="/marketplace/deadbonesshallriseagain"
        element={<DeadBonesShallRiseAgain />}
      />
      <Route
        path="/marketplace/deadplussearedmind"
        element={<DeadPlusSearedMind />}
      />
      <Route
        path="/marketplace/disastrousthoughts"
        element={<DisastrousThoughts />}
      />
      <Route path="/marketplace/dyingtender" element={<DyingTender />} />
      <Route path="/marketplace/egobetter" element={<EGoBetter />} />
      <Route path="/marketplace/estelle" element={<Estelle />} />
      <Route path="/marketplace/gasfee" element={<GasFee />} />
      <Route path="/marketplace/jagajaga" element={<JagaJaga />} />
      <Route
        path="/marketplace/justiceiscoming"
        element={<JusticeIsComing />}
      />
      <Route path="/marketplace/nakedweapon" element={<NakedWeapon />} />
      <Route path="/marketplace/ourhorror" element={<OurHorror />} />
      <Route path="/marketplace/ozymandias" element={<Ozymandias />} />
      <Route
        path="/marketplace/parensinheritance"
        element={<ParentsInheritance />}
      />
      <Route path="/marketplace/puppetryi" element={<PuppetryI />} />
      <Route path="/marketplace/puppetryiii" element={<PuppetryIII />} />
      <Route path="/marketplace/shortstory" element={<ShortStory />} />
      <Route path="/marketplace/theholdi" element={<TheHoldI />} />
      <Route path="/marketplace/theholdii" element={<TheHoldII />} />
      <Route path="/marketplace/theholdiii" element={<TheHoldIII />} />
      <Route
        path="/marketplace/theoriginalgangster"
        element={<TheOriginalGangster />}
      />
      <Route path="/marketplace/togetheratdusk" element={<TogetherAtDusk />} />
      <Route path="/marketplace/upthere" element={<UpThere />} />
      <Route
        path="/marketplace/wakingthesleepinggiant"
        element={<WakingTheSleepingGiant />}
      />
    </Route>
  );
}
