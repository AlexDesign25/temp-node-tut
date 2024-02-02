import Link from 'next/link'

export default function navBar() {
   return (
      <nav className='navbar'>
         <article className=' flex flex-row py-5 w-[80%] mx-auto justify-between items-center font-bold text-2xl'>
            <div>
               <Link href="/">Page Magic</Link>
            </div>
            <div className='space-x-5 text-sm'>

               <Link href="/about">About</Link>
               <Link href="/portfolio">Portfolio</Link>
               <Link className='border-[#29233F] border-2 border-solid rounded-3xl p-3 ' href="#lets-talk">Let's Talk</Link>
            </div>
         </article>

      </nav>
   )
}