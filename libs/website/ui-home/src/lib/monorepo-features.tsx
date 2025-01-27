import { LinkIcon } from '@heroicons/react/24/outline';

export function MonorepoFeatures(): JSX.Element {
  return (
    <div
      data-test-id="monorepo-tools"
      id="monorepo-tools"
      className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-800 lg:py-24"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # Monorepo tools
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-tools"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Monorepos can give you better return on investment when you improve your repo&apos;s developer experience, but you need the right tools to get there. Monorepo tools let you add consistency, reduce friction, and performing large scale refactorings, facilitate code sharing and cross-team collaboration, and allow your organization to work more efficiently.
          </p>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            But most tools are built for polyrepos. Monorepos are larger, busier, and more complex to scale. You need the right tools to overcome unique monorepo challenges.
          </p>
        </div>

        <div className="lg:gap-22 mt-12 grid gap-16 pt-12 lg:grid-cols-2">
          <a 
            href="https://trunk.io/ci-analytics?utm_source=monorepo.tools&utm_medium=website&utm_campaign=monorepo-features"
            title="Explore build systems"
            className="group flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700"
          >
            <div className="relative flex-1 px-6 py-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Scalable Build Systems
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Polyglot monorepos are complex. You need the right build systems to keep your project fast, understandable and manageable.
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8 group-hover:bg-[#0070f3] transition-colors">
              <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors">
                Explore build systems<span aria-hidden="true"> &rarr;</span>
              </span>
            </div>
          </a>
          <a
            href="https://trunk.io/code-quality?utm_source=monorepo.tools&utm_medium=website&utm_campaign=monorepo-features"
            title="Explore code analysis tools"
            className="group flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700"
          >
            <div className="relative flex-1 px-6 py-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Scalable Code Analysis
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Linting is tricky in monorepos with tons of code, diverse configurations, and interdependencies across multiple projects. Use the right tools to maintain quality, manage dependencies, and do it fast.
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8 group-hover:bg-[#a200ff] transition-colors">
              <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors">
                Explore code analysis tools<span aria-hidden="true"> &rarr;</span>
              </span>
            </div>
          </a>
          <a 
            href="https://trunk.io/merge-queue?utm_source=monorepo.tools&utm_medium=website&utm_campaign=monorepo-features"
            title="Explore ways to merge"
            className="group flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700"
          >
            <div className="relative flex-1 px-6 py-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Scalable Code Merging
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Monorepos get busy. Use the right tools to keep PRs flowing while avoiding conflicts, save CI time, and alleviate bottlenecks.
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8 group-hover:bg-[#27CA6D] transition-colors">
              <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors">
                Explore ways to merge<span aria-hidden="true"> &rarr;</span>
              </span>
            </div>
          </a>
          <a
            href="https://trunk.io/flaky-tests?utm_source=monorepo.tools&utm_medium=website&utm_campaign=monorepo-features"
            title="Explore test management"
            className="group flex flex-col rounded-2xl bg-slate-100 shadow-xl dark:bg-slate-700"
          >
            <div className="relative flex-1 px-6 py-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Scalable Test Management
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Big monorepos can have have thousands of tests across dozens of CI jobs, which makes it challenging to monitor test results, catch flaky tests, and alert owners when things break.
              </p>
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl bg-slate-200 p-6 dark:bg-slate-900 md:px-8 group-hover:bg-[#ff4a11] transition-colors">
              <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors">
                Explore test management<span aria-hidden="true"> &rarr;</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
