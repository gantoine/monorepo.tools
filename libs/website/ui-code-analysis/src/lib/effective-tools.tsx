import {
  LinkIcon,
  EyeIcon,
  Bars2Icon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CogIcon,
  PuzzlePieceIcon,
  CodeBracketSquareIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Lint only what’s changed',
    category: 'Fast',
    icon: EyeIcon,
    anchor: 'lint-only-whats-changed',
  },
  {
    name: 'Lint in parallel',
    category: 'Fast',
    icon: Bars2Icon,
    anchor: 'lint-in-parallel',
  },
  {
    name: 'Standardize linter output',
    category: 'Understandable',
    icon: DocumentDuplicateIcon,
    anchor: 'standardize-linter-output',
  },
  {
    name: 'Browse new and existing issues',
    category: 'Understandable',
    icon: ExclamationTriangleIcon,
    anchor: 'browse-new-and-existing-issues',
  },
  {
    name: 'Multi-language quality and security tools',
    category: 'Manageable',
    icon: CodeBracketIcon,
    anchor: 'multi-language-quality-and-security-tools',
  },
  {
    name: 'Tooling install and management',
    category: 'Manageable',
    icon: CogIcon,
    anchor: 'tooling-install-and-management',
  },
  {
    name: 'Supports extensions',
    category: 'Manageable',
    icon: PuzzlePieceIcon,
    anchor: 'supports-extensions',
  },
  {
    name: 'Runs in CI',
    category: 'Manageable',
    icon: CloudIcon,
    anchor: 'runs-in-ci',
  },
  {
    name: 'Runs locally',
    category: 'Manageable',
    icon: CommandLineIcon,
    anchor: 'runs-locally',
  },
  {
    name: 'Runs in your IDE ',
    category: 'Manageable',
    icon: CodeBracketSquareIcon,
    anchor: 'runs-in-your-ide',
  },
];

export function EffectiveTools(): React.JSX.Element {
  return (
    <div
      data-test-id="what-code-analysis-should-provide"
      id="what-code-analysis-should-provide"
      className="overflow-hidden bg-slate-50 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <nav className="px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # What code analysis should provide
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#what-code-analysis-should-provide"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Just like monorepo build tools, good code analysis tools also help you keep linting, formatting, and security checks fast, understandable, and manageable.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            {features.map((feature) => (
              <a
                key={feature.anchor}
                href={'#' + feature.anchor}
                title={feature.name}
                className="group relative block overflow-hidden rounded-md bg-slate-100 px-4 py-5 text-gray-800 transition hover:bg-yellow-500 hover:text-gray-800 dark:bg-slate-900 dark:text-gray-200 hover:dark:bg-yellow-500 hover:dark:text-gray-800"
              >
                <div className="relative flex items-center space-x-4">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                  <h3 className="flex flex-grow text-lg font-medium">
                    {feature.name}
                  </h3>
                  <span className="absolute bottom-2.5 right-0 inline-flex items-center rounded-full bg-white bg-opacity-20 px-2.5 py-0.5 text-xs font-medium capitalize">
                    {feature.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
