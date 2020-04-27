import styled from 'styled-components'

interface IProps {
  active?: boolean
  puzzle?: boolean
}

export const Container = styled.div<IProps>`
  align-items: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.blue : theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.black};
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  font-size: 20px;
  font-weight: ${({ puzzle }) => (puzzle ? 'bold' : 'normal')};
  height: auto;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  user-select: none;

  &:before {
    padding-top: 100%;
    content: '';
    float: left;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`
