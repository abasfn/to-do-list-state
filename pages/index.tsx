import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { dataType } from '../model/statemodel';
import ModalBoxs from './component/modal/modal.compoent';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home: NextPage = () => {
  const [data, setdata] = useState<dataType[]>([])
  const [index, setindex] = useState<number>(-1)
  const inishialItem: dataType = {
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    id: -1,
    index: -1
  }
  const [item, setitem] = useState<dataType>(inishialItem)
  const onSubmit = (item: dataType) => {
    let itemData = item;
    itemData.id = data.length;
    setdata([...data, item]);
  }
  const handeleDelete = (item: dataType) => {
    const filter = data.filter(data => data.id != item.id);
    setdata([...filter])
  }
  const handeleEdit = (item: dataType, index: number) => {
    setitem({ ...item });
    setindex(index)
  }
  const EdiOnSubmit = (Input: dataType) => {
    let itemData = Input;
    itemData.id = index;
    data[index] = Input;
    setdata([...data])
  }

  return (
    <div className={styles.container}>
      <ModalBoxs ModatTitle='ADD ITEM' onSubmit={onSubmit} TitleButton='ADD' />
      {data.map((item, index) => {
        return (
          <Grid key={item.id} container
            direction="row"
            justifyContent="center"
            alignItems="center" spacing={2}>
            <Grid item xs={12} md={2}>
              <Box>
                <Box sx={{ textAlign: 'center', m: 1 }}><h3>firstname</h3></Box>
                <Box sx={{ textAlign: 'center', m: 1 }}>{item.firstName}</Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box>
                <Box sx={{ textAlign: 'center', m: 1 }}><h3>lastname</h3></Box>
                <Box sx={{ textAlign: 'center', m: 1 }}>{item.lastName}</Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box>
                <Box sx={{ textAlign: 'center', m: 1 }}><h3>age</h3></Box>
                <Box sx={{ textAlign: 'center', m: 1 }}>{item.age}</Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box>
                <Box sx={{ textAlign: 'center', m: 1 }}><h3>phonenumber</h3></Box>
                <Box sx={{ textAlign: 'center', m: 1 }}>{item.phoneNumber}</Box>
              </Box>
            </Grid>
            <Grid sx={{ display: 'flex', gap: 1 }} item xs={12} md={2} >
              <Button onClick={() => handeleDelete(item)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
              <ModalBoxs data={item} onClick={() => handeleEdit(item, index)} ModatTitle='EDIT ITEM' onSubmit={EdiOnSubmit} TitleButton='EDIT' />
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}

export default Home
