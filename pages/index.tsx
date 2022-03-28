import type { NextPage } from "next";

import { Flex } from "../helpers/Flex";
import { Button } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Button variant="outlined">Hello life - Music</Button>
      <Button variant="contained">Hello life - Music</Button>
      <Button variant="contained" onClick={() => console.log("click")} disabled>
        Hello life - Music
      </Button>

      <br />
      <Button
        size="small"
        variant="contained"
        onClick={() => console.log("click")}
        disabled
      >
        Hello life - Music
      </Button>

      <Button
        size="medium"
        variant="contained"
        onClick={() => console.log("click")}
      >
        Hello life - Music
      </Button>
      <Button
        size="large"
        variant="contained"
        onClick={() => console.log("click")}
      >
        Hello life - Music
      </Button>
    </>
  );
};

export default Home;
