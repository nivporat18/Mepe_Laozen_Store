const express = require('express');
const Stripe = require("stripe");
const OrderModel = require('../models/OrderModel');

require("dotenv").config()

const stripe = Stripe(process.env.STRIPE_KEY)
const router = require("express").Router()


router.post('/create-checkout-session', async (req, res) => {

  const customer = await stripe.customers.create({
    metadata:{
      userId: req.body.userId.toString(),
      cart: JSON.stringify(req.body.cartItems.toString()),
    }
    
  })

  const line_items =req.body.cartItems.map((item)=>{
    return{
      price_data: {
        currency: 'ils',
        product_data: {
          name:item.name,
          images:[item.images],
          description:item.desc,
          metadata:{
            id:item.id
          }
        },
        unit_amount: item.price * 100,
      },
      quantity: item.cartQuantity,
    };
  });


  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ['IS'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'ils',
          },
          display_name: 'Free shipping',
          delivery_estimate: {  
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'ils',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],

    phone_number_collection:{
      enabled:true
    },
    customer:customer.id,
    line_items,
    mode: 'payment',
    success_url:`${process.env.CLIENT_URL}/checkout-success`,
    cancel_url:`${process.env.CLIENT_URL}/cart`,
  });

  res.send({url: session.url});
});



const createOrder =async (customer,data)=>{
  const Items = JSON.parse(customer.metadata.cart);

  const newOrder = new OrderModel({
    userId:customer.metadata.userId,
    customerId:data.customer,
    PaymentIntentId:data.Payment_Intent,
    products:Items,
    subtotal:data.amount_subtotal,
    total:data.amount_total,
    shipping:data.customer_details,
    payment_status:data.payment_status
  })

  try {
    const savedOrder = await newOrder.save()
    console.log("Processed Order: ", savedOrder)
  } catch (error) {
    console.log(error)
  }

}

//webhook

// This is your Stripe CLI webhook secret for testing your endpoint locally.

let endpointSecret;

// const endpointSecret = "whsec_ac1831c7f28971ddd0902ac57e4cb3ddc413f184a94d211ccfedd33f5fc70aa4";

router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = request.headers['stripe-signature'];

  let data;
  let eventType;

  if(endpointSecret){
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("Webhook verifies ")
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    data = event.data.object;
    eventType = event.type;
  }else{
      data = req.body.data.object;
      eventType = req.body.type;
  }



  // Handle the event
  if(eventType === "checkout.session.completed"){
    stripe.customers.retrieve(data.customer).then((customer)=>{
      console.log(customer)
      console.log("data:",data)

      createOrder(customer,data)

    }).catch(err => console.log(err.message))
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send().end();
});











  module.exports = router