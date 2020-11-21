import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(first, second, third, forth, fifth) {
  return { first, second, third, forth, fifth };
}

const resultRows = [
    'Площадь поперечного сечения аппарата', 
    'Расход газа', 
    'Отношение теплоемкостей потоков', 
    'Полная относительная высота слоя ', 
    'большая формула' 
]



export default function BasicTable({props}) {
  const classes = useStyles();
  console.log(props);

  const rows = [
    
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {resultRows.map((item, index) => <TableCell key={index} align="center">{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell align="center">{props.poperechnyiSquare}1</TableCell>
              <TableCell align="center">{props.gasEaten}1</TableCell>
              <TableCell align="center">{props.heatRatio}1</TableCell>
              <TableCell align="center">{props.fullHightLayar}1</TableCell>
              <TableCell align="center">{props.hardExpression}1</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}