import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PublishIcon from '@material-ui/icons/Publish';
import CCUPSConfirmationDialog from './CCUPSConfirmationDialog';
import CCUPSProgress from './CCUPSProgress';
import StorageIcon from '@material-ui/icons/Storage';
const CCUPSActionButton = (props) => {
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const{item,isSubmitting,handleSubmit,setSelectedAction}=props;
 
    const onButtonClick=(href)=>{
        // alert(href);
        
        setConfirmationOpen(true);
    }
    const dialogAction=()=>{
        
        // setConfirmationOpen(true);
        // let action=item.type;
        setSelectedAction(item);
        handleSubmit();
    }
    return (
        <div>
            <Button color="secondary" id={item.name} name={item.name} variant= {item.name=='delete'?"text": "contained"} disableElevation  style={{minWidth:100}}
            onClick={()=>onButtonClick(item.href)} 
            startIcon={
                            <>
                            {item.name=='delete'&& <DeleteOutlineIcon/>}
                            {item.name=='update'&& <SystemUpdateAltIcon/>}
                            {item.name=='submit'&& <PublishIcon/>}
                            {item.name=='save'&& <StorageIcon/>}
                            </>
                         
                      }>
                          {item.title}
                          </Button>

                          <CCUPSConfirmationDialog
                                open={confirmationOpen}
                                handleClose={()=>setConfirmationOpen(false)}
                                isSubmitting={isSubmitting}
                                action={dialogAction}
                                message={"Are you sure you want to " + item.title+" this entry, Please Confirm..."}
                        />
                    <CCUPSProgress
                      open={isSubmitting}
                    
                      displayText="Saving Please wait..."
                    />
                    
        </div>
    )
}

export default CCUPSActionButton
