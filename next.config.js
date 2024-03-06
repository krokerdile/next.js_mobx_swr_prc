module.exports = {
  swcMinify: true,
  compiler: {
    // ssr, displayName true가 기본값으로 켜진다.
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    // 필요한 webpack 설정 추가
    if (!isServer) {
      config.resolve.alias['mobx-react'] = 'mobx-react-lite';
    }

    return config;
  },
};
