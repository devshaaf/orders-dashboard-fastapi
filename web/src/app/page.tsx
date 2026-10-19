import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 px-6">
      <div>
        <h1 className="text-3xl font-semibold">Orders Dashboard</h1>
        <p className="mt-3 text-neutral-600">
          Track clients, orders and revenue in one place. Filter and search the order book,
          manage client records, and follow revenue trends across the last 90 days.
        </p>
      </div>

      <nav className="flex gap-4 text-sm font-medium">
        <Link className="underline underline-offset-4" href="/login">
          Login
        </Link>
        <Link className="underline underline-offset-4" href="/dashboard">
          Dashboard
        </Link>
        <Link className="underline underline-offset-4" href="/orders">
          Orders
        </Link>
        <Link className="underline underline-offset-4" href="/clients">
          Clients
        </Link>
      </nav>
    </main>
  );
}
