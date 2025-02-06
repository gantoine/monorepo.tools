export function KeyFeaturesCallout(): JSX.Element {
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
            Features matter! Some features can be show stoppers, like parallel queue support for your monorepo build system or stacked PRs if that’s how you choose to merge. Some other features entirely depend on your repo’s size and velocity, like the need for batching and PR prioritization.
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
