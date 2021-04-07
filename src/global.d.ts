/* eslint-disable @typescript-eslint/no-explicit-any */
declare const beforeScenario: any;
declare const step: any;
declare const gauge: any;
declare const beforeSuite: any;
declare const beforeSpec: any;
declare const afterScenario: any;
declare const afterSpec: any;
declare const afterSuite: any;
declare const afterStep: any;
declare module "uuid";

declare namespace NodeJS {
  interface ProcessEnv {
    readonly PUPPETEER_TIMEOUT: string;
    readonly BROWSER_HEADLESS: "true" | "false" | "TRUE" | "FALSE";
    readonly AMAZON_URL: string;
    readonly AMAZON_USERNAME: string;
    readonly AMAZON_PASSWORD: string;
  }
}
