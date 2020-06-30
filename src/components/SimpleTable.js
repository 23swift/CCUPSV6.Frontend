import React, { useEffect, useState } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import { Slide, AppBar, Toolbar, Box, Button, TablePagination, Divider, IconButton, Checkbox, FormControlLabel } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {applicatiionList} from "../testData/ApplicationTestData";
import ProductTableDisplay from './ProductTableDisplay';
import { SetSelectedInstitution, SaveAppToLocalStorage } from './CCUPSHelper';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const StyledTableCell = withStyles((theme) => ({
  root: {
    width: '100%',
    // marginRight:20
  },
    head: {
    //   backgroundColor: theme.palette.common.black,
    backgroundColor:"#054594",
    // backgroundColor:blue[600],
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 300,
   
    color:"#054594",
   marginRight:20
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    color:blue[500],
    minHeight:60,
    // zIndex: theme.zIndex.drawer + 1,
    //  background:theme.palette.background.paper
    background:"#f2f2f2"
    
  },
  paginationTool:{
    color:theme.palette.secondary.main,
  },
  container: {
    maxHeight: 480,
    // padding:10,
    // paddingTop:15,
    // paddingBottom:20,
  //  borderRadius:20
    // maxWidth:800
    
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = applicatiionList;

export default function SimpleTable() {
  const classes = useStyles();
  const [selectAll, setSelectAll] = useState(false)
  let history = useHistory();
const [dataRows, setDataRows] = useState(null);
const [selected, setSelected] = React.useState([]);
const handleClick = (event, item) => {
 
  SaveAppToLocalStorage(item);
  SetSelectedInstitution(item.institution);
  history.push('/applicationForm');

}

const handleSelectAll=()=>{
  setSelectAll(!selectAll);
}
const handleSelectAllClick = (event) => {
  setSelectAll(!selectAll);
  if (!selectAll) {
    const newSelecteds = dataRows.map((n) => n.id);
    setSelected(newSelecteds);
    return;
  }
  setSelected([]);
};
const handleCheck = (event, id) => {
  const selectedIndex = selected.indexOf(id);
  let newSelected = [];
// setSelectAll(true);





  if (selectedIndex === -1) {
    
    newSelected = newSelected.concat(selected, id);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1),
    );
  }
  console.log(selected.length);
console.log(dataRows.length);
  if(dataRows.length === selected.length){setSelectAll(true) }else{setSelectAll(false)}
  setSelected(newSelected);
  
};
const isSelected = (id) => selected.indexOf(id) !== -1;
  useEffect(() => {
    fetch("/api/applications")
      .then(res => res.json())
      .then(
        (result) => {
         
          // console.log(result._embedded.applications);
          setDataRows(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          // setError(error);
          console.log(error);
          
        }
      )
  }, [])

  return (
   
<>
 <TableContainer component={Paper} elevation={1}  className={classes.container} >
      <Table className={classes.table} aria-label="simple table" size="small"
      stickyHeader>
        <TableHead  >
          <TableRow style={{backgroundColor:blue[500]}}>
          <TableCell>
          {/* <FormControlLabel  classes={{
            label:{fontSize:10}
          }}
              control={<Checkbox  
                color="secondary"
                checked={selectAll} 
                onChange={  } 
                name="selectAll" />}
              label="Select All"
            /> */}

            <IconButton color="inherit" onClick={handleSelectAllClick}>
                {selectAll ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon/>}
            </IconButton>
          </TableCell>
            <TableCell>Card Number</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Institution</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Reference</TableCell>
            <TableCell align="left"></TableCell>
            {/* <TableCell align="left">Merchant</TableCell> */}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows && dataRows.map((row,index) => 
          
          {  const isItemSelected = isSelected(row.id);
            return (
             
            <TableRow key={index} 
            hover  onClick={(event) => handleCheck(event, row.id)}
            > 
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
               <TableCell align="left">
                 <Checkbox checked={isItemSelected}/>
               </TableCell>
              <TableCell align="left">{row['card_number']}</TableCell>
              <TableCell align="left">{row.first_name + ' ' +row.last_name}</TableCell>
              <TableCell align="left">{row.institution.name}</TableCell>
              <TableCell align="left">
               {row.product.name}
                </TableCell>
              <TableCell align="left">{row.reference_no}</TableCell>
              <TableCell align="left">
                <IconButton color="primary" size="small" onClick={(event)=>handleClick(event,row)}>
                   <MoreHorizIcon />
                </IconButton>
                   
                </TableCell>
              {/* <TableCell align="left">{row.merchant}</TableCell> */}
              
            </TableRow>
          )}
          )}
        </TableBody>
      </Table>
     
    </TableContainer>
   
     {/* <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={700}>
     <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <Divider/>
         <TablePagination  rowsPerPageOptions={[5, 10, 20]} component="div" count={20} rowsPerPage={10}
                 page={1}  backIconButtonProps={{ 'aria-label': 'previous page' }}
                 nextIconButtonProps={{ 'aria-label': 'next page', }}
                 classes={{ toolbar:classes.paginationTool }}
                 // onChangePage={handleChangePage}
                 // onChangeRowsPerPage={handleChangeRowsPerPage}
               />
 </AppBar>
  
 </Slide> */}
 </>
  );
}
