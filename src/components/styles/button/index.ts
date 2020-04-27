import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  margin: 4px 2px;
  min-height: 40px;
  opacity: 0.9;
  padding: 0;
  transition: ${({ theme }) => theme.transition};

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
    outline: none;
  }
  &:hover {
    opacity: 0.6;
  }
`
