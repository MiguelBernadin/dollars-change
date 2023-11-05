import React from 'react'

const Layout = (props) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Currency Exchange Rates
        </span>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div className="mb-2">
          <a href="/" className="badge text-bg-dark ">GitHub</a>
        </div>
        <div className="">
          <span className="mr-3 text-secondary">Built by <a href="https://www.yeshaiticanprogram.com" target='_blank'>Yes Haiti Can Program</a> With Miguel Bernadin 🔥  </span>
        </div>
      </footer>
    </>
  )
}

export default Layout
