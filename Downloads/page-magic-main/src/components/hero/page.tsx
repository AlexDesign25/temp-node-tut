import Button from "../button";
import Heading from "../heading";
import Image from "next/image";
import Laptop from "../../../public/Laptop.png"


export default function Hero() {
   return (
      <>
         <section className="flex mt-[5%] flex-col  items-center justify-start">
            <Heading spanText={"Webflow & WordPress"} heading={<><span>Delivering Professional Web <br/>Solutions with Precision</span></>} style={"flex m-auto h-[100%] text-center"} spanStyle={""} headingStyle={""} />
            <Button primaryText={"Let’s talk"} secondaryText={"Services"} primaryStyle={"text-white"} secondaryStyle={"shadow-none"} />
            <Image src={Laptop} alt=""></Image>
         </section>
      </>
   )
}