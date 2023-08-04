import React from 'react'


const records = [{
    recordName: "React Rave",
    artistName: "The Devlopers",
    description: "Aroking good bopping to the tune of javascrpit.",
},
{
    recordName: "bulding an App",
    artistName: "The Comopents",
    description: "Sound of the future.",
}

]

const List = () => {
   <ul>
    {records.map(({recordName,artistName,description}) => (
   <li key= {recordName}>
    <h3>{recordName}</h3>
    <span>{artistName}</span>
    <p>{description}</p>
   </li> 
   ))}
   </ul>
}

export default List;