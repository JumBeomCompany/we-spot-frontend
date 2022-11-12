import React from 'react'
import { Button, Stack, Zoom } from '@mui/material'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'

const StyledMenuContainer = styled(Stack)`position: absolute; width: 100%; bottom: 30px; display: flex; justify-content: center;`
const StyledButton = styled(Button)`margin-left: 10px;`

function MarkerMngMenu() {
  return (
    <Zoom in>
      <StyledMenuContainer spacing={2} direction="row">
        <StyledButton variant="contained">추가</StyledButton>
        <StyledButton variant="contained">수정</StyledButton>
        <StyledButton variant="contained" endIcon={<DeleteIcon />}>삭제</StyledButton>
      </StyledMenuContainer>
    </Zoom>
  );
}

export default MarkerMngMenu;
