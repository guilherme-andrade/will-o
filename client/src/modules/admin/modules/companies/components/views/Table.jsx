import React from 'react'

export default function Table({ companies }) {
  return (
    <table>
      <tbody>
        {
          companies.map(company => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

