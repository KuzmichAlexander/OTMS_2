import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, first, second, third, forth, fifth, sixth, seventh, eighth, ninth) {
  return { name, first, second, third, forth, fifth, sixth, seventh, eighth, ninth };
}

const resultRows = new Array(9).fill(0).map((_, index) => index / 2);



export default function BasicTable({props}) {
  const classes = useStyles();
  console.log(props);

  const rows = [
    createData('Относительная высота', ...props.line1),
    createData(<img src="https://sun9-31.userapi.com/dPgPnJH4AOsOgvo2iUFgQq72hOltAcesZa__KQ/FXmtU8mxV8c.jpg" alt="line1"/>, ...props.line2),
    createData(<img src="https://sun9-11.userapi.com/wGxlxXxdnpylcBWLIuQMaFKqoJTDjHeSldONWA/qZxS0v5GJGk.jpg" alt=""/>, ...props.line3),
    createData(<img src="https://sun9-58.userapi.com/NM6-VE6nISJ_apmsjv3HetVAORFnjwm4Yfbz1A/n_htmr5GwV0.jpg" alt=""/>, ...props.line4),
    createData(<img src="https://sun9-61.userapi.com/E4kX5tL8sfakMUxgLIpmuLUHukoQfGTQuyzytg/HRjB1q-W00A.jpg" alt=""/>, ...props.line5),
    createData(<img src="https://sun9-73.userapi.com/Uwk4Rzkl3YBgqA53hrqoyLw6F_JKv8UDtBjbhA/Jf7wvua2JM8.jpg" alt=""/>, ...props.line6),
    createData(<img src="https://sun9-19.userapi.com/ic9NyPb5nCrEcoflvihi4tOAYxOmWkEJaXvxew/CGyRUP6Vkbw.jpg" alt=""/>, ...props.line7),
    createData('Разность температур', ...props.line8),
  ];

  return (
    <TableContainer component={Paper}>
        
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Координаты, м</TableCell>
            {resultRows.map((item, index) => <TableCell key={index} align="center">{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.first}</TableCell>
              <TableCell align="center">{row.second}</TableCell>
              <TableCell align="center">{row.third}</TableCell>
              <TableCell align="center">{row.forth}</TableCell>
              <TableCell align="center">{row.fifth}</TableCell>
              <TableCell align="center">{row.sixth}</TableCell>
              <TableCell align="center">{row.seventh}</TableCell>
              <TableCell align="center">{row.eighth}</TableCell>
              <TableCell align="center">{row.ninth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}