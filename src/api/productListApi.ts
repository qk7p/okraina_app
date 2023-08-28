export type ProductList = {
  data: {
    attributes: {
      product: [
        {
          id: number;
          product_name: string;
          product_value: number | null;
          product_comment: string | null;
        }
      ];
    };
  };
};

export function getProductList(id: number) {
  const response = fetch(
    `https://okraina.qk7p.ru/cms/api/spiskis/${id}?populate=product`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) =>
    response.json().then((data: ProductList) => {
      return data;
    })
  );
  return response;
}

export function updateProductList(id: number, data: ProductList) {
  fetch(`https://okraina.qk7p.ru/cms/api/spiskis/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
