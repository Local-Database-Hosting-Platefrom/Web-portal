import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { MAKE_PAYMENT_REQUEST } from "../../../request-manager/requestUrls";

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await sendResquestToCentralAPI(
          "POST",
          MAKE_PAYMENT_REQUEST,
          {
            amount: 1000,
            id,
          }
        );
        const convertedResponse = await response.json();
        console.log(convertedResponse)
        // if (convertedResponse.data.success) {
        //   alert("Ya hoooo .. done with payment");
        // }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Error while creating payment method", error);
    }
  };

  return (
    <div>
      <div style={{width:"500px"}}>
      <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
      </div>
    </div>
  );
}
