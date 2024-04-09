import ImageHome from "./ImageHome";
import Expertises from "./Expertises";
import Services from "./Services";
import SavoirFaire from "./SavoirFaire";
import { TestCard } from "./TestCard";
import Articles from "./Articles";

export default function Homepage() {
  return (
    <div>
      <ImageHome />
      <div className="">
        <TestCard />
      </div>
      <div className="mt-[0.5rem] lg:mt-[1rem]">
        <Services />
      </div>
      <div className="mt-[3rem] lg:mt-[3rem]">
        <SavoirFaire />
      </div>
      <div className="mt-[3rem] lg:mt-[3rem]">
        <Articles />
      </div>
    </div>
  );
}
