import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';


function TemperatureConverter() {
    const [celsius, setCelsius] = useState(-40);
    const [fahreinheit, setFahreinheit] = useState(-40)


    function changeHandler(event) {
        console.log(event.target)
        switch (event.target.getAttribute("id")) {
            case "fahreinheit":
                setFahreinheit(event.target.value);
                setCelsius((event.target.value - 32) * 5 / 9);
                break;

            case "celsius":
                setCelsius(event.target.value);
                setFahreinheit((event.target.value * 9 / 5) + 32);
                break;

        }


    }

    return (
        <div className='temperatures'>

            <div id='fahreinheit' onChange={changeHandler}>
                <TextField
                    label="Fahrenheit"
                    id="fahreinheit"
                    sx={{ m: 1, width: '25ch' }}
                    type='number'
                    value={fahreinheit}
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">{String.fromCharCode(0x2109)}</InputAdornment>,
                        },
                    }}
                />
            </div>

            <div id='celsius' onChange={changeHandler}>
                <TextField
                    label="Celsius"
                    id="celsius"
                    sx={{ m: 1, width: '25ch' }}
                    type='number'
                    value={celsius}
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">{String.fromCharCode(0x2103)}</InputAdornment>,
                        },
                    }}
                />
            </div>



        </div>

    );
}

export default TemperatureConverter;

// import * as React from 'react';
// import Box from '@mui/material/Box';

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }
