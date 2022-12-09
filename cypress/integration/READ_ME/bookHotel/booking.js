import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { HotelBook } from "../../../POM/book"

let book = new HotelBook

Given('Visit to the website', () => {
    book.visit()
})
And('go to the hotel menu', () => {
    book.hotelMenu()
})

When('search hotel for the specific city', () => {
    book.seachHotel('Mumbai')
})

Then('Select the checkin and checkout date', () => {
    book.checkInDate(15, 'Dec 2022')
    book.checkOutDate(17, 'Dec 2022')
})

And('select adults and children', () => {
    book.selectadult()
   
})

Then('click on the search button and vrify the search filter result', () => {
    book.search('1 Room, 4 Adults, 2 Children')
})
When('modify the result and search again', () => {
    book.modifyresult(1)
})

And('select the hotel from the list of the hotel', () => {
   book.selectHotel()
   
   
})

When('Selecct the room and book the room',()=>{
    book.selectRoom()
    book.bookRoom()
})

Then('verify the booking date and price',()=>{
    book.verDatePrise('Thu, Dec 15 - Sat, Dec 17')
})