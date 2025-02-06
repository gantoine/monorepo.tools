import {
  LinkIcon,
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

const features = [
  {
    name: 'Predictive testing',
    category: 'Reliable',
    icon: EyeIcon,
    anchor: 'predictive-testing',
  },
  {
    name: 'Pending failure depth',
    category: 'Reliable',
    icon: ExclamationCircleIcon,
    anchor: 'pending-failure-depth',
  },
  {
    name: 'Optimistic merging',
    category: 'Scalable',
    icon: ArrowLeftOnRectangleIcon,
    anchor: 'optimistic-merging',
  },
  {
    name: 'Concurrent testing',
    category: 'Scalable',
    icon: Bars2Icon,
    anchor: 'concurrent-testing',
  },
  {
    name: 'Batching',
    category: 'Scalable',
    icon: RectangleStackIcon,
    anchor: 'batching',
  },
  {
    name: 'Dynamic Parallel Queues',
    category: 'Scalable',
    icon: QueueListIcon,
    anchor: 'dynamic-parallel-queues',
  },
  {
    name: 'Multi-stage testing',
    category: 'Scalable',
    icon: ClipboardDocumentListIcon,
    anchor: 'multi-stage-testing',
  },
  {
    name: 'PR prioritization',
    category: 'Manageable',
    icon: ListBulletIcon,
    anchor: 'pr-prioritization',
  },
  {
    name: 'Stacked PRs',
    category: 'Manageable',
    icon: Square3Stack3DIcon,
    anchor: 'stacked-prs',
  },
  {
    name: 'Pausing',
    category: 'Manageable',
    icon: PauseIcon,
    anchor: 'pausing',
  },
];

export function KeyFeatures(): React.JSX.Element {
  return (
    <div
      data-test-id="what-merge-queues-should-provide"
      id="what-merge-queues-should-provide"
      className="overflow-hidden bg-slate-50 dark:bg-slate-800"
    >
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <nav className="px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24">
          <div className="group text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            # What merge queues should provide
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#what-merge-queues-should-provide"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
            Merge queues need to keep your main branch from breaking, scale to handle hundreds of PRs a week, and respect the well-defined relationships between the many build targets in a monorepo. Your merge queue needs to be scalable, reliable, and manageable These are the features that can help you get there.
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
