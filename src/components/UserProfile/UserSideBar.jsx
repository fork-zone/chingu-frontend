import * as React from "react";
import './UserSideBar.css'
import UserInfo from './UserInfo';
import { UserSkillsPicker, DesiredSkillsPicker } from "./components";
import { userAddSkills } from './graphql/skillMutations';

const Links = ({ user: { username } }) => (
  <div className="user-links">
    <h1 className="user-sidebar-subcategory">links</h1>
    <ul>
      <li>
        <a target="_blank" href={`https://www.github.com/${username}`}>
          <i className="fab fa-github fa-3x" />
        </a>
      </li>
    </ul>
  </div>
);

// -- SKILL ELEMENTS -- //
const USER_SKILLS_DOM_ELEMENTS = [
  {
    divClassName: 'user-skills',
    schemaKey: 'skills',
    desc: 'Skills',
    mutation: userAddSkills,
    mutationName: 'userAddSkills'
  },
];

// -- USER SIDEBAR (EXPORT)-- // 
const UserSideBar = ({ user, editable }) => (
  <div className="user-profile-container-personal">
    <header className="user">
      <div className="photobox">
        <img
          className="user-photo"
          src={user ? user.avatar : require('../../assets/blank image.png')}
          alt="userprofile" />
        <p>{user.username}</p>
        <p>Based in {user.country}</p>
      </div>
      <ul className="positions">
        <li className="position">
          <span><i className="fas fa-check" /></span>
          Programmer
        </li>
      </ul>
    </header>
    <UserInfo user={user} editable={editable} />
    <UserSkillsPicker
      user={user}
      editable={editable}
    />
    <DesiredSkillsPicker 
      user={user} 
      editable={editable}
    />
    <Links user={user} />
  </div>

);

export default UserSideBar;