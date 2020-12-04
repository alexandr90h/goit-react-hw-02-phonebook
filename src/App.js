import React, { Component } from 'react';

import InputForm from './inputMainForm/inputMainForm.jsx';
import ContactsList from './contactsList/conractsList';
import InputFind from './inputFind/inputFind';

class App extends Component{
  state = {
    contacts: [],
    filter:'',
  }
  formSubmitHandler = data => {
    this.setState(prev => ({
      contacts: prev.contacts.concat(data),
      filter: data,
    }))
  }
    inpChangHandler = data => {
    this.setState({
      filter: data,
    })
  }

  render(){
    return (
      <div>
        <InputForm onSubHand={this.formSubmitHandler} />
        <InputFind onChangeFind={this.inpChangHandler}/>
      <ContactsList stateData={this.state.contacts} />
    </div>
    )
  }
  
}
export default App;
