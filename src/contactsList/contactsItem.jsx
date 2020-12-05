
// export default function ContactsList({ id, name, number }) {
// function OnBtnDel (e) {
//     console.log(e.currentTarget.getAttribute("data-id"));
//     this.props.onBtnIdHend(e.currentTarget.getAttribute("data-id"));
//    } 
//     return (
//         <li key={id}>
//             <span>{name}: </span><span>{number}</span>
//             <button data-id={id} onClick={OnBtnDel}>delete</button>
//             </li>
//     )
// }
import React, { Component } from 'react';
class ContactsList extends Component {
    state = {
        id: '',
        name: '',
        number:'',
    }
    OnBtnDel (e) {
    console.log(e.currentTarget.getAttribute("data-id"));
    this.props.onBtnIdHend(e.currentTarget.getAttribute("data-id"));
   } 
    render() {
         return (
        <li key={this.state.id}>
            <span>{this.state.name}: </span><span>{this.state.number}</span>
            <button data-id={this.state.id} onClick={this.OnBtnDel}>delete</button>
            </li>
    )
    }
}
export default ContactsList;