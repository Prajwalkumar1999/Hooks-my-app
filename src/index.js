import animals, {useAnimals} from "./data";

//console.log(animals);
//
//const [cat,dog]=animals;
//
//console.log(cat);
//
////const {name,sound}=cat;
////console.log(sound);
//const {name, sound,feedingRequirements:{food,water}}=cat;
//console.log(water);
//const [animal,makesound]=useAnimals(cat);
//console.log(animal);
//makesound();
// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda,tesla]=cars;
console.log(honda);
const {speedStats:{topSpeed:hondaTopSpeed}}=honda;
const {speedStats:{topSpeed:teslaTopSpeed}}=tesla;
const {coloursByPopularity:[hondaTopColour]}=honda;
const {coloursByPopularity:[teslaTopColour]}=tesla;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
)