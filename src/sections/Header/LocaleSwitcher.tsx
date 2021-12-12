import { Fragment, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useI18n, Locale } from 'src/i18n';

const LocaleSwitcher: React.VFC = () => {
  const { locale, locales, asPath, push } = useRouter();
  const { t } = useI18n();
  const [selected, setSelected] = useState(locale);

  const handleLocaleChange = useCallback(
    (e: string) => {
      if (!locales || locales.length < 2 || !locale) return;

      const newLocale = locales.filter((item) => item !== locale)[0];
      push(asPath, asPath, { locale: newLocale });
      setSelected(e);
    },
    [asPath, locale, locales, push],
  );

  if (!locales || locales.length < 2 || !locale) return <></>;

  return (
    <div className="w-28 sm:w-36">
      <Listbox value={selected} onChange={handleLocaleChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-900 text-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{t(selected as Locale)}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {locales.map((l, i) => (
                <Listbox.Option
                  key={i}
                  className='text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4'
                  value={l}
                >
                  {({ selected }) => (
                    <>
                      <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>{t(l as Locale)}</span>
                      {selected ? (
                        <span
                          className='absolute inset-y-0 left-0 flex items-center pl-3'
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default LocaleSwitcher;
