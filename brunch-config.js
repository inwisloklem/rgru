const format = svg => svg.replace(/<symbol/gi, '\n  <symbol')
  .replace(/<\/symbol>/gi, '  </symbol>\n');

module.exports = {
  conventions: {
    assets: /^(app\/assets\/(?!svgsprite))/,
  },

  modules: {
    autoRequire: {
      'js/index.js': ['index'],
    },
  },

  files: {
    javascripts: {
      joinTo: 'js/index.js',
    },
    stylesheets: {
      joinTo: 'css/style.css',
    },
  },

  plugins: {
    svgsprite: {
      shape: {
        transform: [{
          svgo: {
            plugins: [
              { sortAttrs: true },
              { convertColors: { shortname: false, currentColor: true } },
              { removeTitle: true },
              { removeRasterImages: true },
              { removeStyleElement: true },
              { removeAttrs: { attrs: '(class|fill-rule|stroke-miterlimit)' } },
            ],
            js2svg: { pretty: true, indent: 2 },
          },
        }],
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        precision: 2,
        transform: [
          format,
        ],
      },
      mode: {
        symbol: { dest: './public', sprite: 'img/symbols.svg' },
      },
    },
    cssnano: {
      autoprefixer: {
        add: true,
      },
    },
  },
};
