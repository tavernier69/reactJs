import React, { useState, Fragment, useEffect } from 'react';
// import ListePrimateTable from './components/ListePrimateTable';
// import NewPrimateTable from './components/NewPrimateTable';
// import EditPrimateTable from './components/EditPrimateTable';

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
          }}
        >
          <label>Name</label>
          <input type="text" name="name" value={primate.name} onChange={handleInputChange} />
          <button>Créer primate</button>
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
          <label>Name</label>
          <input type="text" name="name" value={primate.name} onChange={handleInputChange} />
          <button>Update primate</button>
          <button onClick={() => props.setEditing(false)} className="button muted-button">
            Cancel
          </button>
        </form>
      )
    }

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

  const editRow = primate => {
    setEditing(true)

    setCurrentPrimate({ id: primate.id, name: primate.name})
  }

  const updatePrimate = (id, updatedPrimate) => {
    setEditing(false)

    setPrimates(primates.map(primate => (primate.id === id ? updatePrimate : primate)))
  }

  const NewPrimate = primate => {
    primate.id = primates.length + 1
    setPrimates([...primates, primate])
  }

  const deletePrimate = id => {
    setPrimates(primates.filter(primate => primate.id !== id))
  }

    return (
      <div className="container">
        <h1>Gestion des primates</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <Fragment>
                <h2>Modifier ceprimate</h2>
                <EditPrimateTable
                  editing={editing}
                  setEditing={setEditing}
                  currentPrimate={currentPrimate}
                  updatePrimate={updatePrimate}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Creer primate</h2>
                <NewPrimateTable NewPrimate={NewPrimate} />
              </Fragment>
            )}
            <div className="flex-large">
              <h2>Liste des primates</h2>
              <ListePrimateTable primates={primates} editRow={editRow} deletePrimate={deletePrimate} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default GestionPrimates;
