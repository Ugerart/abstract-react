import React, { FC } from "react";
import Section  from "../components/Section/Section";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

const Lenses : FC = () => {
    return (
        <Section title="Lenses">
            <p className="mb-3">Pagina con griglia prodotti in errore:</p>
            <ProductsGrid
                jsonUrl="url_error"
                />
        </Section>
    )
}

export default Lenses;