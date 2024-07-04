// ES2015 
import 'flexmonster/flexmonster.min.css';
import Flexmonster from 'flexmonster';

// CommonJS 
// require('flexmonster/flexmonster.min.css');
// const Flexmonster = require('flexmonster');

new Flexmonster({
    container: "#pivot",
    toolbar: true,
    report: {
        dataSource: {
            data: [
                {
                    "Category": "Accessories",
                    "Price": 125,
                    "Quantity": 100
                },
                {
                    "Category": "Accessories",
                    "Price": 74,
                    "Quantity": 235
                },
                {
                    "Category": "Bikes",
                    "Price": 233,
                    "Quantity": 184
                }
            ]
        }
    }
})