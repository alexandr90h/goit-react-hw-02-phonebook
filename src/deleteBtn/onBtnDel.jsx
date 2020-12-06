import React, { Component } from 'react';
class ContactsList extends Component {
    state = {
        id: '',
    }
    OnBtnDel (e) {
    console.log(e.currentTarget.getAttribute("data-id"));
    this.props.onBtnIdHend(e.currentTarget.getAttribute("data-id"));
   } 
    render() {
         return (
            <button data-id={this.state.id} onClick={this.OnBtnDel}>delete</button>
    )
    }
}
export default ContactsList;