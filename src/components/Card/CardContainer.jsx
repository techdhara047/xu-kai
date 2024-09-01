import Card from "../Card.astro";

function CardContainer({ data, heading }) {
  return (
    <div className="cardContainer" key={heading + 1}>
      <h4 className="heading">{heading}</h4>
      <div className="grid">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
