import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from "@material-ui/core"

const Import = (props) => {
    return (
        <div>
          <p>Import Component</p>
          <Button variant="contained" color="primary" onClick={props.fetchMakes}>
          Import
          </Button>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Make&nbsp;</TableCell>
                <TableCell align="right">Actions&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {props.makes.map(row => (
            <TableRow key={row.MakeId}>
              <TableCell component="th" scope="row">
                {row.MakeId}
              </TableCell>
              <TableCell align="right">{row.MakeId}</TableCell>
              <TableCell align="right">{row.MakeName}</TableCell>
              <TableCell align="right">{row.Actions}</TableCell>
            </TableRow>
          ))}
            </TableBody>
          </Table>
        </div>
    )
}

export default Import