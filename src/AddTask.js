import React, {Component} from 'react'

class AddTask extends Component {

    state= {
        content: ''

    }

    handleCHANGE=(e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSUBMITTING= (e) => {
        e.preventDefault();
        this.props.AddTask(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSUBMITTING}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleCHANGE} value= {this.state.content}/>
                </form>
            </div>
        )
    }
}
export default AddTask