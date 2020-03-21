import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function DevForm({ onSubmit }) {
  const [gitHubUserName, setGitHubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: apiLatitude, longitude: apiLongitude } = position.coords;
        setLatitude(apiLatitude);
        setLongitude(apiLongitude);
      },
      () => {
      },
      {
        timeout: 30000,
      },
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      gitHubUserName,
      techs,
      latitude,
      longitude,
    });

    setGitHubUserName('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="gitHubUserName">
          Usuário do Github
          <input
            type="text"
            name="gitHubUserName"
            id="gitHubUserName"
            required
            value={gitHubUserName}
            onChange={(e) => setGitHubUserName(e.target.value)}
          />
        </label>
      </div>

      <div className="input-block">
        <label htmlFor="techs">
          Tecnologias
          <input
            type="text"
            name="techs"
            id="techs"
            required
            value={techs}
            onChange={(e) => setTechs(e.target.value)}
          />
        </label>
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">
            Latitude
            <input
              type="number"
              name="latitude"
              id="latitude"
              required
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </label>
        </div>

        <div className="input-block">
          <label htmlFor="longitude">
            longitude
            <input
              type="numebr"
              name="longitude"
              id="longitude"
              required
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </label>
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

DevForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DevForm;
