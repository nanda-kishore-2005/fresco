// Generate unique order ID
export const generateOrderID = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;

  // Get last stored order info
  const storedOrderInfo = JSON.parse(localStorage.getItem('fresco_last_order') || '{}');
  
  let orderNumber = 1;
  if (storedOrderInfo.date === dateStr) {
    orderNumber = storedOrderInfo.count + 1;
  }

  // Save new order info
  localStorage.setItem('fresco_last_order', JSON.stringify({
    date: dateStr,
    count: orderNumber
  }));

  const formattedNumber = String(orderNumber).padStart(4, '0');
  return `FO-${dateStr}-${formattedNumber}`;
};

// Format WhatsApp message
export const formatOrderMessage = (orderData) => {
  const { customer, cart, total } = orderData;
  const orderId = generateOrderID();

  let message = `✅ *NEW ORDER CONFIRMED* — Fresco Organics\n`;
  message += `🔖 Order ID: ${orderId}\n\n`;
  message += `👤 Name: ${customer.name}\n`;
  message += `📞 Phone: ${customer.phone}\n`;
  message += `📍 Area: ${customer.area}\n`;
  
  if (customer.area === 'KL University' && customer.cabin) {
    message += `🏠 Cabin/Room: ${customer.cabin}\n`;
  }
  
  message += `📅 Delivery Date: ${customer.deliveryDate}\n\n`;
  
  message += `🧺 Order Details:\n`;
  cart.forEach(item => {
    message += `- ${item.name} x ${item.quantity} — ₹${item.price * item.quantity}\n`;
  });
  
  message += `\n💰 Total: ₹${total}\n`;
  message += `💳 Payment: Cash on Delivery\n\n`;
  message += `Thank you! 🙏\n`;
  message += `Fresco Organics — Nature's Best Served Fresh 🌿`;

  return { message, orderId };
};

// Open WhatsApp
export const openWhatsApp = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/919110380467?text=${encodedMessage}`;
  
  window.open(link, '_blank');
};

export const whatsAppNumbers = ['+919110380467'];
