import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductContainer } from "./components/ProductContainer/ProductContainer";


function App() {
  const [activeTab, setActiveTab] = useState<number>(5);

  const handleTab = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Navigation onChange={handleTab} />
      <ProductContainer activeTab={activeTab} />
    </>
  );
}

export default App;
