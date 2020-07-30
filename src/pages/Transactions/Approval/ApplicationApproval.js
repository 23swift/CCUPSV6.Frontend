import React, { useState, useEffect } from 'react'
import PageHeader from '../../../components/PageHeader';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import CCUPSTable from '../../../components/CCUPSTable';
import { Box } from '@material-ui/core';
import { getResource } from '../../../components/CCUPSHelper';
import { callApi } from '../../../components/CCUPSApiService';


const   tableSchema=[{displayText:'Card Number',fieldName:'cardNumber'},
{displayText:'Name',fieldName:'name'},
{displayText:'Institution',fieldName:'institutionName'},
{displayText:'Product',fieldName:'product'},
{displayText:'Reference',fieldName:'referenceNo'},
{displayText:'Status',fieldName:'status'}
]
const ApplicationApproval = () => {

    const [rows, setRows] = useState([]);
    useEffect(() => {
        // fetch('/api/data/profile');
        // RemoveAppToLocalStorage();
        //   callApi( process.env.REACT_APP_REST_DATA+'/applications/search/findAllApplicationsForApproval').then(data=>{
        //     setRows(data.content);
        //   });
          getResource('applications').then(href=>{
            callApi(href+'/search/findAllApplicationsForApproval?projection=applicationWithInstitution').then(data=>{
              setRows(data.content);
            });
          });
      }, [])
    return (
        <div>
            <PageHeader  title="Application Approval" icon={faDatabase}/>
            <Box mr={2} ml={2}>
         
         <CCUPSTable tableSchema={tableSchema} rows={rows} detailsUrl="/applicationApprovalForm" />
       </Box>
        </div>
    )
}

export default ApplicationApproval
