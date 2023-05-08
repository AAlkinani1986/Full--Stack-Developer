import { App } from 'realm-web'
import { APP_ID } from '../realm/constants'

export default function DataOrganization() {
  const app = new App(APP_ID)

  const getAllOrganizations = app.currentUser
    .mongoClient('mongodb-atlas')
    .db('Fortify')
    .collection('Organizations')
    .find()

  let tbody = document.onload.getElementById('tbody')
  tbody.innerHTML = 'aaa'
  let data1 = ''
  const getAllOrg = getAllOrganizations.then((data) => {
    data.map((organization) => {
      data1 += ` <tr>
            <td>${organization.name}</td>
            <td>${organization.aboutUs}</td>
            <td>${organization.address}</td>
            <td>${organization.telephone}</td>
            <td> <button onclick="onDeleteButtonClicked()"type="button" class="btn btn-danger" disabled=${
              organization.organization_id === app?.currentUser?.id
                ? false
                : true
            }> delete</button></td>
          </tr>

`
    })
    if (data1) {
      console.log(data1)
      tbody.innerHTML = data1
    }

    console.log(getAllOrg)
  })
}
