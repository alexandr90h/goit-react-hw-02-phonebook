import React, { Component } from 'react';
import styles from './app.module.scss';
import InputForm from './inputMainForm/inputMainForm.jsx';
import ContactsList from './contactsList/conractsList';
import InputFind from './inputFind/inputFind';
import FilterContactsList from './inputFind/filterContactsList.jsx';

class App extends Component{
  state = {
    contacts: [],
    filter:'',
  }
  formSubmitHandler = data => {
    if (this.state.contacts.find(obj => obj.name.toLowerCase() === data.name.toLowerCase())===undefined) {
      this.setState(prev => ({
        contacts: prev.contacts.concat(data),
      }))
    }
    else alert(`${data.name} is alreadyin contacts.`);
  }
    inpChangHandler = data => {
    this.setState({
      filter: data,
    })
  }
  btnDelId = data => {
    this.setState(prev => ({
    contacts: prev.contacts.filter(obj=>obj.id!==data)
    }))
    // this.state.contacts.forEach(obj => {
      
    // })
  }
  render() {
    return (
      <div className={styles.mainContainer}>
        <h1>Phonebook</h1>
        <div>
          <InputForm onSubHand={this.formSubmitHandler} />
        </div>
        <div>
          <h2>Contacts</h2>
        <InputFind onChangeFind={this.inpChangHandler} />
          {this.state.filter === ''
            ?
            <ContactsList
              stateData={this.state.contacts}
              onBtnDelId={this.btnDelId} />
            :
            <FilterContactsList
              stateData={this.state.contacts}
              changeFilter={this.state.filter}
              onBtnDelId={this.btnDelId} />}
        </div>
    </div>
    )
  }
  
}
export default App;
