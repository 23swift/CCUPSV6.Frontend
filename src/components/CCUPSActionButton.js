import React from 'react'
import { Button } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PublishIcon from '@material-ui/icons/Publish';
const CCUPSActionButton = (props) => {
    const{onClick,title,item}=props;
    return (
        <div>
            <Button color="secondary" id={item.name} name={item.name} variant= {item.name=='delete'?"text": "contained"} disableElevation  style={{minWidth:100}}
            onClick={onClick}
            startIcon={
                            <>
                            {item.name=='delete'&& <DeleteOutlineIcon/>}
                            {item.name=='update'&& <SystemUpdateAltIcon/>}
                            {item.name=='submit'&& <PublishIcon/>}
                            </>
                         
                      }>
                          {item.title}
                          </Button>
        </div>
    )
}

export default CCUPSActionButton
