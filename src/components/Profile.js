export const Profile = ({user}) => {
    return (
        <div>
            <div>
                <img 
                src={user.avatar}
                alt={user.username}
                width="100"
                />
                <p>{user.username}</p>
                <p>@{user.tag}</p>
                <p>{user.location}</p>
                <ul>
                    <li>
                        <span>Followers </span>
                        <span>{user.stats.followers}</span>
                    </li>
                    <li>
                        <span>Views </span>
                        <span>{user.stats.views}</span>
                    </li>
                    <li>
                        <span>Likes </span>
                        <span>{user.stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}