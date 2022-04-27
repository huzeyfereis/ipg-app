describe('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('should view login form', () => {
    cy.get('#username');
    cy.get('#password');
  });

  it('should view error message for wrong credentials', () => {
    cy.get('#username').type('username');
    cy.get('#password').type('password');
    cy.get('#loginBtn').click();
    cy.get('#errorMessage').should(
      'have.text',
      'Please check your credentials!'
    );
    cy.url().should('eq', 'http://localhost:3000/login');
  });

  it('should login with true credentials', () => {
    cy.get('#username').type('ipgautomotive');
    cy.get('#password').type('carmaker');
    cy.get('#loginBtn').click();
    cy.contains("Welcome to the weather app 'IPGAUTOMOTIVE'");
    cy.url().should('eq', 'http://localhost:3000/homepage');

    cy.window()
      .its('store')
      .invoke('getState')
      .then((state) => {
        expect(state.user.username)
          .to.be.a('string')
          .and.equal('ipgautomotive');
      });
  });
});
