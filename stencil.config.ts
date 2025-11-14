import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import tailwind, { setPluginConfigurationDefaults, tailwindGlobal, tailwindHMR } from 'stencil-tailwind-plugin';

setPluginConfigurationDefaults({
  enableDebug: false,
  tailwindCssPath: './src/styles/tailwind.css',
});

export const config: Config = {
  namespace: 'cacib',
  tsconfig: 'tsconfig.json',
  plugins: [sass(), tailwindGlobal(), tailwind(), tailwindHMR()],
  devServer: {
    reloadStrategy: 'pageReload',
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    {
      type: 'docs-json',
      file: './custom-elements.json',
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
