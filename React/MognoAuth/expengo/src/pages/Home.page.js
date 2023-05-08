import { useContext } from 'react'
import { UserContext } from '../contexts/user.context'
import { Button, requirePropFactory, TextField } from '@mui/material'
import { useState } from 'react'

import React from 'react'

export default function Home() {
  const { logOutUser, InsertOrganization } = useContext(UserContext)
  const [file, setFile] = useState()
  const [form, setForm] = useState({
    name: '',
    aboutUs: '',
    telephone: '',
    address: '',
    image: '',
  })

  // This function will be called whenever the user edits the form.
  const onFormInputChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  // This function gets fired when the user clicks on the "Login" button.
  const onSubmit = async (event) => {
    try {
      console.log(form)
      //   Here we are passing user details to our emailPasswordLogin
      //   function that we imported from our realm/authentication.js
      //   to validate the user credentials and log in the user into our App.
      const organization = await InsertOrganization(
        form.name,
        form.aboutUs,
        form.address,
        form.telephone,
        form.image,
      )
      if (organization) {
        console.log('organization', organization)
      }
    } catch (error) {
      if (error.statusCode === 401) {
        alert('Invalid username/password. Try again!')
      } else {
        alert(error)
      }
    }
  }

  // This function is called when the user clicks the "Logout" button.
  const logOut = async () => {
    try {
      // Calling the logOutUser function from the user context.
      const loggedOut = await logOutUser()
      // Now we will refresh the page, and the user will be logged out and
      // redirected to the login page because of the <PrivateRoute /> component.
      if (loggedOut) {
        window.location.reload()
      }
    } catch (error) {
      alert(error)
    }
  }
  var fileimage = ''
  // On file select (from the pop up)
  function onFileChange(event) {
    // Update the state
    setFile(event.target.files[0])
    console.log(event.target.files[0])

    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.addEventListener('load', () => {
      form.image = reader.result
      if (form.image)
        document.querySelector('#imagePreview').setAttribute('src', form.image)
      console.log('image', form.image)
    })
  }

  return (
    <>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '300px',
          margin: 'auto',
        }}
      >
        <h1>Login</h1>
        <img id="imagePreview" src={require('./images/Aldi.png')} alt="Aldi" />
        <div>
          <input
            type="file"
            id="image_input"
            accept="image/png , image/jpg"
            onChange={onFileChange}
          />
          {/* <button onClick={this.onFileUpload}>Upload!</button> */}
        </div>

        <TextField
          label="name"
          type="text"
          variant="outlined"
          name="name"
          value={form.name}
          onChange={onFormInputChange}
          style={{ marginBottom: '1rem' }}
        />
        <TextField
          label="AboutUs"
          type="text"
          variant="outlined"
          name="aboutUs"
          value={form.AboutUs}
          onChange={onFormInputChange}
          style={{ marginBottom: '1rem' }}
        />

        <TextField
          label="Telephone"
          type="Tel"
          variant="outlined"
          name="telephone"
          value={form.telephone}
          onChange={onFormInputChange}
          style={{ marginBottom: '1rem' }}
        />
        <TextField
          label="address"
          type="text"
          variant="outlined"
          name="address"
          value={form.address}
          onChange={onFormInputChange}
          style={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          submit
        </Button>
      </form>
      <Button variant="contained" onClick={logOut}>
        Logout
      </Button>
    </>
  )
}
