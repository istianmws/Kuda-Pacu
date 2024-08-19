/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly STRAPI_URL: string;
    readonly PAGE_SIZE: number;
}