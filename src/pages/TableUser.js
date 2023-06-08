import React from "react"
import "./TableUser.css"
import {BiAddToQueue} from "react-icons/bi"
import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete}  from "react-icons/ai"

const UserTable = (props) => {
  const { handleClickOpen } = props
  return (
    <>
      <div className="header-tools">
        <div className="tools">
          <ul>
            <li>
              <button>
                <i className="material-icons"><BiAddToQueue/></i>
              </button>
            </li>
            <li>
              <button>
                <i className="material-icons"><AiFillEdit/></i>
              </button>
            </li>
            <li>
              <button>
                <i className="material-icons"><AiFillDelete/></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="search">
          <input
            type="search"
            className="search-input"
            placeholder="Search..."
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
          </tr>
        </thead>
        {props.users.length > 0 ? (
          <tbody>
            {props.users.map((user) => (
              <tr key={user.id} onClick={() => handleClickOpen(user)}>
                <td>
                  <div className="image-container">
                    <img
                      src={user.imageUrl}
                      alt={"user"}
                      className="user-img"
                    />
                  </div>
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.contactNumber}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>{user.age}</td>
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
