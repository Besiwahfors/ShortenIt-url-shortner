import Hero from "../components/homepage-components/Hero";
import LinkManagement from "../components/homepage-components/LinkManagement";
import Process from "../components/homepage-components/Process";
import Statistics from "../components/homepage-components/Statistics";



export default function Home(){
  return(
    <div>
      <Hero/>
      <Statistics/>
      <Process/>
      <LinkManagement />
    </div>
  )
}