import React from "react";

const UserInfo = ({ userData }) => {
  return (
    <div className="userInfo">
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
      <h2>{userData.login}</h2>
      <p>{userData.bio}</p>
      <p>
        <strong>Public Repos:</strong> {userData.public_repos}
      </p>
      <p>
        <strong>Followers: </strong>
        {userData.followers}
      </p>
      <p>
        <strong>Following: </strong>
        {userData.following}
      </p>
      <p>
        <strong>Location: </strong>
        {userData.location}
      </p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserInfo;
