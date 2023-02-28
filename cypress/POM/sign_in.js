export class SignIn {

  webElement = {
    url: 'https://www.trip.com/',
    validation: '[class="mc-hd__logo mc-hd__logo-en-xx"]',
    signIn: '.mc-hd__login-btn',
    metd: '.way_list',
    glSign: '[class="way_icon way_icon_gl"]',


  }

  visit() {
    cy.visit(this.webElement.url)
    cy.get(this.webElement.validation).should('have.text', 'Trip.com')
  }

  signBtn() {
    cy.get(this.webElement.signIn).click()
  }

  signGl() {
   // cy.get(this.webElement.metd).first().find(this.webElement.glSign).click({ force: true })
    cy.log(window.location.href)
    //= 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=**';
    cy.get(this.webElement.metd).first().find(this.webElement.glSign).click({ force: true })
    cy.origin('https://accounts.google.com',()=>{
      cy.visit('//o/oauth2/auth/oauthchooseaccount?client_id=**')

    })
    // cy.window().then(win => {
    //     cy.stub(win, 'open').callsFake((url, target) => {
    //         return win.open.wrappedMethod.call(win, url, '_self')
    //     }).as('open')
        
    //     cy.get('@open')
    // })

    // cy.loginByGoogleApi()
    // cy.request({
    //   method: 'POST',
    //   url: 'https://www.googleapis.com/oauth2/v4/token',
    //   body: {
    //     grant_type: 'refresh_token',
    //     client_id: Cypress.env('googleClientId'),
    //     client_secret: Cypress.env('googleClientSecret'),
    //     refresh_token: Cypress.env('googleRefreshToken'),
    //   },
    //   form: true
    // }).then(({ body }) => {
    //   // const { id_token } = body
    //   cy.log(body)
    //https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=**
    // })

  }
}