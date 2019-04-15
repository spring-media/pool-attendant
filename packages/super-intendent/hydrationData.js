import Hydrate from "./hydrate";

export default function HydrationData({ clear = true }) {
  return (
    <script
      type="application/hydration-data"
      dangerouslySetInnerHTML={{ __html: serializedHydrationData(clear) }}
    />
  );
}

function serializedHydrationData(clear) {
  const data = Hydrate.getData();
  if (clear) {
    Hydrate.data = {};
    Hydrate.nextId = 0;
  }
  return JSON.stringify(data);
}
