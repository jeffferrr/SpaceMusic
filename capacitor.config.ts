import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spacemusic.app',
  appName: 'SpaceMusic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
