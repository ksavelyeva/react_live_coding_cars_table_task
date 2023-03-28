import React from 'react';
import carsFromServer from './api/cars';
import colorsFromServer from './api/colors';

interface Car {
  id: number,
  brand: string,
  rentPrice: number,
  colorId: number
}

// 1. Render car with color
// 2. Add ability to filter car by brand name
// 3. Add ability to filter car by color

export const App: React.FC = () => {
  const filteredCars: Car[] = carsFromServer;

  return (
    <div>
      <input type="search" placeholder="Find by car brand" />

      <select>
        <option>Chose a color</option>
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
          {filteredCars.map(car => {
            const { id, brand, rentPrice } = car;
            const carColor = colorsFromServer
              .find(color => car.colorId === color.id);

            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{brand}</td>
                <td>{carColor?.name}</td>
                <td>{rentPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
