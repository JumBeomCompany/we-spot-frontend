import React from 'react'
import { Button, Stack, Zoom } from '@mui/material'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAtom } from 'jotai';
import { isAddMarkerModalOpenAtom, markerMngMenuTypeAtom } from '../../atom/index'

const StyledMenuContainer = styled(Stack)`position: absolute; width: 100%; bottom: 100px; display: flex; justify-content: center;`
const StyledButton = styled(Button)`margin-left: 10px;`

function MarkerMngMenu({ setIsEditModalOpen }:any) {
  const [, setisAddMarkerModalOpenAtom] = useAtom(isAddMarkerModalOpenAtom);
  const [markerMngMenuType] = useAtom(markerMngMenuTypeAtom);

  return (
    <Zoom in>
      <StyledMenuContainer spacing={2} direction="row">
        {markerMngMenuType === 'marker'
          && <StyledButton variant="contained" onClick={() => { setisAddMarkerModalOpenAtom(true) }}>추가</StyledButton>}
        {markerMngMenuType === 'map'
          && <StyledButton variant="contained" onClick={() => { setIsEditModalOpen(true) }}>수정</StyledButton>}
        {markerMngMenuType === 'map'
          && <StyledButton variant="contained" endIcon={<DeleteIcon />}>삭제</StyledButton>}
      </StyledMenuContainer>
    </Zoom>
  );
}

export default MarkerMngMenu;
