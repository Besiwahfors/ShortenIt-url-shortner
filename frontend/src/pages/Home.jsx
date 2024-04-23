import Hero from "../components/homepage-components/Hero";
import LinkManagement from "../components/homepage-components/LinkManagement";
import Process from "../components/homepage-components/Process";
import Statistics from "../components/homepage-components/Statistics";
import Pricing from "../components/homepage-components/Pricing"



export default function Home(){
  return(
    <div>
      <Hero/>
     
      <Process/>
      <LinkManagement />
      <Statistics/>
      <Pricing/>
    </div>
  )
}