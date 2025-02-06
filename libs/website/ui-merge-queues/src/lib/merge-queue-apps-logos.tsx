const tools1: { name: string; link: string }[] = [
  {
    name: 'Aviator Merge Queue',
    link: 'https://www.aviator.co/merge-queue?utm_source=monorepo.tools',
  },
  {
    name: 'GitHub Merge Queues',
    link: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue?utm_source=monorepo.tools',
  },
  {
    name: 'GitLab Merge Trains',
    link: 'https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html?utm_source=monorepo.tools',
  },
];

const tools2: { name: string; link: string }[] = [
  {
    name: 'Graphite Merge Queues',
    link: 'https://graphite.dev/docs/graphite-merge-queue?utm_source=monorepo.tools',
  },
  {
    name: 'Mergify',
    link: 'https://mergify.com/product/merge-queue?utm_source=monorepo.tools',
  },
  {
    name: 'Trunk Merge',
    link: 'https://trunk.io/merge-queue?utm_source=monorepo.tools',
  },
];

export function CodeAnalysisToolsLogos(): JSX.Element {
  return (
    <>
      <div className="mt-8 grid grid-cols-3 gap-3 pt-12 text-lg font-semibold lg:mt-16 lg:pt-16 lg:text-2xl">
        {tools1.map((tool) => (
          <a
            key={'tool-' + tool.name}
            href={tool.link}
            title={tool.name}
            rel="noreferrer"
            target="_blank"
            className="col-span-1 flex justify-center rounded bg-slate-100 py-8 px-8 transition hover:bg-yellow-500 hover:text-gray-800 dark:bg-slate-900 hover:dark:bg-yellow-500"
          >
            {tool.name}
          </a>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-lg font-semibold lg:text-2xl">
        {tools2.map((tool) => (
          <a
            key={'tool-' + tool.name}
            href={tool.link}
            title={tool.name}
            rel="noreferrer"
            target="_blank"
            className="col-span-1 flex justify-center rounded bg-slate-100 py-8 px-8 transition hover:bg-yellow-500 hover:text-gray-800 dark:bg-slate-900 hover:dark:bg-yellow-500"
          >
            {tool.name}
          </a>
        ))}
      </div>
    </>
  );
}
