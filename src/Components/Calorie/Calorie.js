import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import Nav from '../Nav/Nav';

const initialMacros = {
  carbs: 0,
  protein: 0,
  fat: 0
};

const CalorieTrack = () => {
  const [macros, setMacros] = useState(initialMacros);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission and update state with new macro values
  };

  // data will be shown on pie chart as calories, so here we convert our user input from grams to calories
  const data = [
    ['Macro', 'Percentage'],
    ['Carbs', macros.carbs * 4],
    ['Protein', macros.protein * 4],
    ['Fat', macros.fat * 9]
  ];

  return (
    <div>
      <Nav />

      {/* title */}
      <h1 id='macropageh1'>Macro and Calorie tracking</h1>
      <h3 id='macropageh3'>Add in your macro information to see your total calories consumed and a pie chart visual</h3>
      <br />


      {/* macro inputs */}
      <form onSubmit={handleSubmit}>
        <label >Carbohydrates (grams) </label>
        <br />
        <input
          id="carbs-input"
          type="number"
          min="0"
          value={macros.carbs}
          onChange={(event) =>
            setMacros({ ...macros, carbs: parseInt(event.target.value) })
          }
        />

        <br />
        <br />

        <label>Protein (grams) </label>
        <br />
        <input
          id="protein-input"
          type="number"
          min="0"
          value={macros.protein}
          onChange={(event) =>
            setMacros({ ...macros, protein: parseInt(event.target.value) })
          }
        />

        <br />
        <br />

        <label>Fat (grams) </label>
        <br />
        <input
          id="fat-input"
          type="number"
          min="0"
          value={macros.fat}
          onChange={(event) =>
            setMacros({ ...macros, fat: parseInt(event.target.value) })
          }
        />
      </form>

      {/* code for the calorie pie chart */}
      <div id='caloriechart'>
        <Chart
          id='piechart'
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={{
            title: 'Macronutrient Calorie Breakdown Shown as Percents',
            pieHole: 0.4,
            is3D: true
          }}
        />
      </div>

      {/* total calories number */}
      <br />
      <div id='calorietotal'>
        <h4>Total Calorie Consumption: </h4>
        <h4>{macros.carbs*4 + macros.protein*4 + macros.fat *9}</h4>
      </div>
    </div>
  );
};

export default CalorieTrack;