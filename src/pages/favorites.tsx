import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Post from "@/components/Post";

export default function Favorites() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios("/api/favorites");
    setData(result.data);
  };

  const removeFromFavorites = async (item) => {
    console.log(
      "🚀 ~ file: favorites.tsx:15 ~ removeFromFavorites ~ item:",
      item
    );
    // await axios.delete(`/api/favorites/${item.id}`);
    await axios.delete("/api/favorites", item);
    setData(data.filter((i) => i.id !== item.id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Title>Favorites Page</Title>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <Post
              username='tanu'
              caption='test'
              imageUrl='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            />
            <Button onClick={() => removeFromFavorites(item)}>
              Remove from Favorites
            </Button>
          </ListItem>
        ))}
      </List>
      <NavBar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 2rem;
  font-size: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ItemName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background-color: #0070f3;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
`;
