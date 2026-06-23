import { getRequestConfig } from 'next-intl/server';

export const defaultLocale = 'ja';
export const locales = ['ja', 'en'] as const;

export default getRequestConfig(async ({ locale }: any) => ({
  locale,
  messages: (await import(`./messages/${locale}.json`)).default,
} as any));
