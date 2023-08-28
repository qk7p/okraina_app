import { useEffect, useState } from "react";
import {
  ProductList,
  getProductList,
  updateProductList,
} from "../../api/productListApi";
import { Product } from "../Product/Product";
import "./product-container.css"

export type ProductContainerProps = {
  activeTab: number;
};

const ProductContainer: React.FC<ProductContainerProps> = ({ activeTab }) => {
  const [productList, setProductList] = useState<ProductList>();

  useEffect(() => {
    setProductList(undefined);
    getProductList(activeTab).then((response) => setProductList(response));
  }, [activeTab]);

  const handleValueChange = (value: number, id: number) => {
    if (productList) {
      const targetIndex = productList.data.attributes.product.findIndex(
        (item) => item.id === id
      );

      if (targetIndex !== undefined) {
        const tempArray = productList;
        tempArray.data.attributes.product[targetIndex].product_value = value;
        updateProductList(activeTab, tempArray)
      }
    }
  };

  const handleCommentChange = (value: string, id: number) => {
    if (productList) {
      const targetIndex = productList.data.attributes.product.findIndex(
        (item) => item.id === id
      );

      if (targetIndex !== undefined) {
        const tempArray = productList;
        tempArray.data.attributes.product[targetIndex].product_comment = value;
        updateProductList(activeTab, tempArray);
      }
    }
  };

  return (
    <div className={"product_container"}>
      {productList
        ? productList.data.attributes.product.map((element, index) => (
            <Product
              name={element.product_name}
              key={index}
              onValueBlur={handleValueChange}
              onCommentBlur={handleCommentChange}
              id={element.id}
              value={element.product_value}
              comment={element.product_comment}
            />
          ))
        : "загрузка"}
    </div>
  );
};

export { ProductContainer };
