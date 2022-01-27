/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import theme from "@Styles/theme";

const Nav = () => {
  return (
    <Aside brown={theme.color.brown}>
      <Profile>
        <ProfileImg src="http://fpoimg.com/40x40" />
        <ProfileName>name</ProfileName>
      </Profile>
      <NavSidebar>
        <Item>회의실</Item>
        <Item>회의실</Item>
      </NavSidebar>
    </Aside>
  );
};

export default Nav;

const Aside = styled.aside<{ brown: string }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 210px;
  background-color: ${(props) => props.brown};
  height: 100%;
  overflow-y: hidden;
  padding: 40px 0px 0px 20px;
`;

const Profile = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

const ProfileName = styled.div`
  line-height: 40px;
  text-align: center;
  padding-left: 15px;
  font-weight: 600;
`;

const NavSidebar = styled.div`
  /* border: 1px solid red; */
`;

const Item = styled.div`
  padding: 10px 0px 10px 10px;
  border: 1px solid blue;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;
