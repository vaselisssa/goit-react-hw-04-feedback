import styled from '@emotion/styled';

// font-size: 20px;
export const StatiscticList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

export const StatisticItem = styled.li`
  font-size: 20px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
