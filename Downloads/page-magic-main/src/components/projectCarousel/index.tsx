"use client"
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../button";
import Heading from "../heading";
// import Image from "next/image";
// import CustomLeftArrow1 from "../../../public/previousButtonIcon.svg";
// import CustomLeftArrow2 from "../../../public/nextButtonIcon.svg";



export default function ProjectCarousel(props: any) {

   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
         slidesToSlide: 3 // optional, default to 1.
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

   const baseStyle = "w-[100%] h-[300px] p-5 ";
   const buttonBaseStyle = "buttons mt-5 block py-2 px-4 text-base shadow-none hover:shadow-xl ";

   const [selectedProject, setSelectedProject] = useState('Client Projects');

   const handleChangeProject = (projectType: any) => {
      setSelectedProject(projectType)
   }

   const clientProjects = [
      {
         id: 0,
         projectName: 'LeadHarpon',
         technology: 'NextJS'
      },
      {
         id: 1,
         projectName: 'Codos Network',
         technology: 'WordPress'
      },
      {
         id: 2,
         projectName: 'Alex Portfolio',
         technology: 'DivHunt'
      },
   ];

   const magicProjects = [
      {
         id: 0,
         projectName: 'NXNE Media',
         technology: 'WordPress'
      },
      {
         id: 1,
         projectName: 'Relaxizz',
         technology: 'Elementor'
      },
      {
         id: 2,
         projectName: 'Vedetter',
         technology: 'NextJS'
      },

   ]


   return (
      <>

         <div className="container flex justify-between pt-[100px]">
            <Heading spanText={"We made this."} heading={<><span>Magic turned into</span><span><br /></span><span> websites.</span></>} style={""} spanStyle={""} headingStyle={""} />

            <div className="space-x-5 flex justify-center items-center">
               <button className={buttonBaseStyle} onClick={() => handleChangeProject('Client Projects')}>Client Projects</button>
               <button className={buttonBaseStyle} onClick={() => handleChangeProject('Magic Projects')}>Magic Projects</button>
            </div>
         </div>
         <div className="overflow-hidden ps-[15vw]">
            <Carousel className="my-10 space-x-4"
               arrows={true}
               swipeable={false}
               draggable={true}
               showDots={false}
               renderDotsOutside={true}
               responsive={responsive}
               ssr={true} // means to render carousel on server-side.
               infinite={true}
               autoPlay={props.deviceType !== "mobile" ? true : false}
               autoPlaySpeed={1500}
               keyBoardControl={true}
               customTransition="all .5"
               transitionDuration={1000}
               containerClass="carousel-container"
               removeArrowOnDeviceType={["tablet", "mobile"]}
               deviceType={props.deviceType}
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
            >

               {selectedProject === 'Client Projects' ?
                  clientProjects.map((project, index) => (
                     <div key={index} className={`${baseStyle}`}>
                        <div className="border border-[#29233F] rounded-[20px] shadow-custom h-full flex justify-between flex-col ">
                           <div className=" flex justify-end items-center boxSliderBg px-5 h-[20%]">
                              <span className={`${buttonBaseStyle} flex flex-row justify-end items-end `} >{project.technology}</span>
                           </div>
                           <div className="boxSliderBgReverse h-[20%] px-5">
                              <h2 className="linearTitle">{project.projectName}</h2>
                           </div>
                        </div>
                     </div>
                  ))
                  :
                  magicProjects.map((project, index) => (
                     <div key={index} className={`${baseStyle}`}>
                        <div className="border border-[#29233F] rounded-[20px] shadow-custom h-full flex justify-between flex-col ">
                           <div className=" flex justify-end items-center boxSliderBg px-5 h-[20%]">
                              <span className={`${buttonBaseStyle} flex flex-row justify-end items-end `} >{project.technology}</span>
                           </div>
                           <div className="boxSliderBgReverse h-[20%] px-5">
                              <h2 className="linearTitle">{project.projectName}</h2>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </Carousel>
         </div>
      </>

   )
}
