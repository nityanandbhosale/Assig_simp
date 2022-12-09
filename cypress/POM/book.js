


export class HotelBook {
    element = {
        url: 'https://www.trip.com/',
        selMenu: '#header_action_nav_hotels',
        validH: '.main-topic >h1',
        search: '#hotels-destinationV8',
        dropD: '.associative-item',
        selectCheckIn: '#checkIn',
        monthYear: '.c-calendar-month__title',
        selectCheckOut: '#checkOut',
        numAdulChild: '#preload-room-guest',
        search2: '.search-btn-wrap',
        filResult: '.room-guest > p',
        mResult: '.room-guest',
        selHotel: 'ul[class="long-list long-list-v8"]>li',
        SelRm: '.detail-headline-price-v8_select',
        bookR:'.book-box',
        verDate:'.m-roomsB-v8_left',
        verPrise:'.m-newPerNightPriceDetail_total_content_wrap'

    }

    visit() {
        cy.visit(this.element.url)
    }

    hotelMenu() {
        cy.get(this.element.selMenu).click()
        cy.get(this.element.validH).should('have.text', 'Hotels')
    }

    seachHotel(name) {
        cy.get(this.element.search).type(name)
        cy.get(this.element.dropD).eq(0).click()
    }

    checkInDate(dateIn, monYear) {
        cy.get(this.element.selectCheckIn).click()
        cy.get(this.element.monthYear).each(function (el) {
            if (el.text().includes(monYear)) {
                cy.get('.is-allow-hover >span').contains(dateIn).click({ force: true })
            }
            // else{
            //     cy.get('.c-calendar-icon-next').click()
            // }
        })

    }

    checkOutDate(dateOut, monYear2) {
        cy.get(this.element.selectCheckOut).click()
        cy.get(this.element.monthYear).each(function (el) {
            if (el.text().includes(monYear2)) {
                cy.get('.is-allow-hover >span').contains(dateOut).click({ force: true })
            }
        })
    }

    selectadult(num) {
        cy.get(this.element.numAdulChild).click({ force: true })
        cy.get('[type="ic_new_dropdown_line"]').click()
        cy.get('[class="choice_old"]').find('[class="actions"]>[type="ic_bestir_plus"]').should('be.visible')
        cy.get('[class="choice_old"]').find('[class="actions"]>[type="ic_bestir_plus"]').eq(1).dblclick()
        cy.get('[class="choice_old"]').find('[class="actions"]>[type="ic_bestir_plus"]').eq(1).dblclick()

    }
    search(persons) {
        cy.get(this.element.search2).click()
        cy.get(this.element.filResult).should('have.text', persons)
    }

    modifyresult() {
        cy.get(this.element.mResult).click()
        // cy.get('.done').last().find('button').click()
        cy.get('.room-guest-container-v8').find('.choice-content >.child-kid >.actions').eq(1).children('[type="ic_bestir_minus"]').dblclick().click()
        cy.get('.search-btn-wrap-text').click()
    }

    selectHotel() {
        cy.get('[class="long-list long-list-v8"]').scrollIntoView().should('be.visible')
        cy.wait(30000)
        cy.window().then(win => {
            cy.stub(win, 'open').callsFake((url, target) => {

                return win.open.wrappedMethod.call(win, url, '_self')
            }).as('open');
            cy.get('.list-card-title').eq(9).click({ force: true })
            cy.get('@open');
        });
    }

    selectRoom(){
        cy.get(this.element.SelRm).click()
        
    }

    bookRoom(){
        cy.get(this.element.bookR).first().click()
        cy.wait(5000)
        cy.get('[class="m-confirm v8-BorderRadius popIn"]').find('.m-confirm_btn >span').click()
    }

    verDatePrise(date){
        cy.get(this.element.verDate).find('div').first().should('be.visible')
        cy.get('[class="price-container-v8"]').invoke('show').find(this.element.verPrise).find('[class="price"]').should('be.visible')
        
    }
}