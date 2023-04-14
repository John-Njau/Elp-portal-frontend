import React from 'react'

const MainLayoutNoAuth = (Component) => function HOC() {
    return (
    <>
      <Component/>
    </>
  )
}

export default MainLayoutNoAuth
