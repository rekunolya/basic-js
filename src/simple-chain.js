const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    // Convert value to string and add it to the chain
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || 
      position < 1 || 
      position > this.chain.length
    ) {
       // Remove the link at the specified position
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    // Remove the link at the specified position
    this.chain.splice(position - 1, 1); 
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~'); 
    // Clear the chain for future use
    this.chain = []; 
    return result; 
  }
};

module.exports = {
  chainMaker
};
