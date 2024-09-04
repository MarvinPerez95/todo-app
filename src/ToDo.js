import React from "react";

class TODO extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            text: '',
            items: []
        }
        this.handleChenge = this.handleChenge.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChenge(e){
        this.setState({text: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        if(this.state.text.length === 0) return

        const newItem ={
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state =>({
            items: state.items.concat(newItem),
            text: ''
        }))
    }

    render(){
        return(
            <div style={{align: "center"}}>
                <div>
                    <h1 style={{border: '5px solid yellow', backgroundColor: 'gray'}}>To-DO List!</h1>
                </div>
                <p>Enter your list here</p>
                <TODOList todoItems={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id">Enter List: </label>
                    <input id="id" onChange={this.handleChenge} value={this.state.text}/>
                    <div>
                        <button>Add to list</button>
                    </div>
                </form> 
                <div>
                    <RemoveItem todoItems={this.state.items}/>
                    <button>Remove ITem</button>
                </div>
            </div>
        )
    }
}

export default TODO

class TODOList extends React.Component{
    render() {
        return (
            <ul>
                {this.props.todoItems.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}


class RemoveItem extends React.Component{
    render(){
        return(
            <ul> 
                {this.props.todoItems.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}