import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import TaskCard from './Card';
import { Container, Button, Typography, Box, Grid } from '@mui/material';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
    <Container>
        <Box textAlign="center" my={4}>
            <Typography variant="h3" textAlign="center">Todo List</Typography>
            <Button variant="contained" color="primary" onClick={toggle}>
                Create Task
            </Button>
        </Box>
        <Box>
            <Grid container spacing={1}>
            {taskList && taskList.map((obj, index) => (
                <TaskCard
                    key={index}
                    taskObj={obj}
                    index={index}
                    deleteTask={deleteTask}
                    updateListArray={updateListArray}
                />
            ))}
            </Grid>
        </Box>
        <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    </Container>
    );
};

export default TodoList;