import React, {useState} from 'react';
import EditTask from '../modals/EditTask';
import { Card, Grid, Chip, CardContent, CardActions, Button, Typography, Box } from '@mui/material';


const TaskCard = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const setColor = () => {
        switch(taskObj.Category){
            case "Work":
                return colors[0];
            case "Home":
                return colors[1];
            case "School":
                return colors[2];
            case "Exercise":
                return colors[3];
            case "Others":
                return colors[4];
            default:
                return colors[0];

        }
    }
    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
            <Grid item xs={12} sm={4} md={2.4}>
                <Card sx={{ mb: 3 }}>
                    <Box sx={{ backgroundColor: setColor().primaryColor, height: '5px' }}></Box>
                    <CardContent sx={{ backgroundColor: setColor().secondaryColor, borderRadius: '5px', p: 2 }}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6">{taskObj.Name}</Typography>
                            <Chip label={taskObj.Category} />
                        </Box>
                        <Typography variant="body" sx={{ mt: 2 }}>{taskObj.Description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => setModal(true)}>Edit</Button>
                        <Button size="small" color="secondary" onClick={handleDelete}>Delete</Button>
                    </CardActions>
                    <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
                </Card>
            </Grid>
    );
};

export default TaskCard;