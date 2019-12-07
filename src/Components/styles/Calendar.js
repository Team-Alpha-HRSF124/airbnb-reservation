import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    margin-top: 170px;
    margin-right: 100px;
    background-color: white;
    border: 1px solid #e4e4e4;
`;

export const CalendarTable = styled.table`
    padding: 1em;
    width: 30%;
    display: flex;
    flex-flow:column;
    table-layout: fixed;
  /* width: 100%; */
  white-space: nowrap;
`;

export const CalendarHeader = styled.tr`
display: flex;
flex-flow: row;
width: 100px;
`;

export const Head = styled.thead`
border: 1px solid #e4e4e4;

`;

export const Td = styled.td`
display: flex;
flex-flow: row;
justify-content: space-between;
width: 300px;
`;
