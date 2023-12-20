import Stripe from "stripe";

export default class PaymentService {

    constructor() {
        this.stripe = new Stripe('sk_test_51OPXVWAnhVfZVBMlyHhtp3Ou9OKWJBjwlnR0W4lFOyBTAuCxCoSMPMeIq5SFwXqQWm1FGymnR214UWUfoAeg84PZ00nV21E22D')
    }

    createPaymentIntent = async (data) => {
        const paymentIntent = await this.stripe.paymentIntents.create(data);
        return paymentIntent
    }
}