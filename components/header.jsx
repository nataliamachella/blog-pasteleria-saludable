"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icons from "../components/icons";
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

export default function header() {
  return (
    <InstantSearch
      searchClient={algoliaClient}
      indexName="recetas-de-pasteleria-saludable"
    >
      <header className="w-full  flex flex-col md:flex-row justify-evenly gap-3 items-center p-3 ">
        <div className="flex order-2 gap-3 md:order-3">
          <SearchBox
            translations={{
              placeholder: "Buscar...",
            }}
            className={
              "relative border border-[#FFBAA9] focus:border-[#E26698] w-full p-2 bg-white placeholder-slate-400  text-[#643E17]"
            }
          />

          <Hits hitComponent={Hit} className="absolute mt-10 z-40 bg-white" />
        </div>
        <div className="order-1 md:order-2">
          <Link href={"/"}>
            <Image src={"/images/logo.png"} width={80} height={80} alt="logo" />
          </Link>
        </div>
        <div className="order-3 py-3 md:order-1">
          <Icons />
        </div>
      </header>
    </InstantSearch>
  );
}
