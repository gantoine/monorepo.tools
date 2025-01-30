import { LinkIcon } from '@heroicons/react/24/outline';

export function WhatIsAMonorepoBuildSystem(): JSX.Element {
  return (
    <div
      data-test-id="what-is-a-monorepo-build-system"
      id="what-is-a-monorepo-build-system"
      className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-800 lg:py-24"
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="relative">
          <div className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # What is a Monorepo build system?
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#what-is-a-monorepo-build-system"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        </header>

        <article className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
          <div className="mx-auto max-w-2xl">
            <h2
              id="the-right-tools"
              className="font-semiboldtext-gray-800 dark:text-gray-100sm:text-4xl group text-3xl tracking-tight"
            >
              Monorepos have a lot of advantages, but to make them work you need to have the right tools
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#the-right-tools"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Most build systems are designed for polyrepos that contain code for a single project and not a monorepo that contains multiple distinct projects, with well-defined relationships.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Build systems designed for monorepos to help you manage the defined relationship between projects in a monorepo. As your workspace grows, monorepo build systems help you keep it fast, understandable and manageable.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
