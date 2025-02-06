import { LinkIcon } from '@heroicons/react/24/outline';

export function Challenges(): JSX.Element {
  return (
    <div
      data-test-id="what-makes-merging-challenging-for-monorepos"
      id="what-makes-merging-challenging-for-monorepos"
      className="bg-slate-50 px-4 sm:px-6 lg:px-8 dark:bg-slate-800"
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="relative">
          <div className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            # What makes merging challenging for monorepos?
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#what-makes-merging-challenging-for-monorepos"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Merging in a busy monorepo is frequently described as babysitting a PR
          </p>
        </header>

        <article className="relative mt-2 sm:mt-6 lg:mt-12">
          <div className="bg-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 dark:bg-slate-800">
            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
              Busy repos need merge queues because of logical merge conflicts. When enough people start making changes to the same repo, they inadvertently create changes that have conflicting logic, even if there are no git conflicts. This is why many companies like Uber, Google, Meta, and Stripe have all adopted merge queues. 
            </p>
            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
              In a smaller repo, you can keep rebasing your changes and retesting. But busy repos, especially repos with long-running tests make this approach impractical. Main branch will change frequently, and you might have to retest several times before you can get a PR merged. This is exacerbated during peak hours like Friday before a release.
            </p>
            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
              Additionally, merge queues need to handle the complex relationships defined in a monorepo. Some build targets are related, and some aren’t. If you updated a file in the documentation, you shouldn’t wait in the same queue behind a backend change. It should be obvious that these changes are unrelated.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
