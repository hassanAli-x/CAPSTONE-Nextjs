export default async function HealthPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  return (
    <main>
      <h1>Health Check</h1>
      <p>API connection working</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}