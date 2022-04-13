import * as React from 'react';
import { Button } from '@mui/material';
import { KeySharp } from '@mui/icons-material';
export const FilterList = ({ filterKeys }) => {
    const [keys, setKeys] = React.useState([]);
    
    const setItems = () => {
        filterKeys.map((item) => {
            setKeys([...keys, item.name])
        }

        )

    }
    React.useEffect(() => {
     setItems();
    }, [])
    const handleSelectedKey=()=>{

    }
    return (

        filterKeys.map(
            (item) => {
                return (
                    <>
                        <Button variant="outlined" onClick={handleSelectedKey}>{item.text}</Button>

                    </>
                )

            })


    )
}
