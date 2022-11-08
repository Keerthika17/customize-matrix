interface IMOCK_DATA{
    id: number;
    category: string;
    quantity: number;
    sales: number;
    profitPercentage: number;
  }

  const MOCK_DATA:IMOCK_DATA[] = [{
    id:1,
    category:'category 1',
    quantity:10,
    sales:60,
    profitPercentage:35,
  },{
    id:2,
    category:'bread',
    quantity:6,
    sales:30,
    profitPercentage:15,
  },{
    id:3,
    category:'bread',
    quantity:4,
    sales:30,
    profitPercentage:20,
  }, 
   
  {
    id:4,
    category:'category 2',
    quantity:20,
    sales:60,
    profitPercentage:40,
  }, 
  {
    id:5,
    category:'milk',
    quantity:6,
    sales:20,
    profitPercentage:20,
  }, 
  {
    id:6,
    category:'milk',
    quantity:5,
    sales:30,
    profitPercentage:10,
  }, 
  {
    id:7,
    category:'milk',
    quantity:9,
    sales:10,
    profitPercentage:10,
  }, 
]

export default MOCK_DATA
