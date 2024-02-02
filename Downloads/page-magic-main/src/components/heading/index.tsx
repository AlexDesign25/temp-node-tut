'use client'

interface TitleText {
   spanText: string;
   heading: React.ReactNode;
   style: string;
   spanStyle: string;
   headingStyle: string;
}

export default function Heading({spanText, heading, style, spanStyle, headingStyle  } : TitleText ){
   return (
      <div className={`flex flex-col ${style}`}>
      <span className={`${spanStyle} linearTitle font-semibold text-xl`}>{spanText}</span>
       <h2 className={`${headingStyle} text-5xl font-medium`} >{heading}</h2>
      </div>
   )
}