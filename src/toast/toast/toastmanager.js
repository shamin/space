import React from 'react'
import Toast from './toast'
import { Container } from './container.js'

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
      title,
      duration: 5
    }
  }

  getToasts = () => {
    return this.state.toasts
  }

  removeToast = (id) => {
    this.setState(prevState => ({
      toasts: prevState.toasts.filter(toast => toast.id !== id)
    }))
  }

  render() {
    console.log(this.state.toasts)
    return (
      <Container>
        {this.state.toasts.map(({ id, title, ...props}) => (
          <Toast key={id} onRemove={() => this.removeToast(id)} {...props}>
            {title}
          </Toast>
        ))}
      </Container>
    )
  }
}
