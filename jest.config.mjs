export default {
  verbose: true,
  moduleNameMapper: {
    "#src/(.*)": "<rootDir>/src/$1"
  },
  reporters: ["default", "github-actions"],
};
