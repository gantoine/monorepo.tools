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

        {/*Code Generation*/}
        <div
          id="code-generation"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CogIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Code generation
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#code-generation"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Native support for generating code
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
                  <ManualImplementation />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Gradle Build Tool
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  moon
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                moon provides a file system/template based code generation
                layer.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Nx comes with powerful code generation capabilities. It uses a
                virtual file system and provides editor integration. Nx plugins
                provided generators for popular frameworks. Other generators can
                be used as well.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Pants
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Pants ships with plugins for popular code generation frameworks,
                including Protobuf/gRPC, Thrift, Scrooge, Avro, and SOAP. There
                is Plugin API support for easily adding new code generators. It
                supports generating code in multiple languages from a single
                codegen source. It is able to infer dependencies by static
                analysis of codegen sources, and correctly invalidate generated
                code when those sources change.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Rush
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                The Rush maintainers suggest to maintain project templates as
                ordinary projects in the monorepo, to ensure they compile
                without errors. A project scaffolding command is available via a
                community plugin.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                External generators can be used.
              </dd>
            </div>
          </dl>
        </div>

        {/*Explicit Project Constrains*/}
        <div
          id="explicit-project-constrains"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <SignalIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Project constraints and visibility
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#explicit-project-constrains"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Supports definition of rules to constrain dependency relationships
              within the repo. For instance, developers can mark some projects
              as private to their team so no one else can depend on them.
              Developers can also mark projects based on the technology used
              (e.g., React or Nest.js) and make sure that backend projects don't
              import frontend ones.
            </p>

            <div className="mt-10" aria-hidden="true">
              <img
                loading="lazy"
                className="relative mx-auto"
                width={490}
                src="/images/project-constrains-and-visibility.svg"
                alt="explicit project constrains"
              />
            </div>
          </div>

          <dl className="mt-12 space-y-6 md:mt-0">
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel supports visibility rules which help you separate what is
                private from what is public, what can be shared, etc.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Gradle Build Tool
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                While not supported natively, Gradle Build Tool's rich plugin
                possibilities allow rules like these to be developed.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                A linter with a set of custom rules and extra configuration can
                be used to ensure that some constraints hold.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                A linter with a set of custom rules and extra configuration can
                be used to ensure that some constraints hold.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  moon
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                moon has built-in support for project boundaries and
                constraints. No external tools or commands are necessary, simply
                tag and annotate all projects in the workspace.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Developers can annotate projects in any way they seem fit,
                establish invariants, and Nx will make sure they hold. It allows
                developers to annotate what is private and what is not, what is
                experimental and what is stable, etc. Nx also allows you to
                define public API for each package, so other developers aren't
                able to deep import into them.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Pants
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                While not yet supported natively, a custom plugin could be
                written to enforce such rules.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Rush
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Rush can optionally require approvals when introducing new NPM
                dependencies (internal or external), based on project type. It
                also supports version policies for NPM publishing.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                A linter with a set of custom rules and extra configuration can
                be used to ensure that some constraints hold.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
