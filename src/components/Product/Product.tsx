import { useState } from "react";

export type ProductProps = {
  name: string;
  value?: number;
  comment?: string;
  image_url?: string[];
  id: number;
  onValueBlur: (value: number, id: number) => void;
  onCommentBlur: (text: string, id: number) => void;
};

const Product: React.FC<ProductProps> = ({
  id,
  name,
  comment,
  image_url,
  onValueBlur,
  onCommentBlur,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [productValue, setProductValue] = useState(0);
  const [productComment, setProductComment] = useState("");

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setProductValue(+event.currentTarget.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setProductComment(event.currentTarget.value);
  };

  const handleValueBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (productValue) onValueBlur(productValue, id);
  };

  const handleCommentBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (productComment) onCommentBlur(productComment, id);
  };

  return (
    <div>
      <p>{name}</p>
      <p>Количество:</p>
      <input
        type="number"
        onChange={handleValueChange}
        onBlur={handleValueBlur}
        value={productValue}
      />
      <p>Комментарий</p>
      <input
        type="text"
        onChange={handleCommentChange}
        onBlur={handleCommentBlur}
        value={productComment}
      />
      <p>Статус:</p>
      <p>{isLoading ? "загрузка" : isError ? errorMessage : "ок"}</p>
    </div>
  );
};

export { Product };
