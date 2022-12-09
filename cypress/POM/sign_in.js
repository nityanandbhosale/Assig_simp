export class SignIn {

    webElement= {
        url:'https://www.trip.com/',
        validation:'[class="mc-hd__logo mc-hd__logo-en-xx"]',
        signIn:'.mc-hd__login-btn',
        metd:'.way_list',
        glSign:'[class="way_icon way_icon_gl"]',
        
        
    }

    visit(){
        cy.visit(this.webElement.url)
        cy.get(this.webElement.validation).should('have.text','Trip.com')
    }

    signBtn(){
        cy.get(this.webElement.signIn).click()
    }

    signGl(){
        cy.get(this.webElement.metd).first().find(this.webElement.glSign).invoke('attr', 'target', ' _self').click({force:true})
    }
}