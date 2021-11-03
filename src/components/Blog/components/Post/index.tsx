import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import useStyles from './styles'

type Props = {
    id: string
    title: string;
    body: string;
}

const PostBlog: React.FC<Props> = (props) => {
    const classes = useStyles();
    return (
        <Box>
            <Box>
                <img className={classes.image} src={`https://picsum.photos/200/300/?random=${props.id}`}/>
            </Box>
            <Box>
                <Typography className={classes.title}>
                    {props.title}
                </Typography>
            </Box>
            <Box>
                <Typography className={classes.body}>
                    {props.body}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
            </Box>
        </Box>
    )
}
export default PostBlog;