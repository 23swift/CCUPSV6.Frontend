import React from 'react'
import PageHeader from '../../../components/PageHeader'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { Box, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';


import AddIcon from '@material-ui/icons/Add';
import EnrollmentList from './component/EnrollmentList';
import CCUPSPageContent from '../../../components/CCUPSPageContent';
const InstitutionEnrollment = () => {
    return (
        <div>
            <PageHeader icon={faDatabase} title="Institution Enrollment"
            tools={
                <Box display="flex" flexDirection="row">
                <Box flexGrow={1}></Box>
                <Box mr={1}>
                    <Button
                    color="secondary"
                    variant="outlined"
                    startIcon={<SearchIcon />}
                    size="small"
                    >
                    Search
                    </Button>
                    
            </Box>
            <Box>
                <Button variant="contained" size="small" color="secondary" disableElevation startIcon={<AddIcon/>}
                >Create Enrollment</Button>

              
            </Box></Box>
            }
            />
            <CCUPSPageContent>
                <EnrollmentList/>
            </CCUPSPageContent>
            
        </div>
    )
}

export default InstitutionEnrollment
