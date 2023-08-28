import { useEffect, useState } from "react";
import { getTabs } from "./api/tabsApi";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductContainer } from "./components/ProductContainer/ProductContainer";


function App() {
  const [activeTab, setActiveTab] = useState<number>(1);

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
