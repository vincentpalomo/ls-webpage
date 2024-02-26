export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full justify-around items-center">
        <div className="border-2 rounded-md border-neutral-300 p-2">
          <code className="font-mono font-bold tracking-wider"> {`->`} insert any code here src/app/page.tsx</code>
        </div>

        <p className="font-sans text-8xl tracking-tighter">lucid studio</p>
      </div>

      <p>hello from main page</p>

      <div>modern web design</div>

      <section>🚀 Lorem ipsum dolor sit amet.</section>
    </main>
  );
}
