import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { dataType } from '../../model/statemodel';
import { style } from './style';

type ModalBoxsType = {
    ModatTitle?: string;
    onSubmit: (data: dataType) => void;
    TitleButton: string;
    onClick?: () => void;
    onClose?: () => void;
    data?: dataType;
    status: boolean;
}
const ModalBoxs = (props: ModalBoxsType) => {
    const initialItem: dataType = {
        firstName: '',
        lastName: '',
        age: '',
        phoneNumber: '',
        id: -1,
        index: -1
    }
    const [dataEdit, setdataEdit] = useState<dataType>(props.data ?? initialItem);
    useEffect(() => {
        reset();
        setdataEdit(props.data ?? initialItem);
    }, [props.data])

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<dataType>();
    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            setdataEdit(value)
        });
    }, [watch]);
    const onSubmit = (data: dataType) => {
        if (errors.age || errors.phoneNumber) {
            return
        }
        props.onSubmit(data);
        reset()
        handleClose();
    }
    const handleClose = () => {
        if (!props.onClose) return;
        props.onClose();
    }
    return (
        <div>
            <Box mb={1} sx={{ display: 'flex', justifyContent: 'end' }} onClick={props.onClick}>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.status}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.status}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {props.ModatTitle}
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box>
                                <Box mt={2}>
                                    <TextField value={dataEdit?.firstName} {...register('firstName', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'firstName'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField value={dataEdit?.lastName} {...register('lastName', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'lastName'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField value={dataEdit?.age}  {...register('age', { required: true, maxLength: 3 })} sx={{ width: 1 }} type='number' id="standard-basic" label={'age'} variant="standard" />
                                    {errors.age && <Box sx={{ color: 'error.main' }}>Is empty or more than 3 characters</Box>}
                                </Box>
                                <Box mt={2}>
                                    <TextField value={dataEdit?.phoneNumber}  {...register('phoneNumber', { required: true, maxLength: 11 })} type='number' sx={{ width: 1 }} id="standard-basic" label={'phonenumber'} variant="standard" />
                                    {errors.phoneNumber && <Box sx={{ color: 'error.main' }}>Is empty or more than 11 characters</Box>}
                                </Box>
                            </Box>
                            <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button onClick={handleClose} variant="contained">Close</Button>
                                <Button onClick={handleSubmit(onSubmit)} type='submit' variant="contained">{props.TitleButton}</Button>
                            </Box>
                        </form>
                    </Box>
                </Fade>
            </Modal >

        </div >
    );
};

export default ModalBoxs;