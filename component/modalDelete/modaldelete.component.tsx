import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { dataType } from '../../model/statemodel';

type ModalDeleteType = {
    onClick?: () => void;
    title?: string;
    paragraph?: string;
    handelDelete?: () => void;
}
const ModalDelete = (props: ModalDeleteType) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Box onClick={props.onClick}>  <Button onClick={handleOpen} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button></Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.paragraph}
                    </Typography>
                    <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper' }}>
                        <Box sx={{ flexGrow: 1 }}> <Button onClick={handleClose} variant="contained">NO</Button></Box>
                        <Box onClick={props.handelDelete}><Button onClick={handleClose} type='submit' variant="contained">YES</Button></Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalDelete;