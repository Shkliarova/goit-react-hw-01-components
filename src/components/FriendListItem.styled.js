import styled from "styled-components";

export const Item = styled.li`
display: flex;
gap: 20px;
border: 1px solid ${p => {
    return p.theme.colors.green;
}};
width: 400px;
padding: 12px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
align-items: center;`

export const FriendStatus = styled.span`
background-color: ${p => {
    return p.$status ? p.theme.colors.lightgreen : p.theme.colors.red;
}};
width: 20px;
height: 20px;
border-radius: 50%;`

export const FriendName = styled.p`
font-size: 28px;
font-weight: 500`