# Cart Module — Mini Mapping dei Test

Questa cartella contiene tutti i test relativi al carrello (Cart) nel progetto Cypress e serve come mini mapping dei casi principali.

---

## 📁 Struttura dei File

| File | Descrizione |
|------|-------------|
| `add_product_cart.cy.js` | Aggiunge un singolo prodotto al carrello |
| `add_product_cart_multiple.cy.js` | Aggiunge più prodotti al carrello |
| `add_three_product_cart.cy.js` | Aggiunge tre prodotti specifici |
| `cart_badge.cy.js` | Testa l'aggiornamento del badge del carrello |
| `cart_remove_single_product.cy.js` | Rimuove un singolo prodotto dal carrello |
| `cart_remove_multiple_products.cy.js` | Rimuove più prodotti dal carrello (by index, by name, remove all) |

---

## 🛠️ Page Object Methods (CartPage)

- `addProductByIndex(index)` — aggiunge un prodotto in base all’indice  
- `addProductByDataTest(productDataTest)` — aggiunge un prodotto usando il suo `data-test`  
- `removeProductByIndex(index)` — rimuove un prodotto per indice  
- `removeProductByName(name)` — rimuove un prodotto specifico per nome  
- `removeAllProducts()` — rimuove tutti i prodotti dal carrello  
- `openCart()` — apre il carrello  
- `getCartCount()` — legge il numero di prodotti nel badge  
- `getCartItemCount()` — restituisce il numero di elementi nel carrello  
- `getItemNames()` — restituisce un array dei nomi dei prodotti  
- `getItemPrices()` — restituisce un array dei prezzi dei prodotti  

---

## 📌 Scenari Testati

### 1️⃣ Remove singolo prodotto
- Metodo PO: `removeProductByIndex(index)`  
- File: `cart_remove_single_product.cy.js`  
- Descrizione: rimuove un solo prodotto usando index  
- Verifica:
  - Numero prodotti diminuito di 1
  - Badge aggiornato

### 2️⃣ Remove multiprodotto usando index
- Metodo PO: `removeProductByIndex(index)`  
- File: `cart_remove_multiple_products.cy.js`  
- Descrizione: rimuove più prodotti sempre cliccando index 0  
- Verifica:
  - Numero prodotti correttamente aggiornato
  - Badge aggiornato
- NOTE: aggiunto controllo iniziale con `should('have.length.gte',2)` perché gli indici cambiano dopo ogni rimozione

### 3️⃣ Remove multiprodotto usando nome prodotto
- Metodo PO: `removeProductByName(name)`  
- File: `cart_remove_multiple_products.cy.js`  
- Descrizione: rimuove prodotti specifici identificandoli per nome  
- Verifica:
  - Prodotti rimossi non presenti nel carrello
  - Numero prodotti rimanenti corretto
- NOTE: utile quando serve testare rimozioni specifiche, indipendente dall’ordine

### 4️⃣ Remove tutti i prodotti
- Metodo PO: `removeAllProducts()`  
- File: `cart_remove_multiple_products.cy.js`  
- Descrizione: rimuove tutti i prodotti dal carrello  
- Verifica:
  - Carrello vuoto
  - Badge carrello scompare (`not.exist`)

---

## ✅ Best Practices
1. Ogni scenario in un `it()` separato  
2. Usare sempre il PO (Page Object)  
3. Nomi file chiari e coerenti  
4. Commenti e note didattiche  
5. Quando rimuovi più prodotti con index → cliccare sempre index 0
