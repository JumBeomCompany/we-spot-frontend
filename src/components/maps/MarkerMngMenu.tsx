import React from 'react'
import styled from 'styled-components'

const StyledMenuContainer = styled.div`position: absolute; bottom: 30px; right: 20px;`

function MarkerMngMenu() {
  return (
    <StyledMenuContainer>
      <span>
        <button type="button">추가</button>
      </span>
      <span>
        <button type="button">수정</button>
      </span>
      <span>
        <button type="button">삭제</button>
      </span>
    </StyledMenuContainer>
  );
}

export default MarkerMngMenu;
