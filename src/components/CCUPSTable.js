import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { SaveAppToLocalStorage, SetSelectedInstitution, getSelfLink } from './CCUPSHelper';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

 
const CCUPSTable = (props) => {
  let history = useHistory();
    const{tableSchema, rows,detailsUrl}=props;
    const classes = useStyles();
const handleSelect=(event,item)=>{
 

SaveAppToLocalStorage(getSelfLink(item));
// SetSelectedInstitution(item.institution);
history.push(detailsUrl);
}


    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" >
          <TableHead>
            <TableRow>
                {tableSchema.map((header,index)=>
                    <TableCell key={index}> {header.displayText}</TableCell>
                )}
             
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map((row,index) => (
              <TableRow key={index} hover onClick={(event) => handleSelect(event, row)}>
                   {tableSchema.map((item,index)=>
                        <TableCell key={index}> {row[item.fieldName]}</TableCell>
                     )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}


CCUPSTable.propTypes = {

    rows:PropTypes.arrayOf(PropTypes.object),
    tableSchema:PropTypes.arrayOf(PropTypes.exact({
        displayText:PropTypes.string,
        fieldName:PropTypes.string,
      })).isRequired,
}
export default CCUPSTable
