import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { authSelector } from "../../modules/auth/authSlice";
import { ReactComponent as AccountIcon } from "../../assets/images/icons/accountIcon.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/icons/menu.svg";

interface Props {
  toggleSidebar: boolean;
  onToggleSidebar: () => void;
}
export const AppHeader = ({ toggleSidebar, onToggleSidebar }: Props) => {
  const { user } = useSelector(authSelector);

  return (
    <HeaderContainer>
      <MobileIcon onClick={onToggleSidebar}>
        {toggleSidebar ? <MenuIcon /> : <MenuIcon />}
      </MobileIcon>
      <HeaderLogo to="/">
        <ImgLink src={Logo} alt="logo" />
      </HeaderLogo>
      <UserAccount>
        {user && <UserName>{user.name}</UserName>}
        <UserImg />
      </UserAccount>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 250;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);
  height: 62px;

  @media ${({ theme }) => theme.deviceSize.tablet} {
    width: 100%;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;
    height: 80px;
  }
`;

const HeaderLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-self: center;
  width: 137px;
  height: 34px;
  cursor: pointer;
  text-decoration: none;

  @media ${({ theme }) => theme.deviceSize.tablet} {
    width: 191px;
    height: 48px;
  }
`;
const ImgLink = styled.img`
  width: 100%;
  height: 100%;
`;

const UserAccount = styled.div`
  display: none;
  @media ${({ theme }) => theme.deviceSize.tablet} {
    display: flex;
    align-items: center;
  }
`;

const UserName = styled.p`
  margin-right: 19px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const UserImg = styled(AccountIcon)`
  width: 36px;
  height: 36px;
`;

const MobileIcon = styled.div`
  position: absolute;
  padding: 8px;
  height: 40px;
  top: 11px;
  left: 4px;
  z-index: 199;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media ${({ theme }) => theme.deviceSize.tablet} {
    display: none;
  }
`;
