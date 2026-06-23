'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
  ];

  const handleLanguageChange = (newLocale: string) => {
    let pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    
    // Remove current locale prefix
    if (locale === 'en' && pathname.startsWith('/en')) {
      pathname = pathname.slice(3) || '/'; // Remove '/en'
    }
    // ja doesn't have prefix, so no removal needed
    
    // Add new locale prefix if switching to en
    if (newLocale === 'en') {
      pathname = '/en' + pathname;
    }
    // ja doesn't need prefix

    router.push(pathname);
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
