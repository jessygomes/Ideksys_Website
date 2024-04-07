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
      <div className="mt-[1rem] lg:mt-[2rem]">
        <Services />
      </div>
    </div>
  );
}
