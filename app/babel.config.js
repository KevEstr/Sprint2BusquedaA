// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react', // Agrega esta línea
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  }
};

module.exports = {
  presets: [
    '@babel/preset-env',
  ],
  plugins: [
    '@babel/plugin-syntax-jsx', // Agrega esta línea
  ],
};

