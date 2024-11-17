import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
// import { useMaterialReactTable } from "material-react-table";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/contacts")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/contacts/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const columns = [
    {
      accessorKey: "FirstName",
      header: "First Name",
    },
    {
      accessorKey: "LastName",
      header: "Last Name",
    },
    {
      accessorKey: "Email",
      header: "Email",
    },
    {
      accessorKey: "PhoneNumber",
      header: "Phone Number",
    },
    {
      accessorKey: "Company",
      header: "Company",
    },
    {
      accessorKey: "JobTitle",
      header: "Job Title",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      enableSorting: false,
      enableColumnFilter: false,
      Cell: ({ row }) => (
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <Tooltip title="Edit">
            <IconButton
              color="primary"
              onClick={() => navigate(`/update/${row.original._id}`)}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              color="error"
              onClick={() => handleDelete(row.original._id)}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h4" color="primary">
          User List
        </Typography>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Add User +
          </Button>
        </Link>
      </Box>
      <MaterialReactTable
        columns={columns}
        data={users}
        enableSorting
        enableColumnFilters
        enablePagination={true}
        enableRowActions
        muiTableProps={{
          sx: {
            borderRadius: "8px",
            overflow: "hidden",
          },
        }}
      />
    </Box>
  );
}

export default Users;
