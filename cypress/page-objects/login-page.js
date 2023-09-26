class LoginPage {
  login() {
    cy.get('svg[aria-label="pancake open"]').first().click();
    cy.contains('a', 'Sign In').click();
    cy.get(
      'input[placeholder="Email Address or Member Number or Username"]'
    ).type('estebanruiz{enter}');
    cy.contains('estebanruiz').should('be.visible');
    cy.get('input[placeholder="Password"]').type('pF$b8FQkQkYD$8s!{enter}');
    cy.get('img[alt="Entry complete"]').should('be.visible');
  }
}
