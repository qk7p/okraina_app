import { useState } from "react";
import "./product.css";

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
  value,
  comment,
  onValueBlur,
  onCommentBlur,
}) => {
  const [isLoading] = useState(false);
  const [isError] = useState(false);
  const [errorMessage] = useState("");

  const [productValue, setProductValue] = useState(value);
  const [productComment, setProductComment] = useState(comment);

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
    <div className={"product"}>
      <p className={"product__name"}>{name}</p>
      <p className={"product__value_label"}>Количество:</p>
      <input
        className={"product__value"}
        type="number"
        onChange={handleValueChange}
        onBlur={handleValueBlur}
        value={productValue}
      />
      <p className={"product__comment_label"}>Комментарий:</p>
      <input
        className={"product__comment"}
        type="text"
        onChange={handleCommentChange}
        onBlur={handleCommentBlur}
        value={productComment}
      />
      {/* <p className={"product__status"}>
        {isLoading ? "загрузка" : isError ? errorMessage : "ок"}
      </p> */}
    </div>
  );
};

export { Product };
