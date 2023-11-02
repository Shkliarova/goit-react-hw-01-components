import styled from "styled-components";
import { generateRandomColor } from "functions";

export const StatisticsWrapper = styled.section`
border: 1px solid ${p => {
    return p.theme.colors.green;
}};
margin: 0 auto;
margin-top: 20px;
width: 500px;
padding: 15px;
text-align: center;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);`

export const StatisticsTitle = styled.h2`
color: ${p => {
    return p.theme.colors.green;
}};`

export const StatisticsList = styled.ul`
display: flex;
margin-top: 12px;`

export const StatisticsItem = styled.li`
padding: 16px;
width: 100%;
display: flex;
flex-direction: column;
gap: 8px;
background-color: ${p => {
    return generateRandomColor;
}};`

export const StatisticsText = styled.span`
font-size: larger;`