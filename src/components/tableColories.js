import React from 'react';
import Button from 'react-bootstrap/Button';


class tableColories extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(a,b,c){
        this.props.editTodo(a, b,(b=="description") ? c : Number.parseInt(c));
    }
    componentDidUpdate(){
        console.log(this.props.todos);
    }
    
        
    render() {
        const listItems = this.props.todos.map((number, index) =>
            <tr key={number.id}  className="table" >
                <td>{index + 1}</td>
                <td><input value={number.description} className="input" onChange={(e) => this.handleInputChange(number.id, "description", e.target.value)} name="description" min="0" type="text"/></td>
                <td><input value={number.calories}  className="input" onChange={(e) => this.handleInputChange(number.id, "calories", e.target.value)} name="calories" min="0" type="number"/></td>
                <td><input value={number.fat}  className="input" onChange={(e) => this.handleInputChange(number.id, "fat", e.target.value)}  name="fat" min="0" type="number"/></td>
                <td><input value={number.carbs}  className="input" onChange={(e) => this.handleInputChange(number.id, "carbs", e.target.value)} name="carbs" min="0" type="number"/></td>
                <td><input value={number.protein}  className="input" onChange={(e) => this.handleInputChange(number.id, "protein", e.target.value)}  name="protein" min="0" type="number"/></td>
                <td><Button className="buttonAdd" variant="danger" onClick={() => this.props.deleteTodo(number.id)}  >Delete</Button></td>
            </tr>
        );
        return (
            <React.Fragment>
                {listItems}
            </React.Fragment>
        );
    }
}
  
export default tableColories;