const { autoComple } = require("./autoComple");


function activate(context) {
  autoComple(context)
}

function deactivate() { }

module.exports = { activate, deactivate };