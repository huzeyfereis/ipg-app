describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
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

  it('should make a search with input value and add it to favorite list', () => {
    cy.get('#username').type('ipgautomotive');
    cy.get('#password').type('carmaker');
    cy.get('#loginBtn').click();
    cy.get('#searchInput').type('London');
    cy.get('#searchBtn').click();
    const body = {
      'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com',
      'X-RapidAPI-Key': '094fb5e856mshb13a44c44398469p1f0e2fjsn07706f015321',
    };
    cy.intercept({
      method: 'get',
      url: 'https://google-image-search1.p.rapidapi.com/v2/?q=London',
      headers: body,
    }).as('city-image');

    cy.intercept(
      'get',
      'http://api.weatherapi.com/v1/current.json?key=8358762081be41f3992111153222604&q=London'
    );
  });

  it('should add city to favorite cities list', () => {
    cy.get('#username').type('ipgautomotive');
    cy.get('#password').type('carmaker');
    cy.get('#loginBtn').click();
    cy.get('#searchInput').type('London');
    cy.get('#searchBtn').click();
    cy.get('#weatherCard');
    cy.get('.addFavIcon').click();
    cy.get('#favWeatherCard');
    cy.get('.addFavIcon').click();
    cy.get('.addFavIcon').click();
    cy.get('.addFavIcon').click();
    cy.get('.addFavIcon').click();
    cy.get('.addFavIcon').click();
    cy.on('window:alert', (msg) => {
      expect(msg).to.contains(
        "You can't add more than five city to your favorite list."
      );
    });
  });

  it('should remove city from favorite cities list', () => {
    cy.get('#username').type('ipgautomotive');
    cy.get('#password').type('carmaker');
    cy.get('#loginBtn').click();
    cy.get('#searchInput').type('London');
    cy.get('#searchBtn').click();
    cy.get('.addFavIcon').click();
    cy.get('#favWeatherCard');
    cy.get('.removeFavIcon').click();
    cy.get('#favWeatherCard').should('not.exist');
  });
});
