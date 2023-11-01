import styled from "styled-components";

export const ProfileWrapper = styled.div`
padding: 15px 0 6px 0;
margin: 0 auto;
border: 1px solid ${p => {
    return p.theme.colors.black;
}};
width: 300px;`

export const ProfileImage = styled.img`
margin: 0 auto;`

export const ProfileInfo = styled.p`
text-align: center;
margin-top: 8px;
color: ${p => {
    return p.theme.colors.darkgrey
}};`

export const ProfileList = styled.ul`
display: flex;
max-width: 100%;
margin-top: 8px;
align-items: center;
justify-content: center;`

export const ProfileListItem = styled.li`
display: flex;
flex-direction: column;
border: 1px solid ${p => {
    return p.theme.colors.black;
}};
width: 95px;
padding: 15px;
align-items: center;
justify-content: center;
background-color: ${p => {
    return p.theme.colors.grey;
}};`