import Header from "./components/header";
import Hero from "./components/section/hero";
import Usps from "./components/section/usp";
import VideoCarousel from "./components/section/videoCarousel";

export default function Home() {
  return (
    <>
    <Header />
       <main>
         <div className="bg-background relative z-10"  >
           <Hero/>
           <Usps />
         </div>
         <VideoCarousel/>
       </main>
    </>
  );
}
