import React from 'react';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
  const gitHubUserName = navigation.getParam('gitHubUserName');
  return <WebView source={{ uri: `https://github.com/${gitHubUserName}` }} style={{ flex: 1 }} />;
}

export default Profile;
