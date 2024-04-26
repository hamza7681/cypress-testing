describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth');
  });
  it('should validate inputs and login the user on valid credentials', () => {
    cy.get('input[name=email]').type('hamza');
    cy.get("[data-testid='loginButton']").click();
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]').type('hamzambf@gmail.com');
    cy.get("[data-testid='loginButton']").click();
    cy.get('input[name=password]').type('Abc123!abc');
    cy.get("[data-testid='loginButton']").click();
    cy.url().should('include', '/');
    cy.wait(2000);
  });
  it('should show error on invalid credentials', () => {
    cy.get('input[name=email]').type('hamzambf@gmail.com');
    cy.get('input[name=password]').type('test123');
    cy.get("[data-testid='loginButton']").click();
  });
});
