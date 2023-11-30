import { Box, Container, Typography, Grid } from "@mui/material";
import CounterApp from "../../components/counter/CounterApp";
import { useEffect, useState } from "react";

const url = "https://fakestoreapi.com/products";
let products;
/* const products = [
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
 */
export const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url);
      products = await response.json();
      setLoading(false);
      console.log(products);
    }
    fetchProducts();
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {loading ? (
          <Typography variant="h1">cargando...</Typography>
        ) : (
          products.map(({ title, img, price, id }, index) => (
            <Grid key={id} xs={12} md={6} lg={3}>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="h4">{price}</Typography>
              <CounterApp />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};
