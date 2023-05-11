import React from "react";
import styled from "styled-components";

interface PostProps {
  username: string;
  caption: string;
  imageUrl: string;
}

const Post: React.FC<PostProps> = ({ username, caption, imageUrl }) => {
  return (
    <Container>
      <UserContainer>
        <ProfilePicture src={imageUrl} />
        <Username>{username}</Username>
      </UserContainer>
      <ImageContainer>
        <Image src={imageUrl} alt='Post' />
        <Overlay>
          <OverlayTextContainer>
            <Title>Leaf iPhone Case Hard Plastic</Title>
            <Price>AED 230</Price>
          </OverlayTextContainer>
          <LikeButton>Like</LikeButton>
        </Overlay>
      </ImageContainer>
      <InfoContainer>
        <Likes>32 Likes</Likes>
        <Caption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. #iphone
          #cases # mobile phones #macbookpro..
        </Caption>
        <Comments>View 12 comments</Comments>
      </InfoContainer>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border: 1px solid #ccc;
  padding: 16px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  max-height: 100px;
`;
const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  object-fit: cover;
`;

const Username = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 500px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
`;

const OverlayTextContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 15px;
  margin: 5px;
`;
const Price = styled.p`
  font-size: 14px;
  margin: 5px;
  font-weight: bold;
`;

const LikeButton = styled.button`
  flex: 1;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Likes = styled.p`
  font-size: 12px;
`;

const Caption = styled.p`
  font-size: 12px;
`;

const Comments = styled.p`
  font-size: 12px;
`;
