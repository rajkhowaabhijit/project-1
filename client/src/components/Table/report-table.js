import React from 'react'
import {Paper, makeStyles,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import SimpleBadge from '../../atom/Badge/badge'

const useStyles = makeStyles(theme=>({
  table: {
    minWidth: 650,
  },
  tableHead: {
      color: "#bdbdbd",
  },
  data: {
      fontWeight: "bold"
  }
}))

// const createData = (email, deliveredTo, senderIP, SPF, senderScore, blackList, deliveredIn) => {
//   return { email, deliveredTo, senderIP, SPF, senderScore, blackList, deliveredIn }
// }


// const rows = [
//     // createData(props.email, props.deliveredTo, props.senderIP, props.SPF, props.senderScore, props.blackList, props.deliveredIn),
//     createData('ronnie_abs@gmail.com', 'inbox', '127.0.0.1', 'pass', 90, 90, '10/20/2020'),
//     createData('ronnie_abs@gmail.com', 'inbox', '127.0.0.1', 'pass', 90, 90, '10/20/2020'),
//     createData('ronnie_abs@gmail.com', 'inbox', '127.0.0.1', 'pass', 90, 90, '10/20/2020'),
//     createData('ronnie_abs@gmail.com', 'inbox', '127.0.0.1', 'pass', 90, 90, '10/20/2020'),
// ]

const ReportTable = props => {

  const classes = useStyles()

  return (
        <TableContainer components={{
            Container: props => <Paper {...props} elevation={0}/>
        }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.tableHead}>Email</TableCell>
                        <TableCell align="center" className={classes.tableHead}>Delivered To</TableCell>
                        <TableCell align="center" className={classes.tableHead}>Sender IP</TableCell>
                        <TableCell align="center" className={classes.tableHead}>SPF</TableCell>
                        <TableCell align="center" className={classes.tableHead}>Sender Score</TableCell>
                        <TableCell align="center" className={classes.tableHead}>Black List</TableCell>
                        <TableCell align="center" className={classes.tableHead}>Delivered In</TableCell>
                        <TableCell align="center" className={classes.tableHead}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={row.email}>
                            <TableCell component="th" scope="row" className={classes.data}>
                                {row.email}
                            </TableCell>
                            <TableCell align="center" className={classes.data}>{
                                row.deliveredTo === "inbox"? (<SimpleBadge name = {row.deliveredTo} color="#5b009a" bgcolor="#5b009a26" />)
                                : row.deliveredTo === "spam"? (<SimpleBadge name = {row.deliveredTo} color="#eb5757" bgcolor="#eb575726" />)
                                : row.deliveredTo === "undelivered"? (<SimpleBadge name = {row.deliveredTo} color="#bdbdbd" bgcolor="#bdbdbd26" />)
                                : row.deliveredTo === "tabs" || row.deliveredTo === "newsletter"? (<SimpleBadge name = {row.deliveredTo} color="#f2994a" bgcolor="#f2994a26" />) : row.deliveredTo 
                            }</TableCell>
                            <TableCell align="center" className={classes.data}>{row.senderIP}</TableCell>
                            <TableCell align="center" className={classes.data}>{<SimpleBadge name = {row.SPF} color="#5b009a" bgcolor="#5b009a26" />}</TableCell>
                            <TableCell align="center" className={classes.data}>{<SimpleBadge name = {row.senderScore} color="#5b009a" bgcolor="#5b009a26" />}</TableCell>
                            <TableCell align="center" className={classes.data}>{<SimpleBadge name = {row.blackList} color="#5b009a" bgcolor="#5b009a26" />}</TableCell>
                            <TableCell align="center" className={classes.data}>{row.deliveredIn}</TableCell>
                            <TableCell align="center" className={classes.data}>
                                <IconButton>
                                    <MoreVert />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
  )
}

export default ReportTable