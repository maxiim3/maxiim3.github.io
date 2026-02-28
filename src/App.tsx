import { lazy, Suspense } from "react";
import "./index.css";

const V3 = lazy(() => import("./concepts/v3-starfield"));

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#09090b] flex items-center justify-center z-50">
      <div className="w-6 h-6 border-2 border-zinc-700 border-t-zinc-300 rounded-full animate-spin" />
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <V3 />
    </Suspense>
  );
}

export default App;
