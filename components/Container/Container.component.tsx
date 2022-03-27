import styled from "styled-components";
import { variant } from "styled-system";

type ContainerVariants = "main";

interface ContainerProps {
  variants?: ContainerVariants;
}

export const Container = styled.div<ContainerProps>`
  ${variant({
    variants: {
      main: {
        maxWidth: 1600,
      },
    },
  })}

  padding: 0 3rem;
  margin: 0 auto;
`;

Container.defaultProps = {
  variants: "main",
};
