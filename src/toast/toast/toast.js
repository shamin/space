import React from 'react'

export default class Toast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: true
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isShown !== this.props.isShown) {
      this.setState({
        isShown: this.props.isShown
      })
    }
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  startCloseTimer = () => {
    this.closeTimer = setTimeout(() => {
      this.close()
    }, this.props.duration * 1000);
  }

  close = () => {
    this.clearCloseTimer()
    this.setState({
      isShown: false
    })
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }


  render() {
    return (
      <span>
        {this.state.isShown && this.props.children}
      </span>
    )
  }
}
