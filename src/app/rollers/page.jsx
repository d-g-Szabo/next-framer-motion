import { fetchData } from "@/utils/fetchData";

// if you fetch the data in a separate file, you still need async await in the page where you are using it
export default async function RollersPage() {
  const rollers = await fetchData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>List of rollers</h1>
      {rollers.map((roller) =>
        roller.products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
            </div>
          );
        })
      )}
    </main>
  );
}
