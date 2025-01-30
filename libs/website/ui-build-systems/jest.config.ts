/* eslint-disable */
export default {
  displayName: 'website-ui-build-systems',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/website/ui-build-systems',
  preset: '../../../jest.preset.js',
};
