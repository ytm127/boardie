import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>boardie</h1>

      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
