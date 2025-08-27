export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-24">
      <div className="h-8 w-48 rounded bg-black/5" />
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="aspect-square rounded bg-black/5" />
        <div className="space-y-4">
          <div className="h-6 w-64 rounded bg-black/5" />
          <div className="h-6 w-32 rounded bg-black/5" />
          <div className="h-24 w-full rounded bg-black/5" />
          <div className="h-10 w-56 rounded bg-black/5" />
        </div>
      </div>
    </div>
  );
}


