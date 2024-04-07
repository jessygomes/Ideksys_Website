import ImageHome from "./ImageHome";
import Expertises from "./Expertises";
import Services from "./Services";

export default function Homepage() {
  return (
    <div>
      <ImageHome />
      <div className="">
        <Expertises />
      </div>
      <div className="mt-[0.5rem] lg:mt-[1rem]">
        <Services />
      </div>
    </div>
  );
}
