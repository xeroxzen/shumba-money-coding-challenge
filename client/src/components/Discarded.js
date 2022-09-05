// <Container maxWidth="lg">
//   <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 700 }} aria-label="customized table">
//       <TableHead>
//         <TableRow>
//           <StyledTableCell>Full name</StyledTableCell>
//           <StyledTableCell align="right">Email</StyledTableCell>
//           <StyledTableCell align="right">Phone Number</StyledTableCell>
//           <StyledTableCell align="right">Country</StyledTableCell>
//           <StyledTableCell align="right">City/Town</StyledTableCell>
//           <StyledTableCell align="right">Edit</StyledTableCell>
//           <StyledTableCell align="right">Delete</StyledTableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {Array.isArray(recipients)
//           ? recipients.map((recipient, index) => (
//               <StyledTableRow id={recipient._id} key={index}>
//                 <StyledTableCell component="th" scope="row">
//                   {recipient.firstName} {recipient.middleName}{" "}
//                   {recipient.lastName}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">
//                   {recipient.email}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">
//                   {recipient.phoneNumber}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">
//                   {recipient.countryOfResidence}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">
//                   {recipient.cityOrTown}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">
//                   <Button
//                     label="Edit"
//                     className="p-button-info p-button-raised"
//                   />
//                 </StyledTableCell>
//                 <StyledTableCell align="right">
//                   <Button
//                     onClick={handleDelete}
//                     label="Delete"
//                     className="p-button-raised p-button-danger"
//                   />
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))
//           : null}
//       </TableBody>
//     </Table>
//   </TableContainer>
// </Container>
