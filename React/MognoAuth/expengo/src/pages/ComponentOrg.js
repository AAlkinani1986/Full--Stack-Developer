import { App } from 'realm-web'
import { APP_ID } from '../realm/constants'

export default function ComponentOrg() {
  let orgAll = [{ 1: 1 }, 2, 3, 4, 4]

  const app = new App(APP_ID)

  const getAllOrganizations = app.currentUser
    .mongoClient('mongodb-atlas')
    .db('Fortify')
    .collection('Organizations')
    .find()
    .then((data) => {
      return data
    })

  console.log(getAllOrganizations)

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
        <tr>
          <td>{orgAll.name}</td>
          <td>{orgAll.about}</td>
          <td></td>
          <td>s</td>
        </tr>
      </tbody>
    </table>
  )
}
