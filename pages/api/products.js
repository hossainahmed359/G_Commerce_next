import { products } from "../../data";

export default function getProducts(req, res) {
  res.status(200).json(products);
}
