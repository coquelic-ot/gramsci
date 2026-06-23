import { getRequestConfig } from 'next-intl/server';

export const defaultLocale = 'ja';
export const locales = ['ja', 'en'] as const;

export default getRequestConfig(async ({ locale }: any) => {
  const resolvedLocale = locale || defaultLocale;
  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
  } as any;
});
