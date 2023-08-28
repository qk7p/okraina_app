import "./tab.css"

export type TabProps = {
  text: string;
  id: number;
  onClick: (id: number) => void;
};

const Tab: React.FC<TabProps> = ({ text, id, onClick }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onClick(id);
  };

  return <button onClick={handleClick} className={"tab"}>{text}</button>;
};

export { Tab };
