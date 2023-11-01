import { Item, FriendStatus, FriendName } from "./FriendListItem.styled"

export const FriendListItem = (({friend:{isOnline, avatar, name}}) => {
    return(
        <Item>
            <FriendStatus $status={isOnline}>{isOnline}</FriendStatus>
            <img src={avatar} alt={name} width="100"/>
            <FriendName>{name}</FriendName>
        </Item>
    )
})