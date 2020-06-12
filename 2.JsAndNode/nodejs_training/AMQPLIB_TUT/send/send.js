const express = require('express');
const amqb = require('amqplib/callback_api');
const app = express();
const port = 3000;
amqb.connect(
  'amqp://kgczorta:oT2-xxVZGHjp71aA9qjYVKzIPSI7cW3F@lionfish.rmq.cloudamqp.com/kgczorta',
  (err, conn) => {
    conn.createChannel((err, ch) => {
      let queue = 'FirstQueue';
      let message = { type: '2', content: 'Hello RabbitMQ' };
      ch.assertQueue(queue, { durable: false });
      ch.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
      console.log('Message was sent');
    });
    setTimeout(() => {
      conn.close();
      process.exit(0);
    }, 500);
  }
);
app.listen(port, () => console.log(`Server is running on ${port}`));
