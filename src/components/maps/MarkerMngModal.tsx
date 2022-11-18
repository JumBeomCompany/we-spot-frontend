import React, { useState } from 'react';
import {
  Modal, Box, Typography, Button,
} from '@mui/material';
import { useMutation } from 'react-query';
import axios from 'axios';

interface Input {
  latitude: number,
  longitude: number,
  userId: number,
  feedTitle: string,
  feedContent: string,
}

export default function MarkerMngModal({ clickedPosition, isModalOpen, setIsModalOpen }:any) {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [inputData, setInputData] = useState<Input>({
    latitude: clickedPosition.latitude,
    longitude: clickedPosition.longitude,
    userId: 1,
    feedTitle: '',
    feedContent: '',
  })

  const addMutation = useMutation('addMarker', async (param:any) => {
    const response = await axios.post('http://13.124.139.218:8080/api/v1/markers/1', {
      latitude: param.latitude,
      longitude: param.longitude,
      userId: 1,
      feedTitle: param.feedTitle,
      feedContent: param.feedContent,
    })
    return response.data;
  }, {})

  const saveData = () => {
    addMutation.mutate(inputData)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          마커 등록하기
        </Typography>
        <div id="modal-modal-description">
          <form>
            <input
              type="text"
              title="검색"
              onChange={(e) => {
                setInputData({
                  ...inputData,
                  feedTitle: e.target.value,
                })
              }}
            />
            <input
              type="text"
              onChange={(e) => {
                setInputData({
                  ...inputData,
                  feedContent: e.target.value,
                })
              }}
            />
            <Button variant="contained" onClick={saveData}>추가</Button>
          </form>
        </div>
      </Box>
    </Modal>
  )
}
