/* eslint-disable */
const withPWA = require('next-pwa');

const config = {
  async redirects() {
    return [
      {
        source: '/twitter',
        destination:
          process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL || 'https://twitter.com',
        permanent: true,
      },
      {
        source: '/github',
        destination:
          process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL || 'https://github.com',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination:
          process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL ||
          'https://linkedin.com',
        permanent: true,
      },
      {
        source: '/youtube',
        destination:
          process.env.NEXT_PUBLIC_YOUTUBE_REDIRECT_URL || 'https://youtube.com',
        permanent: true,
      },
      {
        source: '/uses',
        destination: '/blog/my-uses',
        permanent: true,
      },
      {
        source: '/code-snippets/:slug',
        destination: '/snippets/:slug',
        permanent: true,
      },
      {
        source: '/blog/setting-up-snailycad',
        destination: '/blog/setting-up-snailycad-windows',
        permanent: true,
      },
      {
        source: '/markdown',
        destination: '/utils/md-html',
        permanent: true,
      },
      {
        source: '/per',
        destination: '/utils/percentage-calculator',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      };
    }

    return config;
  },
  experimental: { esmExternals: 'loose' },
};

module.exports = withPWA({
  ...config,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
});
