export default function ModalContent({ item }) {
  console.log("🚀 ~ ModalContent ~ item:", item);

  return (
    <div>
      ModalContent
      <ul>
        <li>
          <strong>Year:</strong>
          <input value={item.Year} type='text' />
        </li>
        <li>
          <strong>Maker:</strong>
          <input value={item.Maker} type='text' />
        </li>
        <li>
          <strong>Model:</strong>
          <input value={item.Model} type='text' />
        </li>
        <li>
          <strong>Type of Ignition:</strong>
          <input value={item["Type of Ignition"]} type='text' />
        </li>
        <li>
          <strong>Type of Key:</strong> {item["Type of Key"]}
        </li>
        <li>
          <strong>No Buttons:</strong> {item["No Buttons"]}
        </li>
        <li>
          <strong>Price All Keys Lost:</strong> {item["Price All Keys Lost"]}
        </li>
        <li>
          <strong>Price Add a Key:</strong> {item["Price Add a Key"]}
        </li>
        <li>
          <strong>Price Program Only:</strong> {item["Price Program Only"]}
        </li>
        <li>
          <strong>Dealer Price:</strong> {item["Dealer Price"]}
        </li>
        <li>
          <strong>Dealer Program:</strong> {item["Dealer Program"]}
        </li>
        <li>
          <strong>Dealer Emergency Blade:</strong>{" "}
          {item["Dealer Emergency Blade"]}
        </li>
        <li>
          <strong>Dealer Price Total:</strong> {item["Dealer Price Total"]}
        </li>
        <li>
          <strong>Dealer Location:</strong> {item["Dealer Location"]}
        </li>
        <li>
          <strong>Secure Locks Parts:</strong> {item["Secure Locks Parts"]}
        </li>
        <li>
          <strong>Part #:</strong> {item["Part #"]}
        </li>
        <li>
          <strong>Link:</strong> <a href={item["Link"]}>link...</a>
        </li>
        <li>
          <strong>Comments:</strong> {item.Comments}
        </li>
        <li>
          <strong>isActive:</strong> {item.isActive}
        </li>
      </ul>
    </div>
  );
}
