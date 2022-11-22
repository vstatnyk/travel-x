import { Paper, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as React from 'react';
import { Box } from '@mui/system';

const ComparePage = (props) => {
    return (
        <div>
            {props.data ? (
                <div>
                    <CheckCircleIcon style={{ color: 'green' }}/>
                    <Typography>
                        Success! The face in the uploaded image matches the photos in the agencies!
                    </Typography>
                </div>
            ) : (
                <div>
                    <CloseIcon style={{ color: 'red' }}/>
                    <Typography>
                        Failure! The face in the uploaded image does not match the photos in the agencies!
                    </Typography>
                </div>
            )}
        </div>
    );
}

export default ComparePage;