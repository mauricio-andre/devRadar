import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatarUrl} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.gitHubUserName}`}>Acessar perfil git hub</a>
    </li>
  );
}

DevItem.propTypes = {
  dev: PropTypes.shape({
    gitHubUserName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    techs: PropTypes.array,
    bio: PropTypes.string,
  }).isRequired,
};

export default DevItem;
