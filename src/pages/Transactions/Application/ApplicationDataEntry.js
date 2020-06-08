import React from 'react'

import { faParagraph, faFileAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { IconButton, Button, Box, Fab, TextField, Paper, Avatar, makeStyles, Divider, fade, InputBase } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { blue, amber, grey } from '@material-ui/core/colors';
import SimpleTable from '../../../components/SimpleTable';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import meralcoLogo from '../../../img/meralco.png'
import smartLogo from '../../../img/smart-logo.png'
import manilaWaterLogo from '../../../img/manilaWater.jpeg'
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import customTheme from '../../../components/theme/customTheme';
import HomeIcon from '@material-ui/icons/Home';
import PageHeader from '../../../components/PageHeader';
import InstitutionSelection from '../../../components/InstitutionSelection';

const useStyles = makeStyles((theme) => ({

  MuiAvatarRoot: {
   
    // opacity:0,
    "&:hover":{
      opacity:.8,
      // boxShadow:
      // "0 13px 35px -9px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 5px 7px -2px rgba(0, 0, 0, 0.2)",
  }
    },
    closeIcon:{
      //  color:fade(theme.palette.common.black,0.1)
      color:theme.palette.secondary.light
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      
      // backgroundColor: fade(theme.palette.common.black, 0.1),
      // backgroundColor:"rgba(0, 0, 0, 0.04)",
      backgroundColor: fade(theme.palette.secondary.main, 0.1),
      '&:hover': {
        backgroundColor: fade(theme.palette.secondary.main, 0.12),
        // backgroundColor: fade("rgba(0, 0, 0, 0.04)", 0.1),
        // backgroundColor:"rgba(0, 0, 0, 0.04)"
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.secondary.main,
      
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      // width: '100%',
     
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    inputRoot: {
      // color: 'inherit',
      
    },
}));
const ApplicationDataEntry = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const institutions = [{avatar:  <img src={smartLogo} style={{height:50,width:120, borderRadius:4}}/>,name:'SMART'},
   {avatar: <img src={meralcoLogo} style={{height:60,borderRadius:4}}/>,name:'MERALCO'},
   {avatar: <img src={manilaWaterLogo} style={{height:60,borderRadius:4}}/>,name:'MANILA WATER'}];
   
  const [selectedValue, setSelectedValue] = React.useState(institutions[1].name);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
    return (
      <div>
        <PageHeader
          title="Application Data Entry"
          //   icon={faFileAlt}
          tools={
            <Box display="flex" flexWrap="nowrap" mt={1} pb={1}>
              <Box>
                <Button onClick={handleClickOpen}  style={{ minWidth: 30,minHeight:30,padding:2 }}>
                  Select Institution
                </Button>
              </Box>
              <Box mr={1}>
                <Button
                  color="secondary"
                  variant="outlined"
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  Search
                </Button>
                {/* <div className={classes.search}>
                  <div  className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Card Number here..." 
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "Card Number" }}
                  />
                </div> */}
              </Box>

              <Box mr={1}>
                <Button color="secondary" startIcon={<AddIcon />} variant="contained"
                  size="small" component={Link} to="/applicationForm" >
                  Add New Application
                </Button>
                {/* <IconButton color="inherit" >
                    <AddIcon  />
                   
                  </IconButton> */}
              </Box>
              <Box mr={1}>
                <Divider orientation="vertical" />
              </Box>
              <Box mr={1}>
                {/* <IconButton component={Link} to="/" size="small">
                  <CloseIcon />
                </IconButton> */}
                <Button variant="outlined" color="secondary"
                  component={Link}
                  to="/"
                  size="small"
                  style={{ minWidth: 40 }}
                >
                  <HomeIcon  />
                </Button>
              </Box>
             
            </Box>
          }
        />

        <Box mr={2} ml={1}>
          <SimpleTable />
        </Box>
        <InstitutionSelection selectedValue={selectedValue} open={open} onClose={handleClose} institutions={institutions} />
      </div>
    );
}

export default ApplicationDataEntry
