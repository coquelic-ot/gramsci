'use client';

import { useLocale, usePathname } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
  ];

  const handleLanguageChange = (newLocale: string) => {
    // pathname is already without locale prefix from usePathname()
    const newPathname = pathname === '/' ? '/' : pathname;

    // Navigate to the new locale
    router.push(newPathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 text-sm font-medium hover:text-accent transition-colors"
        aria-label="Select language"
      >
        {locale.toUpperCase()}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                locale === lang.code ? 'font-bold text-accent' : ''
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
