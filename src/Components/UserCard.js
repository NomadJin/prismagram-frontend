import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import FatText from "./FatText";
import FollowButton from "./FollowButton";

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;

const Elink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
`;

const UserCard = ({ id, username, isFollowing, url, isSelf }) => {
  return (
    <Card>
      <EAvatar url={url} size={"md"} />
      <Elink to={`/${username}`}>
        <FatText text={username} />
      </Elink>
        {!isSelf && <FollowButton id={id} isFollowing={isFollowing} />}
    </Card>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired
};

export default UserCard;
