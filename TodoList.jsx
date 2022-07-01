import React, {Component} from 'react';
import TodoItems from './TodoItems';
import "./TodoList.css";
class TodoList extends Component {
    constructor(props) {
    super(props);
    this.state = {
        items: []
        }
    this.addItem = this.addItem.bind(this);
    }
    addItem(e) {
        const itemArray = this.state.items;
        if (this._inputElement.value!=="") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState({
                items: itemArray

            });
            this._inputElement.value = "";
        
            }
            console.log(itemArray);
            e.preventDefault();
    }
    render(){
        return(
<div className="todoListMain">
 <div  className="header">
 <form onSubmit={this.addItem}>
 <input id="kk" ref={(a) => this._inputElement = a}
 placeholder="Write something">
 </input>
 <button id="ll" type="submit">ok</button>
 </form>
 </div>
 <TodoItems id="mm" entries={this.state.items}/>
 </div>
        );
    }
}
export default TodoList;