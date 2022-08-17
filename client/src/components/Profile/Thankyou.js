import React from 'react'
import {Link} from 'react-router-dom'

export const Thankyou = () => {
  return (
   <>
<div className="content">
  <div className="wrapper-1">
    <div className="wrapper-2">
      <h1>Thank you !</h1>
      <p>Thank You for visiting our website</p>
      <p>you should receive a confirmation email soon</p>
      <Link to ="/">
      <button className="go-home">
      go home
      </button>
      </Link>
    </div>
</div>
</div>
   </>
  )
}
