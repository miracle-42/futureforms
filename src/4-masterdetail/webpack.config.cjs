module.exports =
{
  devtool: "eval-source-map",
  entry: './src/index.ts',
  output:
  {
    path: __dirname+'/../../build/4-masterdetail/app',
    filename: '4-masterdetail.js',
    library: "forms42core"
  },
  module:
  {
    rules:
    [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'ts-loader'
        }
      }
      ,
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
  ,
  resolve:
  {
    extensions: ['.ts','.js']
  }
  ,
  performance:
  {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000
  }
}
