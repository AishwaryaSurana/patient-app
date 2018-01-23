import React, {Component} from 'react';

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state  = {
          messages: []
        }
      }
    
    render(){
    return (
      <div>
        MessageList Component
      </div>
    )
  }
}

export default MessageList
