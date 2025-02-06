import {
  LinkIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon,
  ExclamationCircleIcon,
  ArrowLeftOnRectangleIcon,
  Bars2Icon,
  RectangleStackIcon,
  QueueListIcon,
  ClipboardDocumentListIcon,
  ListBulletIcon,
  Square3Stack3DIcon,
  PauseIcon,
} from '@heroicons/react/24/outline';
import { MergeQueueAppsLogos } from './merge-queue-apps-logos';

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

export function MergeQueueApps(): JSX.Element {
  return (
    <div
      data-test-id="merge-queues"
      id="merge-queues"
      className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-800 lg:py-24"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # Merge Queues
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#merge-queues"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            We chose merge queues that support advanced features like dynamic parallel queues, pending failure depth, and PR prioritization, in an effort to highlight the importance of selecting the right tool based on workflow needs.
          </p>
        </div>

        <MergeQueueAppsLogos />

        {/*RELIABLE*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Reliable
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*Predictive testing*/}
        <div
          id="predictive-testing"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <EyeIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Predictive testing
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#predictive-testing"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Test each PR with all changes speculated to merge before it. This is the foundation of all merge queues.
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
                  <Supported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Pending failure depth*/}
        <div
          id="predictive-testing"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <ExclamationCircleIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Pending failure depth
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#predictive-testing"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Where failed PRs will wait for some number of PRs behind it to fail before being kicked out of the queue. It can be effective in reducing impact of flaky tests.
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
                  <Supported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify must be manually configured, as there are no integrations with tools like Bazel or Nx.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*SCALABLE*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Scalable
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*Optimistic merging*/}
        <div
          id="optimistic-merging"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <ArrowLeftOnRectangleIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Optimistic merging
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#optimistic-merging"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              If a PR has passed testing with the changes of PRs in front of it, it’s safe to merge this PR and all other PRs in front together.
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
                  <Supported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues supports it when applied to stacks.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Concurrent testing*/}
        <div
          id="concurrent-testing"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <Bars2Icon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Concurrent testing
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#concurrent-testing"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Testing multiple PRs in the queue independently at once.
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
                  <Supported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Batching*/}
        <div
          id="batching"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <RectangleStackIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Batching
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#batching"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Batch changes from multiple PRs into one merge branch to be tested together.
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
                  <Supported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Dynamic Parallel Queues*/}
        <div
          id="dynamic-parallel-queues"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <QueueListIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Dynamic Parallel Queues
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#dynamic-parallel-queues"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Multiple queues where independently affected build targets from a monorepo can be tested in parallel.
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
                  <Supported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue supports it with Nx.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <ManualImplementation /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify supports it, but it must be configured as there are no integration with tools like Bazel or Nx.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Multi-stage testing*/}
        <div
          id="multi-stage-testing"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <ClipboardDocumentListIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Multi-stage testing
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#multi-stage-testing"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Save CI cost by running smoke tests or a preliminary set of tests and failing fast.
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
                  <NotSupported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge does not support it.
              </dd>
            </div>
          </dl>
        </div>

        {/*MANAGEABLE*/}
        <div className="font-boldtext-gray-800 dark:text-gray-100tracking-tight mt-24 flex items-center text-2xl leading-loose sm:text-3xl sm:leading-relaxed lg:mt-32">
          Manageable
          <div className="ml-4 flex h-1 w-full flex-grow rounded bg-slate-100 dark:bg-slate-900" />
        </div>

        {/*PR prioritization */}
        <div
          id="pr-prioritization"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <ListBulletIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              PR prioritization 
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#pr-prioritization"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Some PRs need to be tested first, and some need to be skipped before going to the front of the queue. This allows you to rush important PRs and hotfixes out the door.
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
                  <Supported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues supports it, but only by skipping to the top of queue.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge supports it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Stacked PRs*/}
        <div
          id="stacked-prs"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Stacked PRs 
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#stacked-prs"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Some PRs depend on each other to work and must be tested and merged as a unit. This lets you “stack” them for merging.
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
                  <Supported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues supports it, though their merge queues are optimized for stacked workflows.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge does not support it.
              </dd>
            </div>
          </dl>
        </div>

        {/*Pausing*/}
        <div
          id="pausing"
          className="relative mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
        >
          <div className="relative">
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-md rounded-md bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
              <PauseIcon className="h-6 w-6" />
            </div>
            <div className="group ml-16 text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl sm:leading-relaxed">
              Pausing
              <a
                aria-hidden="true"
                tabIndex={-1}
                href="#pausing"
                className="flex inline-flex items-center text-gray-900 dark:text-white"
              >
                <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Allows the merge queue to be temporarily paused for increased control. Useful while incidents are handled and other special circumstances.
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
                  <Supported /> Aviator Merge Queue
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Aviator Merge Queue supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitHub Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitHub Merge Queues does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <NotSupported /> GitLab Merge Trains
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                GitLab Merge Trains does not support it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Graphite Merge Queues
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Graphite Merge Queues supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Mergify
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Mergify supports it.
              </dd>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-black dark:bg-slate-900">
              <dt>
                <p className="inline-flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-sm uppercase tracking-widest text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                  <Supported /> Trunk Merge
                </p>
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-400">
                Trunk Merge supports it.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
