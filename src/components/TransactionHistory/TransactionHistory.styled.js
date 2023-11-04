import styled from "styled-components";

export const Table = styled.table`
margin: 0 auto;
width: 700px;
margin-bottom: 30px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);`

export const TableHead = styled.thead`
background-color: ${p => {
    return p.theme.colors.blue;
}};
color: ${p => {
    return p.theme.colors.white}};`

export const Title = styled.th`
padding: 4px;`

export const TableBody = styled.tbody`
text-align: center;

tr:nth-child(even){
    background-color: ${p => {
    return p.theme.colors.grey;
}};
}

color: ${p => {
    return p.theme.colors.darkgrey;
}};`