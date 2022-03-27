import styled from "styled-components";
import { layout, space, compose, grid, GridProps } from "styled-system";
import { ThemeProps } from "../../theme";

export type GridProperties = Omit<ThemeProps & GridProps, "display">;

export const Grid = styled.div<GridProperties>`
  display: grid;
  ${compose(layout, space, grid)};
`;
