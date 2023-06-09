/// <reference types="Cypress" />

const testData = require('../fixtures/testData.json')
const utils = require('../support/utils')
const homepage = require('../pageObjects/homepage.js')
const searchResultPage = require('../pageObjects/searchResultPage.js')
const productPage = require('../pageObjects/productPage.js');


describe("Test Suite", () => {

  beforeEach(() => {
    cy.log('Running BeforeEach hook...')
    cy.visit("https://prestashop.ryviushop.com/")
  });



  it('Verify that seven popular products displayed on homepage', () => {
    homepage.findsDisplayedPopularProductsOnPage()
  });

  it('Verify that user gets the correct result when the user search for "blouse"', () => {
    homepage.searchProductsInSearchBar()
    searchResultPage.verifyUserIsOnSearchResultPage()
    searchResultPage.searchBarShowingCorrectResults()
  });

  it('Verify that when user click on product the product detailed page should open', () => {
    homepage.searchProductsInSearchBar()
    searchResultPage.verifyUserIsOnSearchResultPage()
    searchResultPage.searchBarShowingCorrectResults()
    searchResultPage.openTheProductDetailsPage()
    productPage.verifyUserIsOnProductDetailsPage()
  });

  it('Verify that product contains the correct short description of the product', () => {
    utils.visitUrl(testData.ProductUrl)
    productPage.verifyUserIsOnProductDetailsPage()
    productPage.verifyProductDescriptionShowsOnProductPage()

  });

  it('Verify that after adding product to the cart, informs the user there is an item in their cart', () => {
    utils.visitUrl(testData.ProductUrl)
    productPage.verifyUserIsOnProductDetailsPage()
    productPage.addProductToCart()
    productPage.verifyProductAddedToCartAndConfirmIt
  });


});


