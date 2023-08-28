import { useEffect, useState } from "react";
import { getTabs } from "../../api/tabsApi";
import { Tab } from "../Tab/Tab";

type Tab = {
  id: number;
  date: string;
};

type NavigationProps = {
  onChange: (tabId: number) => void;
};

const Navigation: React.FC<NavigationProps> = ({ onChange }) => {
  const [tabList, setTabList] = useState<Tab[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTabList([]);
    getTabs()
      .then((data) =>
        data.data.forEach((element) => {
          setTabList((prev) => [
            ...prev,
            { id: element.id, date: element.attributes.date },
          ]);
          setIsLoading(false);
        })
      )
      .catch((error) => {
        setIsLoading(true);
        setError(error);
      });
  }, []);

  return (
    <nav>
      {isLoading
        ? "...загрузка"
        : tabList.map((tab) => (
            <Tab text={tab.date} key={tab.id} id={tab.id} onClick={onChange} />
          ))}
      <p>{error !== "" && error}</p>
    </nav>
  );
};

export { Navigation };
