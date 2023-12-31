import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.sqlite',
  appName: 'sqlite-with-ionic-storage-test-v1',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
