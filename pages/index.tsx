import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { dataType } from '../model/statemodel';
import { useState } from 'react';
import Container from '@mui/material/Container';
import ModalBoxs from '../component/modal/modal.compoent';
import ModalDelete from '../component/modalDelete/modaldelete.component';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const Home: NextPage = () => {
  const [data, setdata] = useState<dataType[]>([]);
  const [index, setindex] = useState<number>(-1);
  const [modal, setmodal] = useState<boolean>(false);
  const [modalEdit, setmodalEdit] = useState<boolean>(false);


  const initialItem: dataType = {
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    id: -1,
    index: -1
  }
  const [item, setitem] = useState<dataType>(initialItem);
  /**
   * 
   * @param {dataType} item- the item you want to add 
   */
  const onSubmit = (item: dataType) => {
    debugger
    setmodal(true)
    let itemData = item;
    itemData.id = data.length;
    setdata([...data, item]);
  }
  /**
  * 
  * @param {dataType} item- the item you want to delete 
  */
  const handeleDelete = (item: dataType) => {
    const filter = data.filter(data => data.id != item.id);
    setdata([...filter])
  }
  /**
   * 
   * @param {dataType}item -this is the item you want to edit and show to modal edit
   * @param {number}index  -this is the index of your item you wante to edit 
   */
  const handeleEdit = (item: dataType, index: number) => {
    setitem(item);
    setindex(index);
    setmodalEdit(true);
  }
  /**
   * 
   * @param {dataType}Input -Input our item for editing
   */
  const EdiOnSubmit = (Input: dataType) => {
    let itemData = Input;
    itemData.id = index;
    data[index] = Input;
    setdata([...data])
  }
  const handelAdd = () => {
    setmodal(true);
  }


  return (
    <div className={styles.container}>
      <Container maxWidth="md">
        <ModalBoxs status={modal} ModatTitle='ADD ITEM' onClose={() => setmodal(false)} onSubmit={onSubmit} TitleButton='ADD' />
        <ModalBoxs status={modalEdit} data={item} ModatTitle='edit item ITEM' onClose={() => setmodalEdit(false)} onSubmit={EdiOnSubmit} TitleButton='edit' />
        <Button onClick={handelAdd} variant="outlined" startIcon={<AddIcon />}>add</Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: 'center' }}>firstname</TableCell>
                <TableCell sx={{ textAlign: 'center' }} align="right">lastname</TableCell>
                <TableCell sx={{ textAlign: 'center' }} align="right">age</TableCell>
                <TableCell sx={{ textAlign: 'center' }} align="right">phonenumber</TableCell>
                <TableCell sx={{ textAlign: 'center' }} align="right">button</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx={{ textAlign: 'center' }} component="th" scope="row">
                    {item.firstName}
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }} align="right">{item.lastName}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }} align="right">{item.age}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }} align="right">{item.phoneNumber}</TableCell>
                  <TableCell sx={{ display: 'flex', gap: 1, justifyContent: 'center' }} align="right">
                    <ModalDelete handelDelete={() => handeleDelete(item)} title='DELETE ITEM' paragraph='Are You Sure you want to delete' />
                    <Button onClick={() => handeleEdit(item, index)} variant="outlined" startIcon={<EditIcon />}>EDIT</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default Home
