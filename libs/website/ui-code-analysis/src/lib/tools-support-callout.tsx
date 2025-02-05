export function ToolsSupportCallout(): JSX.Element {
  return (
    <article className="bg-slate-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 xl:py-20 xl:px-20">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="block text-gray-900 dark:text-white">
                It's not just about the features.
              </span>
            </h1>
            <p className="mt-4 text-xl leading-6 text-gray-700 dark:text-gray-300">
              Features matter! You want code analysis tools that support the languages and tools you use and can manage tool versions and configs to keep your repo maintainable. Some other features, however, depend on your needs. If you have a large monorepo with millions, you need tools that can lint only what’s changed in each commit to keep linting fast. If you use a specific IDE, you might prefer tools that integrate best with your IDE. You might prefer to not choose tools with many config options and opt for more opinionated solutions.
            </p>
            <p className="mt-4 text-xl leading-6 text-gray-700 dark:text-gray-300">
              It’s important to pick the right tools for you and your needs, not just pick the tools with the most features.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
