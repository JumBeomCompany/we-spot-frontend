import React from 'react'
import { Button, Stack, Zoom } from '@mui/material'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'

const StyledMenuContainer = styled(Stack)`position: absolute; width: 100%; bottom: 30px; display: flex; justify-content: center;`
const StyledButton = styled(Button)`margin-left: 10px;`

function MarkerMngMenu({ setIsModalOpen, MarkerMngMenuType }:any) {
  return (
    <Zoom in>
      <StyledMenuContainer spacing={2} direction="row">
        {MarkerMngMenuType === 'marker'
          && <StyledButton variant="contained" onClick={() => { setIsModalOpen(true) }}>추가</StyledButton>}
        {MarkerMngMenuType === 'map'
          && <StyledButton variant="contained">수정</StyledButton>}
        {MarkerMngMenuType === 'map'
          && <StyledButton variant="contained" endIcon={<DeleteIcon />}>삭제</StyledButton>}
      </StyledMenuContainer>
    </Zoom>
  );
}

export default MarkerMngMenu;
