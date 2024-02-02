import Heading from "../heading";
import Image from "next/image";
import FastIcon from "../../../public/fast_end_furious.svg"
import QualityIcon from "../../../public/quality_over_quantity.svg"
import SupportIcon from "../../../public/support_icon.svg"


export default function Features() {

  const primaryHeadingStyle = "text-base font-semibold text-white";
  const primaryTextStyle = "text-base text-[#C1C1C1]";
  const boxWrapper = "flex flex-col space-y-1 items-center";



  return (
    <>
      <section className="h-100 w-[60%] mx-auto">
        <Heading spanText={"Welcome to PageMagic"} heading={<><span>We turn magic into </span><br /><span> beautiful websites.</span></>} style={"flex m-auto h-[100%] text-center"} spanStyle={"text-xl"} headingStyle={"text-5xl font-medium"} />

        <article className="flex flex-row justify-between h-100 items-center text-center mt-10 py-10">
          <div className={boxWrapper}>
            <Image src={FastIcon} alt="fast-and-furious-icon" width={100}></Image>
            <h3 className={primaryHeadingStyle}>Fast and Furious</h3>
            <p className={primaryTextStyle}>We deliver ASAP, while<br />
              not compromising on quality</p>
          </div>
          <div className={boxWrapper}>
            <Image src={QualityIcon} alt="quality-service-icon" width={100}></Image>
            <h3 className={primaryHeadingStyle}>Quality over Quantity</h3>
            <p className={primaryTextStyle}>We believe that magic should be <br />
              limited edition</p>
          </div>
          <div className={boxWrapper}>
            <Image src={SupportIcon} alt="superb-support-icon" width={100}></Image>
            <h3 className={primaryHeadingStyle}>Superb support</h3>
            <p className={primaryTextStyle}>We’ll hold your hand during <br />
              the whole process.</p>
          </div>
        </article>
      </section>
    </>
  );
}
