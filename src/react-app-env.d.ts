/// <reference types="react-scripts" />

declare module '*.less' {
  const classes: readonly Record<string, string>;
  export default classes;
}
