describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth');
  });
  it('should validate inputs and login the user on valid credentials', () => {
    // cy.intercept('POST', 'http://localhost:3001/api/v1/users/login').as(
    //   'login'
    // );
    // cy.get('input[name=email]').type('hamza');
    // cy.get("[data-testid='loginButton']").click();
    // cy.get('input[name=email]').clear();
    // cy.get('input[name=email]').type('hamzambf@gmail.com');
    // cy.get("[data-testid='loginButton']").click();
    // cy.get('input[name=password]').type('Abc123!abc');

    // cy.get('#demo-simple-select').click();
    // cy.contains('Twenty').click();

    // const email = 'hamzambf@gmail.com';
    // const password = 'Abc123!abc';

    // cy.get("[data-testid='loginButton']").click();
    // cy.get("[data-testid='loginButton']").should('be.disabled');
    // cy.wait('@login').then((interception) => {
    //   expect(interception.request.body).to.deep.equal({
    //     email,
    //     password,
    //   });
    // });
    // cy.get("[data-testid='loginButton']").should('not.be.disabled');

    // cy.url().should('include', '/');
    // cy.wait(2000);

    cy.intercept('POST', 'http://localhost:3001/api/v1/users/login', {
      statusCode: 200,
      body: {message: 'Login successful'}, // Simulated response
      delayMs: 1000, // Simulate a delay in the API call
    }).as('loginAPI');

    // Ensure that the login button is initially enabled
    cy.get('[data-testid=loginButton]').should('not.be.disabled');

    // Trigger form submission by entering valid credentials and clicking the login button
    cy.get('input[name=email]').type('test@example.com');
    cy.get('input[name=password]').type('password123');
    cy.get('[data-testid=loginButton]').click();

    // Verify that the login button becomes disabled after clicking
    cy.get('[data-testid=loginButton]').should('be.disabled');

    // Wait for the API call to complete
    cy.wait('@loginAPI');

    // Verify that the login button is enabled again after the API call completes
    cy.get('[data-testid=loginButton]').should('not.be.disabled');
  });
  // it('should show error on invalid credentials', () => {
  //   cy.get('input[name=email]').type('hamzambf@gmail.com');
  //   cy.get('input[name=password]').type('test123');
  //   cy.get("[data-testid='loginButton']").click();
  // });
});
