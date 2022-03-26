import type { NextPage } from "next";

import styled from "styled-components";

const H1 = styled.h1`
  font-size: 40px;
  color: red;
`;

const Home: NextPage = () => {
  return <H1>Hellow life-music</H1>;
};

export default Home;
