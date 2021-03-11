export default ()=> ({
  isDev: process.env.NODE_ENV === 'test',
  clientDir: 'client',
});
