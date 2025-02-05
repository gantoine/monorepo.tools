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

        {/*Dependency Graph Visualization*/}
        <div
          id="dependency-graph-visualization"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <PresentationChartLineIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Dependency graph visualization
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#dependency-graph-visualization"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Visualize dependency relationships between projects and/or tasks.
              The visualization is interactive meaning you are able to search,
              filter, hide, focus/highlight & query the nodes in the graph.
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
                  <Supported /> Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel's implementation supports a custom query language to
                filter out node you are not interested in.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Gradle Build Tool
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Gradle Build Scan provides rich dependency information, and
                third party tools are available for project/task graphs.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage doesn't come with a visualizer but it's possible to write
                your own.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna doesn't come with a visualizer but it's possible to write
                your own.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> moon
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                moon comes with an interactive but non-filterable visualizer.
                Supports both dependency and project graphs.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Nx
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Nx comes with an interactive visualizer that allows you to
                filter and explore large workspaces.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Pants
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pants doesn't come with a visualizer, but it can emit a JSON
                file containing the fine-grained graph structure of your
                codebase, which can be processed into input for visualization
                tools.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Rush doesn't come with a visualizer but it's possible to write
                your own.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo uses Graphviz to generate static image and HTML file
                of the execution plan. The implementation is not interactive.
              </dd>
            </div>
          </dl>
        </div>

        {/*MANAGEMENT*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Manageable
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*Code Sharing*/}
        <div
          id="source-code-sharing"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CodeBracketIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Source code sharing
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#source-code-sharing"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Facilitates sharing of discrete pieces of source code.
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
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Bazel supports it. Any folder of files can be marked as a
                project and can be shared. Bazel build rules are used to enable
                sharing without hurting dev ergonomics.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Gradle Build Tool
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Gradle Build Tool can publish shareable artifacts and consume
                dependencies from multiple repositories.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lage supports it. Only npm packages can be shared.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Lerna supports it. Only npm packages can be shared.
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
                moon supports it. Only packages from supported languages can be
                shared.
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
                Nx supports it. Any folder of files can be marked as a project
                and can be shared. Nx plugins help configure WebPack, Rollup,
                TypeScript and other tools to enable sharing without hurting dev
                ergonomics.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Pants
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pants supports packaging, publishing and consuming code
                artifacts across repos, using the standard idioms of the
                underlying languages and frameworks.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Rush
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Rush supports it, however discourages importing code from
                folders that are not a declared npm dependency. This ensures
                that projects can be easily moved between monorepos. For
                situations where creating a package is too much overhead,
                "packlets" offer a lightweight alternative.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Turborepo supports it. Only npm packages can be shared.
              </dd>
            </div>
          </dl>
        </div>

        {/*Consistent Tooling*/}
        <div
          id="consistent-tooling"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <CommandLineIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Consistent tooling
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#consistent-tooling"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              The tool helps you get a consistent experience regardless of what
              you use to develop your projects: different JavaScript frameworks,
              Go, Rust, Java, etc. <br />
              In other words, the tool treats different technologies the same
              way.
            </p>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              For instance, the tool can analyze package.json and JS/TS files to
              figure out JS project deps, and how to build and test them. But it
              will analyze Cargo.toml files to do the same for Rust, or Gradle
              files to do the same for Java. This requires the tool to be
              pluggable.
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
                  <Supported />
                  Bazel
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Bazel's build rules act like plugins for different technologies
                and frameworks.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Gradle Build Tool
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Gradle Build Tool is extensible through an ecosystem of plugins
                allowing it to, for instance, build native with CMake or package
                with webpack.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported />
                  Lage
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lage can only run npm scripts.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported />
                  Lerna
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Lerna can only run npm scripts.
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
                moon can run any binary/command that exists on the current
                machine. With its integrated toolchain, can also download and
                install necessary tools behind the scene.
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
                Nx is pluggable. It is able to invoke npm scripts by default,
                but can be extended to invoke other tools (e.g., Gradle).
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported />
                  Pants
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Pants has a robust Plugin API that provides a uniform UX across
                languages and frameworks. It provides multiple plugins out of
                the box, including for Python, Java, Scala, Go, Shell and
                Docker, with more on the way. You can also write your own custom
                build rules using the same API.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported />
                  Rush
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Rush only builds TypeScript/JavaScript projects, recommending a
                decoupled approach where native components are built separately
                using native toolchains or BuildXL. Ideally Node.js is the only
                required prerequisite for monorepo developers.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported />
                  Turborepo
                </p>
              </dt>
              <dd className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Turborepo can only run npm scripts, but nodejs doesn’t have to
                be installed.
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
