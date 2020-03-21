const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    const {
      gitHubUserName,
      techs,
      latitude,
      longitude,
    } = req.body;

    let dev = await Dev.findOne({ gitHubUserName });

    if (!dev) {
      const techsArray = parseStringAsArray(techs);
      const apiResponse = await axios.get(`https://api.github.com/users/${gitHubUserName}`);
      const {
        login,
        name = login,
        avatar_url: avatarUrl,
        bio,
      } = apiResponse.data;

      const location = {
        type: 'Point',
        coordinates: [latitude, longitude],
      };

      dev = await Dev.create({
        gitHubUserName,
        name,
        avatarUrl,
        bio,
        techs: techsArray,
        location,
      });

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      );

      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }

    return res.json(dev);
  },
};
