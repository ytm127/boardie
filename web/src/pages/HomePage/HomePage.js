import { Link, navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useEffect } from 'react'


const HomePage = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()

  // when you logout, nav to login page
  useEffect(()=> {
    !isAuthenticated && navigate(routes.login())
  }, [isAuthenticated])

  return (
    <div class=" mx-auto">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              Boardie.
            </a>
            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ========================================================================== */}
      {/* <div className="bg-gradient-to-r from-boardgame-400 via-boardgame-200 to-boardgame-300"> */}
      <div className="bg-boardgame bg-cover">
        <div className="grid grid-cols-5 gap-1 py-4 px-1">
          <form class="w-full max-w-md col-span-5 mx-auto bg-white rounded-3xl">
            <div class="flex items-center border-teal-500">
              <input class="appearance-none bg-white hover:bg-gray-100 border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none border-4 rounded-3xl m-2 text-lg" type="text" placeholder="Settlers of catan..." aria-label="Full name" />
              <button class="flex-shrink-0 bg-teal-500 hover:bg-red-400 border-red-500 hover:border-red-400 text-lg text-white p-1 rounded-3xl bg-red-300 m-2" type="button">
                🚀 go! 🚀
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4 px-20">
          <div className="col-span-1">
            <div className="text-6xl text-white font-bold">Have. An. Epic. Game. Night.</div>
            <div className="mt-8 mb-8">
              <button className="bg-white p-4 rounded-xl">explore now</button>
              {

              }
              {
                isAuthenticated && <button className="bg-white p-4 rounded-xl" onClick={logOut}>logout</button>
              }
            </div>
          </div>
          {/* <div class="col-span-2">

          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage
