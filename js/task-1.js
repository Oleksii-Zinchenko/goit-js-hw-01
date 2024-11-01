function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return (makeTransaction = `You ordered ${quantity} droids worth ${totalPrice} credits!`);
}

console.log(makeTransaction(5, 3000));
