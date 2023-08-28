export type TabsResponse = {
  data: [
    {
      id: number;
      attributes: {
        date: string;
      };
    }
  ];
};

export function getTabs() {
  const response = fetch("  https://okraina.qk7p.ru/cms/api/spiskis", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) =>
    response.json().then((data: TabsResponse) => {
      return data;
    })
  );
  return response;
}
