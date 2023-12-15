import type { IPlugin } from 'build-scripts';

const plugin: IPlugin = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig(config => {
    config.resolve.mainFields
      .clear('.mjs').add('main').add('module');
  });
};

export default plugin;
