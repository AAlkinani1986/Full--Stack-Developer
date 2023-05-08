import '../../src/App.css'
import { useState } from 'react'
import { App } from 'realm-web'
import { APP_ID } from '../realm/constants'
import { useContext } from 'react'
import { UserContext } from '../contexts/user.context'
export default function Organizations() {
  const app = new App(APP_ID)
  const [restaurants, setRestaurants] = useState([])

  async function getData() {
    const rests = app.currentUser
      .mongoClient('mongodb-atlas')
      .db('Fortify')
      .collection('Organizations')
    setRestaurants(await rests.find())
  }
  getData()
  //   function onDeleteButtonClicked() {}
  return (
    <table className="striped ">
      <thead>
        <tr>
          <th>Name</th>
          <th>about</th>
          <th>telephone</th>
          <th>address</th>
        </tr>
      </thead>

      <tbody id="tbody">
        {restaurants.map((rest, key) => (
          <tr key={key}>
            <td>{rest.image && <img src={rest.image} alt={rest.name} />}</td>

            <td>{rest.name}</td>
            <td>{rest.aboutUs}</td>
            <td>{rest.telephone}</td>
            <td>{rest.address}</td>
            <td>
              {rest.organization_id === app?.currentUser?.id && (
                <button
                  //   onClick={onDeleteButtonClicked()}
                  className="btn waves-effect waves-light red"
                >
                  delete
                </button>
              )}
            </td>

            <td> {app?.currentUser?.id}</td>
            <td> {rest.organization_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
