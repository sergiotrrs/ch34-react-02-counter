import { Box, Typography } from "@mui/material";
import CounterApp from "../../components/counter/CounterApp"

const products = [
  {
    sku: 1234,
    title: "Produc1",
    img: "www.image.com",
    price: 23.56,
  },
  {
    sku: 1235,
    title: "Produc2",
    img: "www.image.com",
    price: 56.56,
  },
  {
    sku: 1236,
    title: "Produc3",
    img: "www.image.com",
    price: 3333.56,
  },
  {
    sku: 1240,
    title: "Produc4",
    img: "www.image.com",
    price: 789.56,
  },
];

export const Products = () => {
  return (
    <div>
      {  products.map( ({title, img, price, sku}, index)=> 
        <Box key={sku}>
          <Typography variant="h3" >{title}</Typography>
          <Typography variant="h4" >{price}</Typography>
          <CounterApp />
        </Box> 
        )}
    </div>
  )
}
