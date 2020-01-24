import React from 'react';


class totalCount extends React.Component {
    constructor(props) {
        super(props);  
    }
    render() {
        const a={
            "calories":0,
            "fat":0,
            "carbs": 0,
            "protein":0,
        };
        this.props.todos.forEach(function(item, index, array) {
                a["calories"]=Number.parseInt(a["calories"]+item["calories"]);
                a["fat"]     =Number.parseInt(a["fat"]+item["fat"]);
                a["carbs"]   =Number.parseInt(a["carbs"]+item["carbs"]);
                a["protein"] =Number.parseInt(a["protein"]+item["protein"]);
        });
        return (
               <React.Fragment>
                    <tr className="sum"> 
                        <td></td>
                        <td align="right">TOTAL:</td>
                        <td>{a["calories"]}</td>
                        <td>{a["fat"]}</td>
                        <td>{a["carbs"]}</td>
                        <td>{a["protein"]}</td>
                        <td></td>
                   </tr>
                </React.Fragment>
        );
    }
}



export default totalCount;