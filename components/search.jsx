"use client";
import React from "react";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";

let firstLoad = true;

const searchClient = algoliasearch(
  "ZSIO5OVF0X",
  "9afdb7f51fc40ae618500a3c4df06709"
);
const algoliaClient = {
  ...searchClient,
  search(requests) {
    if (firstLoad === true) {
      firstLoad = false;
      return;
    }
    return searchClient.search(requests);
  },
};

const Hit = ({ hit }) => (
  <ul role="list" className="p-6 divide-y divide-slate-200">
    <Highlight hit={hit} attribute="slug" />
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src={`${hit.image}`} alt="" />
      <div class="ml-3 overflow-hidden">
        <a
          href={`https://www.pasteleria-saludable.com.ar/${hit.slug}`}
          className=" text-sm font-medium text-[#643E17]"
        >
          {hit.title}
        </a>
        <p className="text-sm text-slate-500 truncate">{hit.description}</p>
      </div>
    </li>
  </ul>
);

export default function search() {
  return (
    <InstantSearch
      searchClient={algoliaClient}
      indexName="recetas-de-pasteleria-saludable"
    >
      <SearchBox
        translations={{
          placeholder: "Buscar...",
        }}
        className={
          "relative border border-[#FFBAA9] focus:border-[#E26698] w-full p-2 bg-white placeholder-slate-400  text-[#643E17]"
        }
      />

      <Hits hitComponent={Hit} className="absolute mt-10 z-40 bg-white" />
    </InstantSearch>
  );
}
