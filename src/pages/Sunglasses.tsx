import React from "react";
import Section from "../components/Section/Section";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

const Sunglasses = () => {
    return (
        <Section title="Sunglasses">
            <ProductsGrid
                jsonUrl="https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
                />
        </Section>
    )
}

export default Sunglasses;