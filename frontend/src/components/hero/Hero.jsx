import AnimatedBackground from "../ui/AnimatedBackground";
import Container from "../ui/Container";

import HeroContent from "./HeroContent";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {

  return (

<section className="relative overflow-hidden bg-[#030712] pt-44 pb-24">

<AnimatedBackground/>

<Container>

<div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">

<HeroContent/>

<DashboardPreview/>

</div>

</Container>

<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent"/>

</section>

  );

}