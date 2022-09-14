import React from 'react'
import requests from '../../utils/request'
import {Nav, Row, TopBanner} from ".."
import "./style.css"


function GlobalLayout({ children }) {
  return (
    <>
      <div id="top">
        <Nav />{" "}
      </div>
      <div className="global-layout--page-contents">
        {children}
      </div>
    </>
  )
}

export default GlobalLayout;