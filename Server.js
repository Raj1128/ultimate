const express = require('express')
const bodyParser = require('body-parser')
  

const app = express();
app.use(bodyParser.json());
const port = 5000;


let records =[{
    recordName: "React Rave",
    artistName: "The Devlopers",
    description: "Aroking good bopping to the tune of javascrpit.",
},
{
    recordName: "bulding an App",
    artistName: "The Comopents",
    description: "Sound of the future.",
}
];


app.get('/api/record',(req,res) =>{
    res.send(records);
}
);

app.listen(port, () =>
console.log(`server listening on port` ${port} 
);






















