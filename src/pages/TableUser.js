import React from "react"
import "./TableUser.css"
import {AiFillEdit} from "react-icons/ai"
import FormDialog from "./AddUser"
import Delete from "./Delete"


const UserTable = (props) => {
  const { handleClickOpen , addUser , deleteUser } = props

 
 
  return (
    <>
      <div className="header-tools">
        <div className="tools">
          <ul>
            <li><FormDialog addUser={addUser}/></li>
          </ul>
        </div>

        <div className="search">
          <input
            type="search"
            className="search-input"
            placeholder="Search..."
            onChange={(e)=>props.handleFilter(e)}
          />
        </div>
      </div>

      <table className="datatable">
        <thead>
          <tr>
            <th>Image</th>
            <th>First name</th>
            <th>Last name</th>
            <th>contact Number</th>
            <th>Email</th>
            <th>dob</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        {props.users.length > 0 ? (
          <tbody>
            {props.users.map((user) => (
              <tr key={user.id} >
                <td onClick={() => handleClickOpen(user)}>
                  <div className="image-container">
                    <img
                      src={user.imageUrl}
                      alt={"user"}
                      className="user-img"
                    />
                  </div>
                </td>
                <td onClick={() => handleClickOpen(user)}>{user.firstName}</td>
                <td onClick={() => handleClickOpen(user)}>{user.lastName}</td>
                <td onClick={() => handleClickOpen(user)}>{user.contactNumber}</td>
                <td onClick={() => handleClickOpen(user)}>{user.email}</td>
                <td onClick={() => handleClickOpen(user)}>{user.dob}</td>
                <td onClick={() => handleClickOpen(user)}>{user.age}</td>
                <td><Delete id={user.id} deleteUser={deleteUser}/></td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tr>NO USER FOUND</tr>
        )}
      </table>

      {/* <div className="footer-tools">
    <div className="list-items">
      Show
      <select name="n-entries" id="n-entries" className="n-entries">
        <option value="5">5</option>
        <option value="10" selected>10</option>
        <option value="15">15</option>
      </select>
      entries
    </div>

    <div className="pages">
      <ul>
        <li><span class="active">1</span></li>
        <li><button>2</button></li>
        <li><button>3</button></li>
        <li><button>4</button></li>
        <li><span>...</span></li>
        <li><button>9</button></li>
        <li><button>10</button></li>
      </ul>
    </div>
  </div> */}
    </>
  )
}

export default UserTable
