const express = require('express');
const amqb = require('amqplib/callback_api');
const app = express();
const port = 3001;
amqb.connect(
  'amqp://kgczorta:oT2-xxVZGHjp71aA9qjYVKzIPSI7cW3F@lionfish.rmq.cloudamqp.com/kgczorta',
  (err, conn) => {
    conn.createChannel((err, ch) => {
      let queue = 'FirstQueue';
      console.log(`waiting for ${queue}`);
      ch.assertQueue(queue, { durable: false });
      ch.consume(
        queue,
        (message) => {
          console.log(`recieved ${message.content}`);
        },
        { noAck: true }
      );
    });
  }
);
app.listen(port, () => console.log(`Server is running on ${port}`));
