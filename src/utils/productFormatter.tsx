class ProductFormatter{

    static convertResponseToProduct( data:any ) : any {
        return data.map(( product : any ) => {
            return {
                upc: product.UPC,
                name: product.name,
                availability_stock : product.availability.stock,
                price_currency: product.price.currency,
                price_current_value: product.price.current.value,
                variants: product?.variants ? this.convertResponseToProduct(product?.variants) : undefined
            }
        })
    }

};


export default ProductFormatter;