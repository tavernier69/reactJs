import React, { useState, useEffect } from 'react'

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

export default EditPrimateTable
