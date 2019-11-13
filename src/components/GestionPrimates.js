import React, { useState, Fragment, useEffect } from 'react';
import Navigation from './Navigation';

const GestionPrimates = () => {

  const primatesData = [
    { id: 1, name: 'Tania'},
    { id: 2, name: 'Craig'},
    { id: 3, name: 'Ben'},
  ]

  const [primates, setPrimates] = useState(primatesData)

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: ''}
  const [currentPrimate, setCurrentPrimate] = useState(initialFormState)

  const NewPrimateTable = props => {
      const initialFormState = { id: null, name: '' }
      const [ primate, setPrimate ] = useState(initialFormState)

      const handleInputChange = event => {
        const { name, value } = event.target

        setPrimate({ ...primate, [name]: value })
      }

      return (
        <form
          onSubmit={event => {
            event.preventDefault()
            if (!primate.name) return

            props.NewPrimate(primate)
            setPrimate(initialFormState)
          }} className="form-inline"
        >
          <div className="form-group mx-3 mt-2">
            <input type="text" placeholder="Nom.." name="name" value={primate.name} onChange={handleInputChange} />
          </div>
          <button className="btn btn-primary">Créer primate</button>
        </form>
      )
    }

    const EditPrimateTable = props => {
      const [primate, setPrimate] = useState(props.currentPrimate)

      const handleInputChange = event => {
        const { name, value } = event.target

        setPrimate({ ...primate, [name]: value })
      }
      useEffect(() => {
        setPrimate(props.currentPrimate)
      }, [props])
      return (
        <form
          onSubmit={event => {
            event.preventDefault()
            props.updatePrimate(primate.id, primate)
          }}
        >
          <input type="text" name="name" value={primate.name} onChange={handleInputChange} />
          <button className="btn btn-primary mx-1">Modifier primate</button>
          <button onClick={() => props.setEditing(false)} className="btn btn-warning muted-button mx-1">
            Cancel
          </button>
        </form>
      )
    }

    const ListePrimateTable = props => (
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.primates.length > 0 ? (
            props.primates.map(primate => (
              <tr key={primate.id}>
                <td className="text-center">{primate.name}</td>
                <td className="text-center">
                  <button
                    onClick={() => {
                      props.editRow(primate)
                    }}
                    className="btn btn-primary muted-button mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.deletePrimate(primate.id)}
                    className="btn btn-danger muted-button mx-1"
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

  const editRow = primate => {
    setEditing(true)

    setCurrentPrimate({ id: primate.id, name: primate.name})
  }

  const updatePrimate = (id, updatedPrimate) => {
    setEditing(false)

    setPrimates(primates.map(primate => (primate.id === id ? updatedPrimate : primate)))
  }

  const NewPrimate = primate => {
    primate.id = primates.length + 1
    setPrimates([...primates, primate])
  }

  const deletePrimate = id => {
    setPrimates(primates.filter(primate => primate.id !== id))
  }

    return (
      <div>
      <Navigation />
      <div className="container text-center my-3">
        <h1>Gestion des primates</h1>
        <hr/>
        <div className="row">
          <div className="col-md-6 border-right">
            {editing ? (
              <Fragment>
                <EditPrimateTable
                  editing={editing}
                  setEditing={setEditing}
                  currentPrimate={currentPrimate}
                  updatePrimate={updatePrimate}
                />
              </Fragment>
            ) : (
              <Fragment>
                <NewPrimateTable NewPrimate={NewPrimate} />
              </Fragment>
            )}
          </div>
          <div className="col-md-6">
            <ListePrimateTable primates={primates} editRow={editRow} deletePrimate={deletePrimate} />
          </div>
        </div>
      </div>
      </div>
    )
}

export default GestionPrimates;
