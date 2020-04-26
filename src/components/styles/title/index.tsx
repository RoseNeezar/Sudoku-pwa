import styled from 'styled-components'

// export const Title = styled.h1`
//   ${({ theme }) => css`
//     color: ${theme.colors.white};
//     margin-top: 0;
//     text-align: center;
//     background-color: ${theme.}
//   `}
// `

interface IProps {
  Active?: boolean
}

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0;
  text-align: center;
  background-color: ${(props: IProps) => (props.Active ? 'purple' : null)};
`
