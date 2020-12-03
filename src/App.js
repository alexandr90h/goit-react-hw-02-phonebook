import React, { Component } from 'react';

import InputForm from './inputMainForm/inputMainForm.jsx';
import ContactsList from './contactsList/conractsList';
// function App() {
//   return (<InputForm/>);
// }
class App extends Component{
  state = {
    contacts: [],
    name: '',
    number: ''
  }
  formSubmitHandler = data => {
    this.setState(prev => ({
      contacts: prev.contacts.concat(data),
    }))
  }
  render(){
    return (
      <div>
      <InputForm onSubHand={this.formSubmitHandler} />
      <ContactsList stateData={this.state.contacts} />
    </div>
    )
  }
  
}
export default App;
