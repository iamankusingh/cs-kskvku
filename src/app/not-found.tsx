import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="h-64 flex flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold">404 | Not Found</h2>
      <p>Could not find requested resource</p>

      <Button title="Home" path="/" />
    </main>
  );
}
