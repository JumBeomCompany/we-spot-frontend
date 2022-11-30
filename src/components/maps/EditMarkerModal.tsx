import React, { useEffect, useState } from 'react';
import {
  Modal, Box, Typography, Button,
} from '@mui/material';
import { useMutation } from 'react-query';
import axios from 'axios';

export default function EditMarkerModal({
  markerData, clickedPosition, isEditModalOpen, setIsEditModalOpen,
}:any) {
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

  const [feedTitle, setFeedTitle] = useState('')
  const [feedContent, setFeedContent] = useState('')

  useEffect(() => {
    setFeedTitle(markerData.feedTitle)
    setFeedContent(markerData.feedContent)
  }, [markerData])

  const addMutation = useMutation('addMarker', async (param:any) => {
    const response = await axios.patch(`http://3.37.26.147:8080/api/v1/marker/${clickedPosition?.id}`, {
      userId: 1,
      feedTitle: feedTitle,
      feedContent: feedContent,
    })
    return response.data;
  }, {})

  const saveData = () => {
    if (!addMutation.isLoading) {
      addMutation.mutate(({ feedTitle, feedContent }), {
        onError: () => {
          setIsEditModalOpen(false)
        },
      })
    } else {
      alert('요청중입니다.')
    }
  }

  return (
    <Modal
      open={isEditModalOpen}
      onClose={() => setIsEditModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          마커 수정하기
        </Typography>
        <div id="modal-modal-description">
          <form>
            <input
              type="text"
              value={feedTitle}
              onChange={(e) => {
                setFeedTitle(e.target.value || '')
              }}
            />
            <input
              type="text"
              value={feedContent}
              onChange={(e) => {
                setFeedContent(e.target.value || '')
              }}
            />
            <Button variant="contained" onClick={saveData}>추가</Button>
          </form>
        </div>
      </Box>
    </Modal>
  )
}
