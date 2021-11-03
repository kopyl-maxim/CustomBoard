import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import {IBasePost} from "../../../../../interface";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStyles from './styles';

type Props = {
    currentPost: any
    updatePost: (id: string, post: IBasePost) => void;
    open: any;
    handleClose: () => void;
}

const EditUserForm: React.FC<Props> = (props) => {
    const classes = useStyles();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [post, setPost] = useState(props.currentPost)

    useEffect(() => {
        setPost(props.currentPost)
    }, [props.currentPost])

    const handleInputChange = (event: any) => {
        const {name, value} = event.target
        setPost({...post, [name]: value})
    }

    const onSubmit = () => {
        props.updatePost(post.id, post)
    }

    return (
        <Dialog
            open={props.open}
            onClose={() => {
                props.handleClose();
            }}
            PaperProps={{
                style: {
                    width: 340,
                    height: 460,
                    borderRadius: '2rem',
                    justifyContent: "center",

                },
            }}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.form}
            >
                <Box display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="column">
                        <Typography mb={4} className={classes.editText}>Edit post</Typography>
                        <Typography className={classes.titleText}>Title</Typography>
                        <input
                            className={classes.titleInput}
                            {...register("title", {
                                maxLength: {
                                    value: 100,
                                    message: "The number of characters must not exceed 100"
                                }
                            })}
                            value={post.title}
                            onChange={handleInputChange}
                        />
                        {<Typography mt={1} className={classes.errorMassage}>{errors.title?.message}</Typography>}
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Typography className={classes.titleText} mt={1}>Body</Typography>
                        <textarea
                            className={classes.bodyInput}
                            {...register("body", {
                                maxLength: {
                                    value: 1000,
                                    message: "the number of characters must not exceed 1000"
                                }
                            })}
                            value={post.body}
                            onChange={handleInputChange}
                        />
                        {<Typography mt={1} className={classes.errorMassage}>{errors.body?.message}</Typography>}
                    </Box>
                    <Box mt={4} display="flex">
                        <Button type="submit" fullWidth={true} color="primary" variant="contained"
                                className={classes.buttonSubmit}>
                            <Typography>Submit</Typography>
                        </Button>
                    </Box>
                </Box>
            </form>
        </Dialog>
    )
}

export default EditUserForm