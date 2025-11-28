// ---------------------------
// CartPage PO
// ---------------------------
class CartPage {

  // ---------------------------
  // 🔹 SELECTORS / GETTERS
  // ---------------------------

  // Tutti i bottoni "Add to Cart" disponibili sulla pagina
  get addToCartButtons() {
    return cy.get('[data-test^="add-to-cart"]');
  }

  // Tutti i bottoni "Remove" presenti nel carrello
  get removeFromCartButtons() {
    return cy.get('[data-test^="remove"]');
  }

  // Badge del carrello che mostra il numero di prodotti
  get cartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  // Link per aprire il carrello
  get cartLink() {
    return cy.get('.shopping_cart_link');
  }

  // Lista completa dei prodotti nel carrello
  get cartItems() {
    return cy.get('.cart_item');
  }

  // Lista dei nomi dei prodotti nel carrello
  get cartItemNames() {
    return cy.get('.cart_item .inventory_item_name');
  }

  // Lista dei prezzi dei prodotti nel carrello
  get cartItemPrices() {
    return cy.get('.cart_item .inventory_item_price');
  }


  // ---------------------------
  // 🔹 ACTION METHODS
  // ---------------------------

  // Clicca il prodotto in base all'indice nella lista dei bottoni "Add to Cart"
  // eq(index) seleziona il bottone nella posizione specificata: eq(0) primo, eq(1) secondo, ecc.
  addProductByIndex(index) {
    this.addToCartButtons.eq(index).click();
  }

  // Clicca il prodotto usando direttamente il suo data-test
  // Utile per aggiungere prodotti specifici senza dipendere dall'ordine
  addProductByDataTest(productDataTest) {
    cy.get(`[data-test="${productDataTest}"]`).click();
  }

  // Rimuove un prodotto basato sull'indice nella lista dei bottoni "Remove"
  // eq(index) seleziona il bottone nella posizione specificata:
  // .eq(0) clicca il primo, .eq(1) clicca il secondo, ecc.
  // Nota: dopo ogni rimozione la lista si aggiorna (gli indici cambiano)
  removeProductByIndex(index) {
    this.removeFromCartButtons.eq(index).click();
  }

  // 🔥 Rimuove **tutti** i prodotti dal carrello
  // Strategia corretta: cliccare SEMPRE l'indice 0
  // perché dopo ogni rimozione la lista si compatta e gli indici cambiano.
  removeAllProducts() {
    this.cartItems.then(items => {
      const count = items.length;
      for (let i = 0; i < count; i++) {
        this.removeFromCartButtons.eq(0).click();
      }
    });
  }

  // 🔹 Rimuove un prodotto specifico dal carrello usando il nome
  // Utile per test leggibili, indipendenti dall'ordine dei prodotti
  removeProductByName(productName) {
    this.cartItemNames
      .contains(productName)
      .parents('.cart_item')
      .find('button[data-test^="remove"]')
      .click();
  }

  // Apre il carrello cliccando sul link del carrello
  openCart() {
    this.cartLink.click();
  }

  // ---------------------------
  // 🔹 METODI PER IL TEST BADGE UI

  // Aggiunge il primo prodotto disponibile
  addFirstProductToCart() {
    this.addToCartButtons.first().click();
  }

  // Rimuove il primo prodotto presente nel carrello
  removeFirstProductFromCart() {
    this.removeFromCartButtons.first().click();
  }


  // ---------------------------
  // 🔹 GET METHODS (DOM values)
  // ---------------------------

  // Restituisce il badge del carrello per leggere il numero di prodotti
  getCartCount() {
    return this.cartBadge;
  }

  // Restituisce la lista completa degli elementi nel carrello
  getCartItemCount() {
    return this.cartItems;
  }

  // Restituisce il nome del primo prodotto nel carrello
  getFirstItemName() {
    return this.cartItemNames.first().invoke("text");
  }

  // Restituisce un array con tutti i nomi dei prodotti nel carrello
  getItemNames() {
    return this.cartItemNames.then(items =>
      [...items].map(el => el.innerText.trim())
    );
  }

  // Restituisce un array con tutti i prezzi dei prodotti come numeri
  getItemPrices() {
    return this.cartItemPrices.then(items =>
      [...items].map(el =>
        Number(el.innerText.replace('$','').trim())
      )
    );
  }
}

export default new CartPage();
