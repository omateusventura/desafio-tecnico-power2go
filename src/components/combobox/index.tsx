import { Fragment, useState } from 'react'
import { Combobox as ComboboxHeadless, Transition } from '@headlessui/react'
import { countries } from '@/utils/data/countries'
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { IoIosCheckmark } from "react-icons/io";
import React from 'react';

interface ComboboxProps extends React.InputHTMLAttributes<HTMLInputElement>{
  isInvalid?: boolean;
}

export const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(({ isInvalid, ...props }, ref) => {
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');

  const filteredCountry =
    query === ''
      ? countries
      : countries.filter((country) => {
         return country.name.common
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
        });

  return (
      <ComboboxHeadless value={selected} onChange={setSelected}>
        <ComboboxHeadless.Input
          { ...props }
          ref={ref}
          className="input peer"
          onChange={(event) => setQuery(event.target.value)}
          data-invalid={isInvalid}
          autoFocus
        />

        <ComboboxHeadless.Label 
          className="label"
          data-invalid={isInvalid}
        >
          Busque por um país
        </ComboboxHeadless.Label>

        <ComboboxHeadless.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <HiOutlineChevronUpDown    
            className={`h-5 w-5 ${ isInvalid ? 'text-red-300' : 'text-gray-400'}`}
            aria-hidden="true" 
          />
        </ComboboxHeadless.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <ComboboxHeadless.Options 
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md z-10
          bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            {
              countries.length === 0 && query !== '' 
              ? 
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nenhum país encontrado
                </div>
              : 
                filteredCountry.map((country, index) => (
                  <ComboboxHeadless.Option
                    key={index}
                    value={country.name.common}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 
                      ${active ? 'bg-slate-900 text-white' : 'text-gray-900'}`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {country.name.common}
                        </span>
                        
                        {
                        /** 
                        * Ícone de check 
                        */
                        selected 
                          ? 
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 text-sm
                              ${active ? 'text-white' : 'text-slate-900'}`}
                            >
                              <IoIosCheckmark className="h-5 w-5" aria-hidden="true" />
                            </span>
                          : null
                        }
                      </>
                    )}
                  </ComboboxHeadless.Option>
                ))
              }
            </ComboboxHeadless.Options>
          </Transition>
      </ComboboxHeadless>
  )
})
