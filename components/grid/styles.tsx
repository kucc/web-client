import styled from 'styled-components';

interface ColPropsType {
  span?: number;
  offset?: number;
}

export const Grid = styled.div``;
export const Row = styled.div`
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

const getWidthString = (span: number) => {
  const width = (span / 12) * 100;
  return `width: ${width}%;`;
};

const getOffsetString = (offset: number) => {
  const margin = (offset / 12) * 100;
  return `margin-left: ${margin}%;`;
};

export const Col = styled.div`
  float: left;
  ${(props: ColPropsType) =>
    props.span ? getWidthString(props.span) : 'width:100%'};
  ${(props: ColPropsType) =>
    props.offset ? getOffsetString(props.offset) : null};
`;
