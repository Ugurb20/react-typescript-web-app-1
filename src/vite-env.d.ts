/* eslint-disable unicorn/no-empty-file */
// / <reference types="vite/client" />
declare interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_ANOTHER_VARIABLE: string;
  [key: string]: string | undefined;
}
