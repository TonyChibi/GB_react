class ProductObj {
    static counterID = 1;
    constructor(name = "undefined", description = "undescribed", price = 0, status = false) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.status = status;
        this.id = ProductObj.counterID;
        ProductObj.counterID++;
    }
}

export default ProductObj;