import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 px-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Sample project
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Orders Dashboard</h1>
        <p className="mt-3 text-neutral-600">
          A small orders-and-clients dashboard, used as a case study in diagnosing and fixing
          integration issues across a React and FastAPI stack.
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
