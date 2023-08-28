export type ProductList = {
  data: {
    attributes: {
      product: [
        {
          id: number;
          product_name: string;
          product_value: number;
          product_comment: string;
        }
      ];
    };
  };
};

export type ProductListRequest = {
  data: {
    product: [
      {
        id: number;
        product_name: string;
        product_value: number;
        product_comment: string;
      }
    ];
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
  const request: ProductListRequest = {
    data: { product: data.data.attributes.product },
  };
  fetch(`https://okraina.qk7p.ru/cms/api/spiskis/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });
}
