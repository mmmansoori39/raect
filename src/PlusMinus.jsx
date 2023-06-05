import React, { useEffect, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function PlusMinus(){
    const [num, upnum]= useState(0);
    const [msg, setmsg]= useState();
    useEffect(()=>{
        // document.body.style.backgroundColor='red'
        document.title=`I am clicked ${num}times`
    }, )
    const incnum= () =>{
        upnum(num + 1)
        setmsg('')

    }
    const decnum= () =>{
        if(num>0){
            upnum(num - 1)
            setmsg('')
        }
        else{
            // alert('You have reahced minimum value')
            setmsg('You have reahced minimum value')
            document.title=`Rukja burbak`
        }
    }
    return(
        <>
            <div className="plusminus">
                <h3>Plus Minus</h3>
                <h1>{num}</h1>
                <span>
                    <Tooltip title="Add">
                    <Button onClick={incnum}> <AddCircleIcon /> </Button>
                    </Tooltip>
                    <Tooltip title="Sub">
                    <Button onClick={decnum}> <RemoveCircleIcon /></Button>
                    </Tooltip>
                </span>
                <p>{msg}</p>
            </div>
        </>
    );
}
export default PlusMinus;