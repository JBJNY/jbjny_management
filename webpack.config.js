const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 번들링 모드 development or production
  entry: "./src/index.tsx", // 번들링 시작 file
  output: {
    path: path.join(__dirname, "/dist"), // 번들 결과물 위치
    filename: "bundle.js", // 번들링 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.ts$|tsx/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/, // node_module은 제외하여 적용
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        // 확장자가 .css 파일이 있을경우 style-loader, css-loader를 실행함
        // use에 들어있는 요소는 뒤에부터 실행됨, css파일을 style tag로 transpiling
      },
      {
        test: /\.jpg$/,
        use: ["file-loader"],
        // 확장자가 .jpg 파일이 있을경우 file-loader 를 실행함
        // 이미지 파일을 로드하기위해 사용
      },
    ],
  },
  resolve: {
    // 절대경로로 찾게해주는 라이브러리
    modules: [path.join(__dirname, "src"), "node_modules"], // 모듈 위치
    extensions: [".js", ".jsx", ".ts", ".tsx"], // 절대경로 확장자명
    alias: {
      "@Hooks": path.resolve(__dirname, "src/hooks"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Pages": path.resolve(__dirname, "src/pages"),
      "@Store": path.resolve(__dirname, "src/store"),
      "@Types": path.resolve(__dirname, "src/types"),
      "@Api": path.resolve(__dirname, "src/api"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(), // 이전 빌드한 파일을 지움
    new HtmlWebpackPlugin({
      template: `./public/index.html`, // 해당 경로 hmtl을 사용하여 빌드
      filename: "./index.html", // 빌드된 html 파일
    }),
  ],
  devServer: {
    // dev server로 실행
    host: "localhost",
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
};
