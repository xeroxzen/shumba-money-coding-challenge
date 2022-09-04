import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Recipients({ id }) {
  const [recipients, setRecipients] = useState({});
  const sendRequests = async () => {
    const res = await axios
      .get("http://localhost:5001/api/v1/recipients/")
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    // console.log(JSON.stringify(data, null, 2));
    return data;
  };

  const deleteRecipient = async () => {
    const res = await axios
      .delete(`http://localhost:5001/api/v1/recipients/${id}`)
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    console.log(JSON.stringify(data, null, 2));
    return data;
  };

  const handleDelete = () => {
    try {
      deleteRecipient().then(() =>
        console.log("Recipient deleted successfully")
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sendRequests().then((data) => setRecipients(data.recipients));
  }, []);

  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Full name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Country</StyledTableCell>
              <StyledTableCell align="right">City/Town</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(recipients)
              ? recipients.map((recipient, index) => (
                  <StyledTableRow id={recipient._id} key={index}>
                    <StyledTableCell component="th" scope="row">
                      {recipient.firstName} {recipient.middleName}{" "}
                      {recipient.lastName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recipient.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recipient.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recipient.countryOfResidence}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recipient.cityOrTown}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <CreateRoundedIcon color="primary" />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <DeleteForeverRoundedIcon onClick={handleDelete}  color="warning" />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
