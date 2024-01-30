import Card from "./Components/Card";

export default function Tools() {
  return (
    <>
      <section className="p-28 h-screen bg-rose-200">
        <div className="flex gap-12">
          <aside className="flex flex-col gap-7 p-3 border-r-2 border-black">
            
          </aside>
          <div className="flex-1">
            <p className="leading-7 [&:not(:first-child)]:mt-6 px-24">
              <Card/>
            </p>
          </div>
          <div className="flex-1">
            {/* Content */}
          </div>
        </div>
      </section>
    </>
  );
}
