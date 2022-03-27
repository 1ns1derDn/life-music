import styled from "styled-components";
import { layout, space, compose, FlexboxProps, flexbox } from "styled-system";
import { ThemeProps } from "../../theme";

export type FlexProps = Omit<ThemeProps & FlexboxProps, "display">;

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${compose(layout, space, flexbox)};
`;
