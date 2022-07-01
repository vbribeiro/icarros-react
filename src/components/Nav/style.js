import styled from 'styled-components';

export const NavContent = styled.nav`
  background-color: red;
  height: 130px;

  .container{
    max-width: 80%;
    margin: auto;
    display: flex;
    align-items: center;

    a{
      text-decoration: none;
      color: white;
      margin-left: 1rem;
    }
  }
`