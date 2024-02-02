import Button from "../button"
import Heading from "../heading"

export default function developmentTools() {
   const borderStyle = "border  border-[#29233F] rounded-[20px] shadow-custom"
   return (
      <>
         <section className="container h-100 py-[100px]">
            <article className="">
               <Heading spanText={"We provide quality"} style={""} spanStyle={""} headingStyle={"text-4xl"} heading={<><span>We design. We develop.  </span><br/><span>Simple as that.</span></>} />
            </article>
            <article className="flex space-x-5 my-10 text-center h-[60vh]">
               <div className="flex flex-col flex-1 space-y-5  ">
                  <div className={`${borderStyle} flex justify-center items-center h-[100%]`}><h2 className="linearTitle text-4xl font-semibold">Webflow</h2></div>
                  <div className={`${borderStyle} flex justify-center items-center h-[100%]`}><h2 className="linearTitle text-4xl font-semibold">UI/UX<br />Design</h2></div>
               </div>

               <div className="flex-1">
                  <div className={`${borderStyle}  flex justify-center items-center h-[100%]`}><h2 className="linearTitle text-4xl font-semibold">Web<br />development</h2></div>
               </div>

               <div className="flex flex-col flex-1 space-y-5">
                  <div className={`${borderStyle} flex justify-center items-center h-[100%]`}><h2 className="linearTitle text-4xl font-semibold">SEO</h2></div>
                  <div className={`${borderStyle} flex justify-center items-center h-[100%]`}><h2 className="linearTitle text-4xl font-semibold">WordPress</h2></div>
               </div>
            </article>

            <Button primaryText={"Let's talk"} secondaryText={""} primaryStyle={"mx-auto"} secondaryStyle={""}/>
         </section>
      </>
   )
}