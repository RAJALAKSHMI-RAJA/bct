import { useState, useEffect } from "react"
import TableUser from "./TableUser"
import { axiosInstance } from "../api/API"
import { USERLIST } from "../api/apiPath"
import Pagination from "@mui/material/Pagination"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Avatar, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import './Data.css'


const DataGrid = () => {
  const [recordsOptions] = useState([3,4,5])
  const [page, setPage] = useState(1)
  const [noOfRecords, setNoOfRecords] = useState(3)
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState({})
  
  const [open, setOpen] = useState(false)
  const handleClickOpen = (selectedUserData) => {
    setSelectedUser(selectedUserData)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addUser=(user)=>
  {
    user.id=users.length +1;
    setUsers([...users,user]);
  };

  const handleFilter=(e)=>
  {
    let filterData=users.filter((user=>
      {
        return user.firstName.toLowerCase().includes(e.target.value);
      }))
      setUsers (filterData);
  }

 

  const deleteUser=(id)=>
  {
    setUsers(users.filter((user)=>user.id !==id));
  }

  useEffect(() => {
    fetchUsers()
  }, [noOfRecords, page])
  const fetchUsers = async () => {
    try {
      const response = await axiosInstance({
        url: `${USERLIST}?noofRecords=${noOfRecords}&pageLength=${page}&idStarts=${1}`,
        method: "GET",
      })
      if (response.data) {
        setUsers(response.data)
      }
    } catch (error) {
      console.error("fetchEmployeesError", error)
    }
  }

  const handleChange = (event, value) => {
    setPage(value)
  }
  return (
    <div className="datatable-container">
      <TableUser users={users} handleClickOpen={handleClickOpen} addUser={addUser} deleteUser={deleteUser} handleFilter={handleFilter}/>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div className="list-items">
          Show
          <select
            className="n-entries"
            onChange={(event) => setNoOfRecords(event.target.value)}
            value={noOfRecords}
          >
            {recordsOptions.map((r) => (
              <option value={r} key={r}>
                {r}
              </option>
            ))}
          </select>
          entries
        </div>
        <div className="pages">
          <Pagination
            count={Math.ceil(1000 / +noOfRecords)}
            page={page}
            onChange={handleChange}
            color="warning"
          />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="card"
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }} className="card">
            <Avatar src={selectedUser?.imageUrl}  className="card"/>
            <p className="card">
              {selectedUser?.firstName} {selectedUser?.lastName}
            </p>
          </Box>
          <CloseIcon
            onClick={handleClose}
            sx={{ cursor: "pointer", color: "grey" }}
            className="card"
            />
        </DialogTitle>
        <DialogContent className="card">
          <DialogContentText className="card">
            <p className="card">Email - {selectedUser?.email}</p>
            <p className="card">Contact number - {selectedUser?.contactNumber}</p>
            <p className="card">Date of birth - {selectedUser?.dob}</p>
            <p className="card">Age- {selectedUser?.age}</p>
            <p className="card">Address- {selectedUser?.address}</p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DataGrid
