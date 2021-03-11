module.exports = (phase, { defaultConfig }) => {
  
  return {
    ...defaultConfig,
    /* custom config options here */
    distDir: '../dist/client',
    reactStrictMode: true,
    poweredByHeader: false,
  };
};
