import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY="pk_test_51LTJp9SFrolUQU02DzEpsl8LCT7ie0q8RBi9rLNToB4zAmV3c0WXXODDor84LcdtuvtPGUeM5Ai5sjn4OTWKdqfx00waXiv4nx";

const stripeTestPromise=loadStripe(PUBLIC_KEY);
export default function StripeContainer(){
    return <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
    </Elements>
}