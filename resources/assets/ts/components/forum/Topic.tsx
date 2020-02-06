import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

import { navigate } from "@/utils/helpers";

interface TopicProps {
  title: string;
  solved: boolean;
}

const Topic = ({ title, solved }: TopicProps) => {
  const solvedClass = (solved && solved) ? `bg-white border-brand-primary`: `border-transparent`;

  return (
    <div className="cursor-pointer bg-gray-100 px-6 py-4 mb-4 flex flex-col rounded-lg md:border-0 md:bg-transparent hover:bg-white md:flex-row md:items-center transition-all">
      <div className="flex items-center justify-between mb-4 md:mb-0 md:mr-6">
        <div className="flex items-center">
          <div className={`h-15 w-15 flex items-center justify-center border-2 relative rounded-full ${solvedClass}`}>
            <InertiaLink href="/@mckenziearts" className="h-12 w-12 relative">
              <img className="rounded-full h-12 w-12" src="https://avatars2.githubusercontent.com/u/14105989?s=460&v=4" alt="Arthur Monney" />
              {solved && (
                <svg className="absolute top-0 h-3 w-3" style={{ right: "-5px" }} xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="#007A5E" />
                  <path d="M5.716 8.772a.646.646 0 01-.985 0L3.204 7.066a.845.845 0 010-1.102.646.646 0 01.985 0l.91 1.017c.069.077.18.077.249 0L7.81 4.228a.646.646 0 01.985 0c.13.146.204.344.204.55a.827.827 0 01-.204.551l-3.08 3.443z" fill="#fff" />
                </svg>
              )}
            </InertiaLink>
          </div>
          <span className="text-sm text-gray-800 ml-3 font-medium md:hidden uppercase">mckenzie</span>
        </div>
        <div className="flex items-center md:hidden text-sm">
          <div className="flex mr-3 items-center">
            <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9.333H2.667A1.333 1.333 0 011.334 8V2.667c0-.734.6-1.334 1.333-1.334h8A1.333 1.333 0 0112 2.667V4h1.334a1.333 1.333 0 011.333 1.333V14a.666.666 0 01-1.133.467L11.053 12h-5.72A1.333 1.333 0 014 10.667V9.333zM4 8V5.333C4 4.6 4.6 4 5.333 4h5.334V2.667h-8V8H4zm9.334-2.667h-8v5.334h6a.667.667 0 01.466.2l1.534 1.526v-7.06z" fill="currentColor" />
            </svg>
            <span>1</span>
          </div>
          <InertiaLink href="/forum" className="text-xs font-bold py-2 px-3 rounded-full bg-opacity-laravel text-brand-laravel">Laravel</InertiaLink>
        </div>
      </div>
      <div className="md:pr-10">
        <h4 className="text-gray-800 font-medium mb-1 md:text-lg md:mb-2">
          <InertiaLink href="/forum/topics/envoyer-didnt-really-restart-forge-managed-queue-workers">{title}</InertiaLink>
        </h4>
        <p onClick={(e) => navigate(e, '/forum/topics/envoyer-didnt-really-restart-forge-managed-queue-workers')} className="text-sm mb-2 md:text-base md:mb-3">
          Après déploiement de mon site web conçu avec laravel chez l'hébergeur LWS, pour accéder au site je veux utiliser l'adresse www.mondomain...
        </p>
        <div className="text-xs text-gray-500 md:text-sm">
          <InertiaLink href="/@mckenziearts" className="link font-medium">mckenzie</InertiaLink>
          <span> a répondu <span className="text-gray-700 font-medium">il y'a 2h</span></span>
        </div>
      </div>
      <div className="hidden md:flex flex-col">
        <InertiaLink href="/forum/channels" className="text-xs text-center font-bold py-2 px-3 rounded-full bg-opacity-laravel text-brand-laravel md:text-sm md:mb-3">Laravel</InertiaLink>
        <div className="flex items-center text-sm">
          <div className="flex mr-4 text items-center">
            <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9.333H2.667A1.333 1.333 0 011.334 8V2.667c0-.734.6-1.334 1.333-1.334h8A1.333 1.333 0 0112 2.667V4h1.334a1.333 1.333 0 011.333 1.333V14a.666.666 0 01-1.133.467L11.053 12h-5.72A1.333 1.333 0 014 10.667V9.333zM4 8V5.333C4 4.6 4.6 4 5.333 4h5.334V2.667h-8V8H4zm9.334-2.667h-8v5.334h6a.667.667 0 01.466.2l1.534 1.526v-7.06z" fill="currentColor" />
            </svg>
            <span>200</span>
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 mr-1" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.56 17.66a8 8 0 01-11.32 0L1.3 12.7a1 1 0 010-1.42l4.95-4.95a8 8 0 0111.32 0l4.95 4.95a1 1 0 010 1.42l-4.95 4.95-.01.01zm-9.9-1.42a6 6 0 008.48 0L20.38 12l-4.24-4.24a6 6 0 00-8.48 0L3.4 12l4.25 4.24h.01zM11.9 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
            </svg>
            <span>9000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Topic.defaultProps = {
  solved: false
};

export default Topic;