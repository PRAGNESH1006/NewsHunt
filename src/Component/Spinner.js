import React, { Component } from 'react'
import loading from "./loading.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center '>
        <img  style={{background:"rgb(49, 44, 35)"}} src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Spinner
