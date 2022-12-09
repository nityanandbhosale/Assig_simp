Feature: Go to hotel menu and book the hotel room


    Scenario: verify the book hotel room functionality
        Given Visit to the website
        And go to the hotel menu
        When search hotel for the specific city
        Then Select the checkin and checkout date
        And select adults and children
        Then click on the search button and vrify the search filter result
        When modify the result and search again
        And select the hotel from the list of the hotel
        When Selecct the room and book the room
        Then verify the booking date and price
        

  



