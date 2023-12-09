import { FormInput } from "@/components/FormModal";

const inputs: FormInput[] = [
  {
    required: true, label: "Product Name", name: "title", type: "text"
  },
  {
    required: true, label: "Description", name: "description", type: "text"
  },
  {
    required: true, label: "Price (USD)", name: "price", type: "number"
  },
  {
    required: true, label: "Rating", name: "rating", type: "number"
  },
  {
    required: true, label: "Discount %", name: "discountPercentage", type: "number"
  },
  {
    required: true, label: "Stocks", name: "stock", type: "number",
  },
  {
    required: true, label: "Brand", name: "brand", type: "text"
  },
  {
    required: true, label: "Category", name: "category", type: "text"
  },
  {
    required: true, label: "Image URL", name: "thumbnail", type: "text"
  }
];

export default inputs;