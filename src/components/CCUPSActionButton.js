import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PublishIcon from '@material-ui/icons/Publish';
import CCUPSConfirmationDialog from './CCUPSConfirmationDialog';
import CCUPSProgress from './CCUPSProgress';
const CCUPSActionButton = (props) => {
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const{item,handleClose,action,message,isSubmitting,handleSubmit}=props;
 
    const onButtonClick=(href)=>{
        // alert(href);
        
        setConfirmationOpen(true);
    }
    const dialogAction=()=>{
        console.log(item);
        // setConfirmationOpen(true);
        let action=item.type;
        handleSubmit({action:action});
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
                            {item.name=='save'&& <SystemUpdateAltIcon/>}
                            </>
                         
                      }>
                          {item.title}
                          </Button>

                          <CCUPSConfirmationDialog
                                open={confirmationOpen}
                                handleClose={()=>setConfirmationOpen(false)}
                                isSubmitting={isSubmitting}
                                action={dialogAction}
                                message="Saving your entry, Please Confirm..."
                        />
                    <CCUPSProgress
                      open={isSubmitting}
                    
                      displayText="Saving Please wait..."
                    />
                    
        </div>
    )
}

export default CCUPSActionButton
