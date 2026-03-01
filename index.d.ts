import type { App, DefineComponent, Plugin } from 'vue';

export type InternetStatus = boolean;
export type InternetEvent = Event;

export const vueInternetChecker: DefineComponent<{}, {}, any>;
export const install: (app: App) => void;

declare const _default: Plugin & typeof vueInternetChecker;
export default _default;
