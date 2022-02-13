import React, { useState } from "react";
import styled from "styled-components";
import theme from "@Styles/theme";
import MonitorIcon from "@mui/icons-material/Monitor";
import HomeIcon from "@mui/icons-material/Home";

const Nav = () => {
  const [menuSelected, setMenuSelected] = useState("meetingRoom");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Aside brown={theme.color.brown}>
      <Profile>
        <ProfileImg src="http://fpoimg.com/40x40" />
        <ProfileName>name</ProfileName>
      </Profile>
      <NavMenu>
        <Item
          id="meetingRoom"
          onClick={() => setIsOpen(!isOpen)}
          menuSelected={menuSelected === "meetingRoom"}
          lightPink={theme.color.lightPink}
          isOpen={isOpen}
        >
          <MonitorIcon />
          <span>회의실</span>
        </Item>

        <MeetingRoomList lightPink={theme.color.lightPink} isOpen={isOpen}>
          <MeetingRoom>
            <HomeIcon />
            <span>내 회의실</span>
          </MeetingRoom>
          <MeetingRoom>
            <HomeIcon />
            <span>회의실 1</span>
          </MeetingRoom>
          <MeetingRoom>
            <HomeIcon />
            <span>회의실 2</span>
          </MeetingRoom>
        </MeetingRoomList>
      </NavMenu>
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
  height: calc(100% - 40px);
  overflow-y: hidden;
  padding: 40px 0px 0px 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  user-select: none;
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

const NavMenu = styled.div`
  position: relative;
`;

const Item = styled.div<{ menuSelected: boolean; lightPink: string; isOpen: boolean }>`
  padding: 15px 40px 15px 40px;
  font-weight: 600;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  background-color: ${(props) => (props.menuSelected ? props.lightPink : "unset")};
  display: flex;
  cursor: pointer;

  span {
    margin-top: 3px;
    margin-left: 15px;
  }
`;

const MeetingRoomList = styled.ul<{ lightPink: string; isOpen: boolean }>`
  overflow-y: hidden;
  position: relative;
  top: -7px;
  margin: 0px;
  height: ${(props) => (props.isOpen ? "160px" : "0px")};
  list-style: none;
  border-bottom-left-radius: 10px;
  background-color: ${(props) => props.lightPink};
  transition: all 0.5s;
`;

const MeetingRoom = styled.li`
  padding: 15px 20px 15px 20px;
  font-weight: 600;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  background-color: "unset";
  display: flex;
  cursor: pointer;

  span {
    margin-top: 3px;
    margin-left: 15px;
  }
`;
