import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class addProduct extends React.Component {
    constructor(props) {
        super(props);
        this.addProduct= this.addProduct.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state={
            
                description:"",
                calories:0,
                fat:0,
                carbs:0,
                protein:0,
            
            
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value =target.value;
        const name = target.name;
    
        this.setState({
          [name]:value
        });
      }

    addProduct(){
       const obj={
           "description":(this.state.description!="")?this.state.description:"(no description)",
           "calories":Number.parseInt(this.state.calories),
           "fat":Number.parseInt(this.state.fat),
           "carbs":Number.parseInt(this.state.carbs),
           "protein":Number.parseInt(this.state.protein),
       }
       console.log(obj.description)
       this.props.dispatch(addTodo(obj.description, obj.calories, obj.fat, obj.carbs, obj.protein));
       this.setState({
           description:"",
           calories:0,
           fat:0,
           carbs:0,
           protein:0,
       });

    }
    render() {
        return (
            
                <tr>
                    <td></td>
                    <td><input value={this.state.description} onChange={this.handleInputChange} className="input" placeholder="Description" name="description" type="text"/></td>
                    <td><input value={this.state.calories} onChange={this.handleInputChange} className="input" placeholder="Calories" name="calories" type="number" min="0"/></td>
                    <td><input value={this.state.fat} onChange={this.handleInputChange} className="input" placeholder="Fat" name="fat" type="number" min="0" /></td>
                    <td><input value={this.state.carbs} onChange={this.handleInputChange} className="input" placeholder="Carbs" name="carbs" type="number" min="0"/></td>
                    <td><input value={this.state.protein} onChange={this.handleInputChange} className="input" placeholder="Protein" name="protein" type="number" min="0"/></td>
                    <td><Button className="buttonAdd" onClick={this.addProduct}>Add</Button></td>
                 </tr>

          
        );
    }
}

export default connect() (addProduct);