import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector} from "react-redux";

const ExpensesTable = () => {
    const tasks = useSelector(s => s.tasks.tasks)

    return(
      <>
          {
              tasks.length ? <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead sx={{backgroundColor:"lightblue"}}>
                              <TableRow>
                                  <TableCell>Дата</TableCell>
                                  <TableCell align="right">На что потратил</TableCell>
                                  <TableCell align="right">Сумма</TableCell>
                                  <TableCell align="right">Удалить</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {tasks.map((row, idx) => (
                                  <TableRow
                                      key={idx}
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                      <TableCell component="th" scope="row">
                                          {row.date}
                                      </TableCell>
                                      <TableCell align="right">{row.title}</TableCell>
                                      <TableCell align="right">{row.amount}</TableCell>
                                      <TableCell align="right">
                                          Delete
                                      </TableCell>

                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </TableContainer> : <h2>Список пуст</h2>
          }
      </>
    )
}

export default ExpensesTable