module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    },
    {
      test: /\.json$/,
      exclude: /(node_modules)/,
      use: {
        loader: "json-loader"
      }
    }
  ];
}
