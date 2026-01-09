const PricingCard = ({ plan, price }) => {
  return (
    <div>
      <h3>{plan}</h3>
      <p>{price}</p>
    </div>
  )
}

export default PricingCard
