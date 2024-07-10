import { fetchDynamicData } from "@/utils/fetchData";
export default async function RollerIdPage({ params }) {
  const cartProducts = await fetchDynamicData(params.rollerId);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is an individual cart: {params.rollerId}</h1>

      {cartProducts.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        );
      })}
    </main>
  );
}
