import React from 'react'

const ListePrimateTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.primates.length > 0 ? (
        props.primates.map(primate => (
          <tr key={primate.id}>
            <td>{primate.name}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(primate)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deletePrimate(primate.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Aucun primates</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ListePrimateTable
