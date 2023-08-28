import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductContainer } from "./components/ProductContainer/ProductContainer";
import { getTabs } from "./api/tabsApi";

function App() {
  const [activeTab, setActiveTab] = useState<number>();

  useEffect(() => {
    getTabs().then((response) => {
      let maxId = 0;
      response.data.forEach((element) => {
        if (element.id > maxId) maxId = element.id;
        setActiveTab(maxId);
      });
    });
  }, []);

  const handleTab = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Navigation onChange={handleTab} />
      {activeTab ? <ProductContainer activeTab={activeTab} /> : null}
    </>
  );
}

export default App;
