const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    let deliveryPerson = order.order.delivery.deliveryPerson;
    let orderName = order.name;
    let orderContact = order.phoneNumber;
    let orderAdressStreet = order.address.street;
    let orderAdressNumber = order.address.number;
    let orderAdressApartment = order.address.apartment;

    return `'Olá, ${deliveryPerson}, entrega para: ${orderName}, Telefone: ${orderContact}, ${orderAdressStreet}, Número ${orderAdressNumber}, AP:${orderAdressApartment},'`
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Olá, Luiz Silva';
    order.order.drinks.coke.price = 5;
    let orderName = order.name;
    let orderKeysPizza = Object.keys(order.order.pizza);
    let orderEntriesDrink = order.order.drinks.coke.type;
    let orderItem1 = orderKeysPizza[0];
    let orderItem2 = orderKeysPizza[1];
    let orderItem3 = orderEntriesDrink;
    let orderItem1Cost = order.order.pizza.marguerita.price;
    let orderItem2Cost = order.order.pizza.pepperoni.price;
    let orderItem3Cost = order.order.drinks.coke.price;
    let totalCost = orderItem1Cost + orderItem2Cost + orderItem3Cost;
    
    return `'Olá, ${orderName}, o valor total de seu pedido de ${orderItem1}, ${orderItem2} e ${orderItem3} é R$ ${totalCost}.'`
    
  }
  
  console.log(orderModifier(order));