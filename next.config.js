module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  images: {
    domains: ["s3.us-west-2.amazonaws.com"]
  }
};
