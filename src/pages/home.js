import { Landing } from "../sections/Landing";
import { Featured } from "../sections/Featured";
import { Testimonials } from "../sections/Testimonials";
import { Premium } from "../sections/Premium";
import { Footer } from "../sections/Footer";
import { Product } from "../sections/Product";
import { FAQ } from "../sections/FAQ";
import { ExtensionAvailability } from "../constants";

export default function Home() {
  // let currDownloadLink =
  //   ExtensionAvailability[browserName.toLowerCase()]["url"];

  let currDownloadLink = ExtensionAvailability["chrome"]["url"];

  return (
    <>
      <Landing
        currDownloadLink={currDownloadLink}
        ExtensionAvailability={ExtensionAvailability}
      />
      <Featured />
      <Product />
      <Testimonials />
      <FAQ />
      <Premium />
      <Footer currDownloadLink={currDownloadLink} withDLSection={true} />
    </>
  );
}
