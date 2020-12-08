import React from 'react'

import { connect } from "react-redux"
import FlashMessage from './FlashMessage'

class FlashMessagesList extends React.Component { 
  // message 是一个数组！！！
  render() {
    console.log(this.props)

    const messages = this.props.messages.map(message => 
      <FlashMessage key={message.id} message={message} />)
    return (
      <div className="container">
        {messages}
      </div>
    )
  }
}
const mapStateToProps = (state) => { 
  return {
    messages:state.flashMessages
  }
}
export default connect (mapStateToProps)(FlashMessagesList)