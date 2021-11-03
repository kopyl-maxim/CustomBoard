import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import PostBlog from "./components/Post";
import Box from "@mui/material/Box";
import {IconButton} from "@mui/material";
import {CloseIcon, EditIcon} from "../../themes/icons";
import EditUserForm from "./components/Form/EditPostForm";
import AddUserForm from "./components/Form/AddPostForm";
import {IBasePost} from "../../interface";
import Header from "./components/Header";

const PageBlog: React.FC = () => {
    const [data, setData] = useState<IBasePost[]>([])
    const [openEditForm, setOpenEditForm] = React.useState(false);
    const [openAddForm, setOpenAddForm] = React.useState(false);
    const initialFormState = {id: '', title: '', body: ''}
    const [test, setTest] = useState(initialFormState)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(res => setData(res));
    }, [setData])

    const handleCloseAddForm = () => setOpenAddForm(false);

    const handleOpen = () => {setOpenEditForm(true)};

    const handleClose = () => setOpenEditForm(false);

    const deletePost = (id: any) => {
        let answer = window.confirm('Are you sure?')
        if (answer) {
            setData(data.filter((data) => data.id !== id))
        }
    }
    const updatePost = (id: string, update: IBasePost) => {
        setData(data.map(post => (post.id === id ? update : post)))
    }

    const addPost = (post: any) => {
        post.id = data.length + 1
        setData([...data, post])
    }

    return (
        <Box>
            <Header setOpenAddPost={openAddForm}/>
            <Grid container={true}>
                {data.map((post) => (
                    <Grid key={post.id} xs={12} md={4} item={true}>
                        <Box p={2}>
                            <PostBlog
                                id={post.id}
                                title={post.title}
                                body={post.body}
                            />
                            <Box display="flex" flexDirection="row" justifyContent="space-between">
                                <IconButton onClick={() => deletePost(post.id)}>
                                    <CloseIcon/>
                                </IconButton>
                                <IconButton onClick={() => {
                                    setTest(post);
                                    handleOpen()
                                }}>
                                    <EditIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                <EditUserForm
                    handleClose={handleClose}
                    open={openEditForm}
                    updatePost={updatePost}
                    currentPost={test}
                />
                <AddUserForm
                    handleClose={handleCloseAddForm}
                    open={openAddForm}
                    addPost={addPost}
                />
            </Grid>
        </Box>
    )
}

export default PageBlog