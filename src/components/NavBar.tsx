import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <Container>
      <TabList>
        <TabItem active={activeTab === "home"}>
          <Link href='/'>Home</Link>
        </TabItem>
        <TabItem active={activeTab === "favorites"}>
          <Link href='/favorites'>Favorites</Link>
        </TabItem>
      </TabList>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
`;

const TabList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    margin-top: 2rem;
    padding-bottom: 1rem;
  }
`;

const TabItem = styled.li<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 0.8rem;
  color: ${({ active }) => (active ? "#0070f3" : "#999")};
  border-top: ${({ active }) => (active ? "3px solid #0070f3" : "none")};

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    font-size: 1rem;
    color: ${({ active }) => (active ? "#0070f3" : "#333")};
    border-top: none;
    border-bottom: ${({ active }) => (active ? "3px solid #0070f3" : "none")};
  }
`;
