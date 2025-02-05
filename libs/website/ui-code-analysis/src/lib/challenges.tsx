import { LinkIcon } from '@heroicons/react/24/outline';

export function Challenges(): JSX.Element {
  return (
    <div
      data-test-id="what-makes-code-analysis-challenging-for-monorepos"
      id="what-makes-code-analysis-challenging-for-monorepos"
      className="bg-slate-50 px-4 sm:px-6 lg:px-8 dark:bg-slate-800"
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="relative">
          <div className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # What makes Code Analysis challenging for monorepos?
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#what-makes-code-analysis-challenging-for-monorepos"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Monorepos simplify configuration sharing but introduce unique challenges for efficient code analysis and linting.
          </p>
        </header>

        <article className="relative mt-2 sm:mt-6 lg:mt-12">
          <div className="bg-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 dark:bg-slate-800">
            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
              While monorepos make it simpler to share one set of linter configs for all your projects, most tools are built for polyrepos and don’t work well in a monorepo environment. 
            </p>
            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
              Linters can take much longer to run because monorepos tend to grow much larger. Managing dozens of tools, their configs, and their required runtimes can be complex. Code analysis output can be overwhelming and hard to read. All of this makes managing and running linters in monorepos cumbersome and tricky.
            </p>
            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
              Code analysis for monorepos should provide ways to run fast on a lot of code, manage and run the many tools needed, offer a high degree of customization, and make large numbers of issues readable.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
