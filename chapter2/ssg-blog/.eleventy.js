module.exports = config => {
  config.addCollection('posts', collection =>
    collection.getFilteredByGlob('./src/posts/*.md')
  );
    
  return {
    dir: {
      input: 'src',
      output: 'build'
    }
  };
};
    