import React from 'react'
import Toast from './toast'

export default class ToastManager extends React.Component {
  static idCounter = 0

  constructor(props) {
    super(props)
    this.state = {
      toasts: []
    }

    props.bindNotify(this.notify)
  }

  notify = (title) => {
    const instance = this.createToastInstance(title)

    this.setState(prevState => ({
      toasts: [instance, ...prevState.toasts]
    }))
  }

  createToastInstance = (title) => {
    const uniqueId = ++ToastManager.idCounter

    return {
      id: uniqueId,
      title
    }
  }
  getToasts = () => {
    return this.state.toasts
  }

  render() {
    return(
      <span>
        {this.state.toasts.map(()=>(
          <Toast></Toast>
        ))}
      </span>
    ) 
  }
}
