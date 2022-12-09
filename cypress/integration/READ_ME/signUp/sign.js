import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import {SignIn} from "../../../POM/sign_in"

let signFun = new SignIn

Given('visit to the trip website',()=>{
    signFun.visit()
})

And('click on the sign In button in right corner',()=>{
    signFun.signBtn()
})

When('sign Up with the google account',()=>{
    signFun.signGl()
})