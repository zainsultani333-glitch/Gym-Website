import PricingCard from "./PricingCard"

const Pricing = () => {
  return (
    <section>
      <h2>Pricing Plans</h2>
      <PricingCard plan="Basic" price="$20" />
      <PricingCard plan="Pro" price="$40" />
    </section>
  )
}

export default Pricing
