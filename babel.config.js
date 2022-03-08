module.exports = {
  presets: ['next/babel'],
  plugins: [
    // necessário p/ evitar o erro 'Prop className did not match'
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        minify: true,
        transpileTemplateLiterals: true,
        pure: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
}
