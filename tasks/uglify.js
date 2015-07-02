module.exports = {
  options: {
    banner: '<%= banner %>'
  },
  dist: {
    src: 'lib/**/*.js',
    dest: 'dist/<%= pkg.name.replace(/.js$/, "") %>.min.js'
  }
};
