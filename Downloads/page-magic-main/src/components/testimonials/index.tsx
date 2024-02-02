"use client"
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../button";
import Heading from "../heading";
import Image from "next/image";
import personTestimonial from "../../../public/personTestimonial.svg";
import Stars from "../stars";
// import Image from "next/image";
// import CustomLeftArrow1 from "../../../public/previousButtonIcon.svg";
// import CustomLeftArrow2 from "../../../public/nextButtonIcon.svg";



export default function Testimonials(props: any) {

   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 1,
         slidesToSlide: 1, // optional, default to 1.
         // itemWidth: 30,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1 // optional, default to 1.
      }
   };

   const baseStyle = "w-[35vw] h-[100%] p-5 ";
   const buttonBaseStyle = "buttons mt-5 block py-2 px-4 text-base shadow-none hover:shadow-xl ";


   return (
      <>

         <div className="container flex justify-between pt-[100px]">
            <Heading spanText={"Testimonials"} heading={<><span>See what they have</span><span><br /></span><span> to say</span></>} style={"text-center mx-auto"} spanStyle={""} headingStyle={""} />

         </div>
         <div className="overflow-hidden my-10">
            <Carousel className=" mx-auto w-[35vw] "
               arrows={false}
               swipeable={false}
               draggable={true}
               showDots={false}
               renderDotsOutside={true}
               responsive={responsive}
               ssr={true} // means to render carousel on server-side.
               infinite={true}
               autoPlay={props.deviceType !== "mobile" ? true : false}
               autoPlaySpeed={1000}
               keyBoardControl={true}
               customTransition="all .5"
               transitionDuration={1000}
               containerClass="carousel-container"
               removeArrowOnDeviceType={["tablet", "mobile"]}
               deviceType={props.deviceType}
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
            >
               <div className={`${baseStyle} `}>
                  <div className="border border-[#29233F] rounded-[20px] shadow-custom h-full flex justify-between flex-col p-10">
                     <Stars starsValue={5}/>
                     <p>Mirko da izvines celar ukro gace popove
                        bruda voli gemist itd itd itd sanjicak pokemon
                        <br />
                        <br />
                        Mirko da izvines celar ukro gace popove
                        bruda voli gemist itd itd itd sanjicak pokemon
                        <br />
                        <br />
                        Mirko da izvines celar ukro gace popove
                        bruda voli gemist itd itd itd sanjicak pokemon</p>
                        <div className="mt-5">
                           <Image width={70} src={personTestimonial} alt={""}></Image>
                           <h3 className="text-white font-semibold">Jane Smith2</h3>
                           <p className="text-slate-600 uppercase">Freelance Designer</p>
                        </div>
                  </div>
               </div>
               <div className={`${baseStyle} `}>
                  <div className="border border-[#29233F] rounded-[20px] shadow-custom h-full flex justify-between flex-col p-10">
                  <Stars starsValue={4} />

                     <p>Mirko da izvines celar ukro gace popove
                        bruda voli gemist itd itd itd sanjicak pokemon
                        <br />
                        <br />
                        Mirko da izvines celar ukro gace popove
                        bruda voli gemist itd itd itd sanjicak pokemon
                        <br />
                        <br />
                        Mirko da izvines celar ukro gace popove
                        bruda voli gemist itd itd itd sanjicak pokemon</p>
                        <div className="mt-5">
                           <Image width={70} src={personTestimonial} alt={""}></Image>
                           <h3 className="text-white font-semibold">Jane Smith3</h3>
                           <p className="text-slate-600 uppercase">Freelance Designer</p>
                        </div>
                  </div>
               </div>
               <div className={`${baseStyle} `}>
                  <div className="border border-[#29233F] rounded-[20px] shadow-custom h-full flex justify-between flex-col p-10">
                  <Stars starsValue={3} />

                     <p>Mirko da izvines celar ukro gace popove
                        bruda voli gemist itd itd itd sanjicak pokemon
                        <br />
                        <br />
                        Mirko da izvines celar ukro gace popove
                        bruda voli gemist itd itd itd sanjicak pokemon
                        <br />
                        <br />
                        Mirko da izvines celar ukro gace popove
                        bruda voli gemist itd itd itd sanjicak pokemon</p>
                        <div className="mt-5">
                           <Image width={70} src={personTestimonial} alt={""}></Image>
                           <h3 className="text-white font-semibold">Jane Smith4</h3>
                           <p className="text-slate-600 uppercase">Freelance Designer</p>
                        </div>
                  </div>
               </div>
            </Carousel>
            <Button primaryText={"Let's talk"} primaryStyle={"text-center mx-auto mt-0 mb-10 gap-0"}></Button>
         </div>
      </>

   )
   
}
