import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import TotalContainer from '../containers/TotalContainer';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddProduct from './addProduct.js';


class App extends React.Component {
    constructor(props) {
        super(props);     
    }
    render() {
        return (
            <div className="wrapper">
                <div className="title">
                   <h2 align="center" className="title">React.js Calorie Counter</h2>
                </div>
                <div className="fdsf">
                <Table bordered responsive="sm">
                    <thead className="headers">
                        <tr>
                            <th>#</th>
                            <th>DESCRIPTION</th>
                            <th>CALORIES</th>
                            <th>FAT</th>
                            <th>CARBS</th>
                            <th>PROTEIN</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody className="bodies">
                      <VisibleTodoList /> 
                      <TotalContainer/>
                      <AddProduct/>
                    </tbody>
                </Table>
                </div>

            </div>
        );
    }
}

export default App;