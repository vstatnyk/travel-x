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
                    <CheckCircleIcon />
                    <Typography>
                        example1
                    </Typography>
                </div>
            ) : (
                <div>
                    <CloseIcon />
                    <Typography>
                        example2
                    </Typography>
                </div>
            )}
        </div>
    );
}

export default ComparePage;