import React, { Component } from 'react';
class InputFind extends Component{
    hendlInputFilter = e => {
        this.props.onChangeFind(e.currentTarget.value)
    }
    render(){
        return (
            <div>
                <label>Find contacts by name
                    <input type="text"
                        autoComplete="off"
                    onChange={this.hendlInputFilter} 
                    />
                </label>
            </div>
        )
    }
}
export default InputFind;