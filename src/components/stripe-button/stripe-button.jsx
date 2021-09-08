import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Crown from "../../assets/crown.svg";
export default function StripeButton({ price }) {
  // stripe needs the price in cents
  // it cant be done in dollars
  const priceForStripe = price * 100;
  //   stripe publishable key
  const publishableKey =
    "pk_test_51JXaCcLPvlaDDVuECl1Q03fLASDJnZ1VikcNWgeZAhtCEtMAoZK6VkswQjLsNFUIs2hH6AeOeIl2lYDCleMQdT3500vawsk2MY";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={Crown}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      //token callback
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
