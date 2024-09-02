import styled from "styled-components";
import type { Theme } from "../global/theme";

const StyledHeader = styled('header')<{ theme: Theme }>(() => ({
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
