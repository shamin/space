import React from 'react'
import ReactDOM from 'react-dom'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';
import ToastManager from './toastmanager'

export const Button = (props) => {
  return (
    <div>Toast</div>
  )
}

const notify = () => {
  console.log("Notify")
}

class Toaster {
  constructor() {
    const container = document.createElement('div')
    container.setAttribute('toast-container', '')
    document.body.append(container)

    ReactDOM.render(
      <ToastManager
        bindNotify={this._bindNotify}
      />,
      container
    )
  }

  _bindNotify = handler => {
    this.notifyHandler = handler
  }

  notify = () => {
    console.log("Notifying")
    this.notifyHandler("Sending data to child component")
  }
}

export const toast = new Toaster()
