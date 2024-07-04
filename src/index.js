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
            type: "json",
            filename: "https://cdn.flexmonster.com/data/retail-data.json",
            mapping: {
              "Quantity": {
                type: "number",
              },
              "Price": {
                type: "number",
              },
              "Retail Category": {
                type: "string",
              },
              "Sales": {
                type: "number",
              },
              "Order Date": {
                type: "year/quarter/month/day",
              },
              "Date": {
                type: "date",
              },
              "Status": {
                type: "string",
              },
              "Product Code": {
                type: "string",
              },
              "Phone": {
                type: "string",
              },
              "Country": {
                type: "string",
                folder: "Location",
              },
              "City": {
                type: "string",
                folder: "Location",
              },
              "CurrencyID": {
                type: "property",
                hierarchy: "Country",
              },
              "Contact Last Name": {
                type: "string",
              },
              "Contact First Name": {
                type: "string",
              },
              "Deal Size": {
                type: "string",
              },
            },
        },
        slice: {
            rows: [{
                uniqueName: "Country",
                filter: {
                  members: [
                    "country.[australia]",
                    "country.[usa]",
                    "country.[japan]",
                  ],
                },
              },
              {
                uniqueName: "Status",
              },
            ],
            columns: [{
                uniqueName: "Order Date",
              },
              {
                uniqueName: "[Measures]",
              },
            ],
            measures: [{
              uniqueName: "Price",
              aggregation: "sum",
              format: "currency",
            }, ],
            sorting: {
              column: {
                type: "desc",
                tuple: [],
                measure: {
                  uniqueName: "Price",
                  aggregation: "sum",
                },
              },
            },
            expands: {
              rows: [{
                tuple: ["country.[japan]"],
              }, ],
            },
            drills: {
              columns: [{
                tuple: ["order date.[2019]"],
              }, ],
            },
            flatSort: [{
              uniqueName: "Price",
              sort: "desc",
            }, ],
        },
        conditions: [{
            formula: "#value > 35000",
            measure: "Price",
            aggregation: "sum",
            format: {
                backgroundColor: "#00A45A",
                color: "#FFFFFF",
                fontFamily: "Arial",
                fontSize: "12px",
              },
        },
        {
            formula: "#value < 2000",
            measure: "Price",
            aggregation: "sum",
            format: {
                backgroundColor: "#df3800",
                color: "#FFFFFF",
                fontFamily: "Arial",
                fontSize: "12px",
              },
        },
        ],
        formats: [{
                name: "",
                thousandsSeparator: ",",
                decimalSeparator: ".",
                decimalPlaces: 2,
                nullValue: "-"
            },
            {
                name: "currency",
                currencySymbol: "$"
            }
        ]
    }
})