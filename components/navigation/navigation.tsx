import Link from "next/link"
import '../../app/globals.css'
import Themebutton from "../ThemeButton"


 
const Navigation = () => {
  return (
  <header>
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-black bg-white dark:bg-black dark:text-white border-black dark:border-white  border-2 sticky top-0 z-50">       
        <div className="">
          <Link href="/">
          <span className="self-center text-2xl font-semibold mix-blend-difference dark:color-white color-black">K&amp;K MEDIA GROUP</span>
          </Link>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto border-x" id="menu">
          <ul
            className="
              pt-4
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link className="md:p-4 py-2 block hover:underline" href="#"> WORK</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:underline" href="#">SERVICES</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:underline" href="#">ABOUT</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:underline" href="#">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:flex md:items-center md:w-auto border-l" id="menu">
          <ul
            className="
              pt-4
              md:flex
              md:justify-between 
              md:pt-0">
            <li>
              <Link
                className="md:p-4 py-2 block hover:underline"
                href="#">
                  CLIENT LOG IN
                </Link>
            </li>
          </ul>
          <Themebutton/>
        </div>
    </nav>
  </header>

  )
}

export default Navigation