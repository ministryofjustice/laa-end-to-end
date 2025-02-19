//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//Financial eligibility routes


router.post('/financial_eligibility_answer', function(request, response) {

    var financiallyEligibile = request.session.data['financiallyEligible']
    if (financiallyEligibile  == "yes"){
        response.redirect('/caseworker_means/financial_eligibility_')
    } else {
        response.redirect('/caseworker_means/financial_eligibility')
    }
})