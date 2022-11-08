export interface ICOLUMNS{
    Header:string,
    accessor:string,
}

export const COLUMNS:ICOLUMNS[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Sales",
    accessor: "sales",
  },
  {
    Header: "Profit Percentage",
    accessor: "profitPercentage",
  },
];
