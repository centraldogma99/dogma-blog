import styled from '@emotion/styled'
import { List } from '@mui/material'

const DrawerList = styled(List)`
  padding: 11px 13px;
  background-color: ${({ theme }) => theme.colors.globalBackground};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  height: 30px;
`

export default DrawerList
