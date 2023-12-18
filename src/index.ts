import type { IPlugin } from 'build-scripts';

function getValidOptions (options: any): { mainFields: string[] } {
  if (options && typeof options === 'object' && 'mainFields' in options && Array.isArray(options.mainFields)) {
    return {
      mainFields: options.mainFields
    };
  }

  return {
    mainFields: ['main', 'module']
  };
}

const plugin: IPlugin = ({ onGetWebpackConfig }, options) => {
  onGetWebpackConfig(config => {
    const mainFields = getValidOptions(options).mainFields;

    const chainable = config.resolve.mainFields
      .clear('.mjs');

    for (const field of mainFields) {
      chainable.add(field);
    }
  });
};

export default plugin;
