import Button from "../button";
import Heading from "../heading";
import OppositeContentTimeline from "../oppositeContentTimeline";

export default function ProjectTimeline() {
   return (
      <>
         <section className="flex flex-col items-center justify-center">
            <article>
               <Heading spanText={"The Process at PageMagic"} heading={"Simple, yet powerful."} style={"text-center"} spanStyle={""} headingStyle={""} />
            </article>
            <article>
               <OppositeContentTimeline />
            </article>
            <article className="mt-10">
               <Heading spanText={"That’s it. Revised and finished."} heading={"Your project is ready."} style={"text-center"} spanStyle={""} headingStyle={""} />
               <Button primaryText={"Let's talk"} secondaryText={""} primaryStyle={"mx-auto"} secondaryStyle={""}/>
            </article>
         </section>

      </>
   )
}

