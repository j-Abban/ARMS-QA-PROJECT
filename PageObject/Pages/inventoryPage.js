class InventoryPage {
   addItemToCartByIndex(index) {
       cy.get('.inventory_item').eq(index).within(() => {
           cy.get('.btn_inventory').click();
           cy.get('.inventory_item_price').invoke('text').as(`itemPrice${index}`);
       });
   }

   verifyCartCount(expectedCount) {
       cy.get('.shopping_cart_badge').should('have.text', expectedCount);
   }

   goToCart() {
       cy.get('.shopping_cart_link').click();
   }
}

export default InventoryPage;
