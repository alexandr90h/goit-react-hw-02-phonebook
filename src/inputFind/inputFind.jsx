import React, { Component } from 'react';
class InputFind extends Component{
    state = {
        filter: '',
    }
    hendlInputFilter = e => {
        this.props.onChangeFind(e.currentTarget.value)
        this.setState({
            filter: e.currentTarget.value,
        })
    }
    render(){
        return (
            <div>
                <label>Find contacts by name
                    <input type="text"
                        name="filter"
                        autoComplete="off"
                        filter={this.state.filter}
                        onChange={this.hendlInputFilter} />
                </label>
            </div>
        )
    }
}
export default InputFind;