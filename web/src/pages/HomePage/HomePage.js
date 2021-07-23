import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>boardie</h1>
      <button class="bg-blue-500 hover:bg-blue-700 rounded-md	">
        Hover me
      </button>


      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
