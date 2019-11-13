import React, { useState } from 'react'


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

export default NewPrimateTable
