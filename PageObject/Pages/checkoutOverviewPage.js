// PageObject/Pages/checkoutOverviewPage.js
class CheckoutOverviewPage {
 get itemPrices() {
    return cy.get('.cart_item .inventory_item_price');
 }

 get totalAmount(){
    return cy.get('.summary_total_label');
 }

 get finishButton(){
    return cy.get('.cart_button');
 }

 get cartBadge(){
return cy.get('.shopping_cart_badge');
 }

 get totalPrice(){
    return cy.get('.summary_tax_label');
 }

 get taxAmount(){
    return cy.get('.summary_tax_label');
 }

 get grandTotal() {
    return cy.get('.summary_total_label');
 }

 finishOrder(){
    this.finishButton.click();
 }
}

export default CheckoutOverviewPage();