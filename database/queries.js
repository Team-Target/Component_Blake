const aboutItem = require('./schema').aboutItem;

const save = (item, cb) => {
  let doc = new aboutItem(item);

  doc.save((err, results) => {
    if (err) {
      console.log('Error in queries saving item');
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

module.exports = {
  save
};