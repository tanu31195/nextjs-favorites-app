import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NavBar from '@/components/NavBar';
import Post from '@/components/Post';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const result = await axios('/api/data');
    setData(result.data);
  };

  const addToFavorites = async (item) => {
    await axios.post('/api/favorites', item);
  };

  return (
    <Container>
      <Title>Landing Page</Title>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <Post username='test' caption='test' imageUrl='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' />
            <Button onClick={() => addToFavorites(item)}>Add to Favorites</Button>
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
