const redis = require("redis"),
  client = redis.createClient();

module.exports = {
  create: (req, res) => {
    let id = req.body.id,
      title = req.body.title,
      description = req.body.description;
    try {
      client.hmset(
        id,
        ["title", title, "description", description],
        (err, reply) => {
          if (err) {
            res.send(err);
          } else {
            res.send(reply);
          }
        }
      );
    } catch (err) {
      res.send("Error saving todo");
    }
  },

  view: (req, res) => {
    let id = req.params.id;
    try {
      client.hgetall(id, (err, reply) => {
        if (err) {
          res.send(err);
        } else {
          res.send(reply);
        }
      });
    } catch (err) {
      res.send("Error getting todo");
    }
  },

  update: (req, res) => {
    let id = req.params.id;
    result = [];
    for (let i in req.body) {
      result.push(i, req.body[i]);
    }

    try {
      client.hmset(id, result, (err, reply) => {
        if (err) {
          res.send(err);
        } else {
          res.send(reply);
        }
      });
    } catch (err) {
      res.send("Error updating todo");
    }
  },

  delete: (req, res) => {
    try {
      client.del(req.params.id, (err, reply) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Todo deleted successfuly" });
        }
      });
    } catch (err) {
      res.send("Error deleting todo");
    }
  }
};
