import styled from "styled-components";

const StyledHeader = styled('header')(() => ({
  backgroundColor: 'red',
  height: '50px',
  width: '500px',
}));

const Header = (): JSX.Element => {
  return <StyledHeader>
      <p>My Header</p>
    </StyledHeader>;
};

export default Header;
