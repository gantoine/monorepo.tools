const tools1: { name: string; link: string }[] = [
  {
    name: 'Codacy Quality',
    link: 'https://www.codacy.com/?utm_source=monorepo.tools',
  },
  {
    name: 'Megalinter',
    link: 'https://github.com/oxsecurity/megalinter?utm_source=monorepo.tools',
  },
  {
    name: 'Qodana',
    link: 'https://www.jetbrains.com/qodana/?utm_source=monorepo.tools',
  },
];

const tools2: { name: string; link: string }[] = [
  {
    name: 'Precommit',
    link: 'https://github.com/pre-commit/pre-commit?utm_source=monorepo.tools',
  },
  {
    name: 'Sonarqube',
    link: 'https://www.sonarsource.com/products/sonarqube/?utm_source=monorepo.tools',
  },
  {
    name: 'Superlinter',
    link: 'https://github.com/super-linter/super-linter?utm_source=monorepo.tools',
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
      <div className="mt-4 grid grid-cols-3 gap-3 pb-12 text-lg font-semibold lg:mb-16 lg:pb-16 lg:text-2xl">
        <a
          href="https://trunk.io/code-quality?utm_source=monorepo.tools"
          title="Trunk Code Quality"
          rel="noreferrer"
          target="_blank"
          className="col-span-1 col-start-2 flex justify-center rounded bg-slate-100 py-8 px-8 transition hover:bg-yellow-500 hover:text-gray-800 dark:bg-slate-900 hover:dark:bg-yellow-500"
        >
          Trunk Code Quality
        </a>
      </div>
    </>
  );
}
