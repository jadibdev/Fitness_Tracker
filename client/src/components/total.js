import React from "react";
import { blue } from "@material-ui/core/colors";

const expenses = [
    1000,
    81,
    55,
    246,
    50,
    246,
    27,
    20,
    29.5,
    85,
    5,
    12,
    4,
    140,
    163,
    40,
    7,
    5,
    7,
    7,
    7.5,
    100,
    190,
    8.5,
    5,
    6,
    8,
    48,
    5,
    9,
    9.5,
    3.5, 
    50,
    23,
    7.5
]

function CountEverything(array) {
    let total = 0;
    array.forEach(function (number) {
        total += number;
    });
    return total;
}

export default function App() {
    return (
        <div className="App">
            {expenses.map(function(expense, key) {
                return <li key={expense} style={{margin:50}}>{expense}</li>
            })}
            <h4 style={{color: 'blue', margin:50}}>{'Total: ' + CountEverything(expenses) + "DHS"}</h4>
        </div>
    );
}