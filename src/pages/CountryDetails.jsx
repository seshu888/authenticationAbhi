import React from 'react'
import { useLocation } from 'react-router-dom'
import '../index.css'
const CountryDetails = () => {

  const {state} = useLocation()
  console.log(state.currencies)
  return (
  state &&  <div className='Country-Details'>
    <table>
      <thead>
     <tr>
          <th>Official Name</th>
          <th>Common</th>
          <th>Currencies</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{state.name.official}</td>
          <td>{state.name.common}</td>
          <td>{}</td>
          <td>{state.flag} </td>
        </tr>
      </tbody>
    </table>
    
    </div>
  )
}

export default CountryDetails