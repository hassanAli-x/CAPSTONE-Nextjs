export default async function HealthPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const data = await response.json();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Health Check</h1>

      <p className="mt-4">API connection successful.</p>

      <pre className="mt-4 rounded-lg bg-gray-100 p-4">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}