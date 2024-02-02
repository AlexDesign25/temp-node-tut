import Image from "next/image"
import clientLogo1 from "../../../public/ariseHealthLogo.svg"
import clientLogo3 from "../../../public/2020incLogo.svg"
import clientLogo2 from "../../../public/paakLogo.svg"
import clientLogo4 from "../../../public/pipelinxLogo.svg"
import clientLogo5 from "../../../public/toogetherLogo.svg"
import clientLogo6 from "../../../public/ariseHealthLogo.svg"
export default function ClientLogos() {
   return (
      <>
         <section className="space-y-3 py-[100px]">
            <h4 className="text-[#71767D] text-sm text-center">TRUSTED BY BIG ONES, LOVED BY EVERYONE</h4>
            <article className="flex flex-row items-center justify-between w-[70%] mx-auto">
               <Image src={clientLogo1} alt="client-logo"></Image>
               <Image src={clientLogo2} alt="client-logo"></Image>
               <Image src={clientLogo3} alt="client-logo"></Image>
               <Image src={clientLogo4} alt="client-logo"></Image>
               <Image src={clientLogo5} alt="client-logo"></Image>
               <Image src={clientLogo6} alt="client-logo"></Image>
            </article>
         </section>
      </>
   )
}