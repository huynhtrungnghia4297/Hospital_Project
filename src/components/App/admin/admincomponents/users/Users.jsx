import React, { useState } from "react";
import "../users/User.css";

const initialUsers = [
  {
    stt: "1",
    id: "#user001",
    name: "Dr. Johen Doe",
    role: "Doctor",
    gendar: "Male",
    phone: "0903654522",
    dateofbirth: "1995-05-01",
    address: "HCM",
  },
  {
    stt: "2",
    id: "#user002",
    name: "Dr. Mbappe",
    role: "Doctor",
    gendar: "Male",
    phone: "090362512",
    dateofbirth: "1999-05-06",
    address: "HCM",
  },
  {
    stt: "3",
    id: "#user003",
    name: "Kylyan Messi",
    role: "Patient",
    gendar: "Male",
    phone: "0922122344",
    dateofbirth: "01/05/2000",
    address: "HCM",
  },
  {
    stt: "4",
    id: "#user004",
    name: "Dr. Ronaldo",
    role: "Receipt",
    gendar: "Male",
    phone: "0905236226",
    dateofbirth: "12/04/1996",
    address: "HCM",
  },
  {
    stt: "5",
    id: "#user005",
    name: "Dr. Neymar",
    role: "Doctor",
    gendar: "Male",
    phone: "0903233322",
    dateofbirth: "05/02/1992",
    address: "HCM",
  },
  // Bạn có thể thêm nhiều user hơn để test phân trang
];

const User = () => {
  const [toast, setToast] = useState({ show: false, message: "" });
  const showToast = (msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 3000);
  };

  const [users, setUsers] = useState(initialUsers);
  const [showPopup, setShowPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    name: "",
    role: "",
    gendar: "Male",
    phone: "",
    dateofbirth: "",
    address: "",
  });

  // --- PHÂN TRANG ---
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(users.length / rowsPerPage);

  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`btn btn-sm me-1 ${
            currentPage === i ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination mt-3">
        <button
          className="btn btn-sm btn-outline-primary me-1"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages}
        <button
          className="btn btn-sm btn-outline-primary ms-1"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  // --- XỬ LÝ THÊM SỬA XÓA USER ---
  const handleAdd = () => {
    setCurrentUser({
      id: "",
      name: "",
      role: "",
      gendar: "Male",
      phone: "",
      dateofbirth: "",
      address: "",
    });
    setShowPopup(true);
  };

  const handleEdit = (id) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      setCurrentUser(user);
      setShowPopup(true);
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      setUsers(users.filter((u) => u.id !== id));
      showToast("User deleted successfully!");
      // Nếu xóa user mà trang hiện tại vượt tổng trang mới thì quay về trang cuối cùng
      if ((users.length - 1) / rowsPerPage < currentPage - 1) {
        setCurrentPage(totalPages - 1);
      }
    }
  };

  const handleSave = () => {
    if (currentUser.id) {
      setUsers(users.map((u) => (u.id === currentUser.id ? currentUser : u)));
      showToast("User updated successfully!");
    } else {
      const newId = "#user" + String(users.length + 1).padStart(3, "0");
      setUsers([...users, { ...currentUser, id: newId }]);
      showToast("User added successfully!");
    }
    setShowPopup(false);
  };

  return (
    <section className="content">
      <div className="row">
        <div className="col-12">
          <div className="box">
            <div className="box-header d-flex justify-content-between align-items-center">
              <h4 className="box-title">User Management</h4>
              <button className="btn btn-primary" onClick={handleAdd}>
                Add User
              </button>
            </div>
            <div className="box-body">
              <div className="table-responsive rounded card-table">
                <table className="table border-no">
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Gender</th>
                      <th>Phone</th>
                      <th>DOB</th>
                      <th>Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td>{user.gendar}</td>
                        <td>{user.phone}</td>
                        <td>{user.dateofbirth}</td>
                        <td>{user.address}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-info me-2"
                            onClick={() => handleEdit(user.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                    {currentUsers.length === 0 && (
                      <tr>
                        <td colSpan="8" className="text-center">
                          No users found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* Hiển thị phân trang */}
              {renderPagination()}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h4>{currentUser.id ? "Edit User" : "Add User"}</h4>

            {/* ID */}
            <div className="form-group">
              <label>User ID</label>
              <input
                type="text"
                className="form-control"
                value={currentUser.id}
                disabled // ID không sửa được
              />
            </div>

            {/* Name */}
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={currentUser.name}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, name: e.target.value })
                }
              />
            </div>

            {/* Role */}
            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                className="form-control"
                value={currentUser.role}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, role: e.target.value })
                }
              />
            </div>

            {/* Gender */}
            <div className="form-group">
              <label>Gender</label>
              <select
                className="form-control"
                value={currentUser.gendar}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, gendar: e.target.value })
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                value={currentUser.phone}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, phone: e.target.value })
                }
              />
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                value={currentUser.dateofbirth}
                onChange={(e) =>
                  setCurrentUser({
                    ...currentUser,
                    dateofbirth: e.target.value,
                  })
                }
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                value={currentUser.address}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, address: e.target.value })
                }
              />
            </div>

            <div className="d-flex justify-content-end">
              <button
                className="btn btn-secondary me-2"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thông báo toast */}
      {toast.show && <div className="toast-notification">{toast.message}</div>}
    </section>
  );
};

export default User;
