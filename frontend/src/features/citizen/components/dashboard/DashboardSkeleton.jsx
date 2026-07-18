const SkeletonCard = () => (
  <div className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-5 flex items-center justify-between">
      <div>
        <div className="mb-3 h-4 w-28 rounded bg-slate-200" />
        <div className="h-8 w-20 rounded bg-slate-300" />
      </div>

      <div className="h-14 w-14 rounded-2xl bg-slate-200" />
    </div>

    <div className="mb-4 h-3 w-24 rounded bg-slate-200" />

    <div className="h-2 w-full rounded-full bg-slate-200">
      <div className="h-2 w-2/3 rounded-full bg-slate-300" />
    </div>
  </div>
);

const DashboardSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-pulse rounded-3xl bg-slate-200 p-8">
        <div className="mb-4 h-8 w-72 rounded bg-slate-300" />
        <div className="h-4 w-96 rounded bg-slate-300" />
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <SkeletonCard key={item} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 h-6 w-48 rounded bg-slate-300" />

          <div className="flex h-72 items-end justify-between gap-3">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className="w-full rounded-t-xl bg-slate-200"
                style={{
                  height: `${40 + item * 20}px`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 h-6 w-40 rounded bg-slate-300" />

          <div className="flex h-72 items-center justify-center">
            <div className="h-56 w-56 rounded-full border-[24px] border-slate-200" />
          </div>
        </div>
      </div>

      {/* Recent Complaints */}
      <div className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 h-6 w-48 rounded bg-slate-300" />

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="mb-4 flex items-center justify-between rounded-xl border border-slate-100 p-4 last:mb-0"
          >
            <div>
              <div className="mb-2 h-5 w-56 rounded bg-slate-300" />
              <div className="h-3 w-32 rounded bg-slate-200" />
            </div>

            <div className="h-10 w-24 rounded-full bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSkeleton;