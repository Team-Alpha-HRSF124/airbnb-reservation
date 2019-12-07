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
    
`;

export const CalendarHeader = styled.tr`
display: flex;
flex-flow: row;
width: 100px;
`;

export const Head = styled.thead`
border: 1px solid #e4e4e4;

border-spacing: 0;
padding-left: 5px;

`;

export const Td = styled.td`
column-span: 5;
display: flex;
flex-flow: row;
justify-content: space-between;
`;
