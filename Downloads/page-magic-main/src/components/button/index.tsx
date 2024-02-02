interface ButtonsText {
   primaryText: string;
   secondaryText?: string;
   primaryStyle: string;
   secondaryStyle?: string;
}

const baseStyle = "buttons mt-5 block py-2 px-4 text-base ";

export default function Button({ primaryText, secondaryText, primaryStyle, secondaryStyle }: ButtonsText) {

   return (
       <div className="flex gap-3 mx-auto text-center">
           <button type="button" className={`${baseStyle} ${primaryStyle}`}>{primaryText}</button>
           {secondaryText && (
               <button type="button" className={`${baseStyle} ${secondaryStyle}`}>{secondaryText}</button>
           )}
       </div>
   );
}
