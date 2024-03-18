import React, { FC } from "react";
import Section  from "../components/Section/Section";

const Eyeglasses : FC = () => {
    return (
        <Section title="Eyeglasses">
            <p className="mb-3">Pagina con griglia prodotti in perenne Loading:</p>
            <div className="products-grid">
                <div className="response-block">
                    <h1 className="h4">LOADING...</h1>
                </div>
            </div>
        </Section>
    )
}

export default Eyeglasses;