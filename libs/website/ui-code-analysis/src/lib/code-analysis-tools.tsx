import {
  CheckCircleIcon,
  CloudArrowDownIcon,
  CodeBracketIcon,
  CogIcon,
  RectangleStackIcon,
  DocumentArrowDownIcon,
  ExclamationCircleIcon,
  LightBulbIcon,
  LinkIcon,
  PresentationChartLineIcon,
  ServerIcon,
  SignalIcon,
  ArrowsUpDownIcon,
  CommandLineIcon,
  XCircleIcon,
  EyeIcon,
  Bars2Icon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  PuzzlePieceIcon,
  CodeBracketSquareIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';
import { CodeAnalysisToolsLogos } from './code-analysis-tools-logos';

const Supported = () => (
  <span
    title="natively supported"
    className="mr-3 inline-flex items-center rounded-full text-green-600"
  >
    <CheckCircleIcon className="h-5 w-5" />
    <span className="sr-only">natively supported</span>
  </span>
);
const NotSupported = () => (
  <span
    title="not supported"
    className="mr-3 inline-flex items-center rounded-full text-red-600"
  >
    <XCircleIcon className="h-5 w-5" />
    <span className="sr-only">not supported</span>
  </span>
);
const ManualImplementation = () => (
  <span
    title="implement your own"
    className="mr-3 inline-flex items-center rounded-full text-yellow-600"
  >
    <ExclamationCircleIcon className="h-5 w-5" />
    <span className="sr-only">implement your own</span>
  </span>
);

export function CodeAnalysisTools(): JSX.Element {
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
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            We chose code analysis tools that support most popular languages, can perform linting, formatting, and security checks, as well as manage tool installs for your repo. We believe these are the core features necessary for a good code analysis experience in monorepos.
          </p>
        </div>

        <CodeAnalysisToolsLogos />

        {/*FAST*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Fast
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*Lint only what’s changed*/}
        <div
          id="lint-only-whats-changed"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <EyeIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Lint only what’s changed
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#lint-only-whats-changed"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Lint, only the projects and files have changed in this commit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/local-computation-caching.svg"
                alt="local computation caching schema"
              />
            </div>
          </div>

          {/* (alphabetical order) */}
          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Codacy Quality supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Megalinter supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Precommit supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Qodana requires manual input of {" "}
                <span className="py-0.5 px-2 bg-slate-200 dark:bg-slate-800 rounded-md">
                  <code>
                    --diff-start=&lt;GIT_START_HASH&gt; --diff-end=&lt;GIT_END_HASH&gt;
                  </code>
                </span>
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Sonarqube supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Superlinter supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Code Quality supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Lint in parallel*/}
        <div
          id="lint-in-parallel"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <Bars2Icon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Lint in parallel
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#lint-in-parallel"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Execute linters in parallel for faster linting.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/local-task-orchestration.svg"
                alt="local task orchestration schema"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Codacy Quality doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Megalinter supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Precommit supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Qodana doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Sonarqube supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Superlinter supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Code Quality supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*UNDERSTANDABLE*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Understandable
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*Standardize linter output*/}
        <div
          id="standardize-linter-output"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <DocumentDuplicateIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Standardize linter output
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#standardize-linter-output"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Different linters have different output formats. Standardized outputs keeps everything readable even when you run many tools.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/workspace-analysis.svg"
                alt="workspace analysis"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Codacy Quality supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Megalinter generates a mini report, linter level and file level results is starndardized, but individual issues reported isn’t. Also supports reporters.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Precommit linter level and file level results are starndardized, but individual issues reported isn't.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Qodana supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Sonarqube supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Superlinter linter level and file level results are starndardized, but individual issues reported isn't.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
              Trunk Code Quality supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Browse new and existing issues*/}
        <div
          id="browse-new-and-existing-issues"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <ExclamationTriangleIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Browse new and existing issues
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#browse-new-and-existing-issues"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Browse issues found in your repo and surface urgent problems and vulnerabilities.
            </p>

            <div className="mt-10" aria-hidden="true">
              <iframe
                loading="lazy"
                className="relative mx-auto max-w-full rounded-md"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/v87Y8NgAYLo"
                title="Interactive dependency graph visualization with Nx"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Codacy Quality supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Gradle Build supports it via a Graphana integration.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Precommit doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Qodana supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Sonarqube supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Superlinter doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Code Quality supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*MANAGRABLE*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Manageable
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*Multi-language quality and security tools*/}
        <div
          id="multi-language-quality-and-security-tools"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CodeBracketIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Multi-language quality and security tools
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#multi-language-quality-and-security-tools"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Supports linting, formatting, and security tools for most popular languages and frameworks.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/source-code-sharing.svg"
                alt="source code sharing"
              />
            </div>
          </div>
          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Codacy Quality supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Megalinter supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Precommit supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Qodana supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Sonarqube supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Superlinter supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Code Quality supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Tooling install and management*/}
        <div
          id="tooling-install-and-management"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CogIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Tooling install and management
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#tooling-install-and-management"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Manage tool installs, versioning, and required dependencies or language runtimes. For example, sds/scss-lint requires ruby, linter tools should manage both scss-lint and ruby runtime.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/consistent-tooling.svg"
                alt="consistent tooling schema"
              />
            </div>
          </div>
          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Codacy Quality supports it, but the version cannot be specified.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Megalinter supports it, but the version cannot be specified.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Precommit is not hermetic, and you might run into runtime incompatibility issues.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Qodana supports it as containerized tools.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Sonarqube supports it, but the version cannot be specified.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Superlinter supports it, but the version cannot be specified.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Trunk Code Quality supports it, but the version cannot be specified.
              </dd>
            </div>
          </dl>
        </div>

        {/*Supports extensions*/}
        <div
          id="supports-extensions"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <PuzzlePieceIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Supports extensions
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#supports-extensions"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Can be extended with custom rules and plugins to meet your org’s unique quality standards and practices.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/code-generation.svg"
                alt="code generation"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Codacy Quality doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Megalinter supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Precommit requires that you write your own hooks.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Qodana supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Sonarqube supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Superlinter doesn't support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Trunk Code Quality supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Runs in CI*/}
        <div
          id="runs-in-ci"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CloudIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Runs in CI
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#runs-in-ci"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Run linters and report results in CI on PRs and commits.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/project-constrains-and-visibility.svg"
                alt="Runs in CI"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Codacy Quality supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Megalinter supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Precommit supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Qodana supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Sonarqube supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Superlinter supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Trunk Code Quality supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Runs locally*/}
        <div
          id="runs-locally"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CommandLineIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Runs locally
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#runs-locally"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Run locally as a CLI tool as you code and before you commit.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/project-constrains-and-visibility.svg"
                alt="Runs in CI"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Codacy Quality supports it in containerized tools, and some locally installed tools.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Megalinter supports it but requires Docker to run all tools.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Precommit supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Qodana supports running CLI runs tools from containerized images.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Sonarqube supports it though SonarScan.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Superlinter supports it but requires Docker to run all tools.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Trunk Code Quality supports it only in VSCode.
              </dd>
            </div>
          </dl>
        </div>

        {/*Runs in your IDE*/}
        <div
          id="runs-in-your-ide"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CodeBracketSquareIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Runs in your IDE
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#runs-in-your-ide"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Realtime feedback on your changes as you code right in your editor.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/project-constrains-and-visibility.svg"
                alt="Runs in CI"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Codacy Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Codacy Quality only looks at known issues but cannot lint.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Megalinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Megalinter supports it as a dev container.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Precommit
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Precommit supports it in VSCode.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Qodana
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Qodana supports it in Jetbrains IDE.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Sonarqube
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Sonarqube supports it in multiple popular IDEs.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Superlinter
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Superlinter supports it as a dev container.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Code Quality
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Trunk Code Quality supports it in VSCode.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
