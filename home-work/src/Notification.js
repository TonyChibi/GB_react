import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Notification({ text, id }) {

    return (

        <div className="notification" id={id} >

            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {text}
                    </Typography>

                    <Button variant="outlined" className='notification__delete_btn'>delete</Button>
                </CardContent>
                {/* <button className="notification__delete_btn">delete</button> */}
            </Card>

        </div>
    );
}

export default Notification;