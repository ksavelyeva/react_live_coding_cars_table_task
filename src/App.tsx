import React, { useState } from 'react';
import carsFromServer from './api/cars';
import colorsFromServer from './api/colors';

// 1. Render car with color
// 2. Add ability to filter car by brand name
// 3. Add ability to filter car by color

export const App: React.FC = () => {
  const color = carsFromServer.find(
    colorsFromServer => color.id === car.colorId,
  );

  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const filteredCars = carsFromServer.filter((car) => {
    const brandMatch = car.brand.toLowerCase()
      .includes(searchValue.toLowerCase());
    const colorMatch = selectValue === '' || color === selectValue;

    return brandMatch && colorMatch;
  });

  return (
    <div>
      <input
        type="search"
        placeholder="Find by car brand"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />

      <select
        value={selectValue}
        onChange={(event) => setSelectValue(event.target.value)}
      >
        <option
          value=""
        >
          Chose a color
        </option>
        <option
          value="Red"
        >
          Red
        </option>
        <option
          value="White"
        >
          White
        </option>
        <option
          value="Black"
        >
          Black
        </option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Color</th>
            <th>Rent price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ferarri</td>
            <td style={{ color: 'red' }}>Red</td>
            <td>500</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Opel</td>
            <td style={{ color: 'white' }}>White</td>
            <td>300</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Audi</td>
            <td style={{ color: 'black' }}>Black</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
