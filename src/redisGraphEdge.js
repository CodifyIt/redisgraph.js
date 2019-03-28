const assert = require('assert')

class Edge {

    constructor (srcNode, relation, destNode, properties = null) {

        assert.notEqual(srcNode, null);
        assert.equal(srcNode instanceof Node, true);
        assert.notEqual(destNode, null);
        assert.equal(destNode instanceof Node, true);

        this.srcNode = srcNode;
        this.relation = relation;
        this.destNode = destNode;
        this.properties = properties;
    }

    toString () {
        let edgeString = '(' + this.srcNode.getAlias() + ')';

        edgeString += '-[';

        if ( this.relation !== null) {
            edgeString += ': ' + this.relation;
        }

        if ( this.properties != null || this.properties != {}) {
            // Formating properties to add to the string
		  let properties = JSON.stringify(this.properties);
  
		  // Removing the double quotes around the keys
          properties = properties.replace(/\"(\w*)\":/g, "$1:");
          
          edgeString = ' ' + properties;
        }

        edgeString += ']->';

        edgeString += '(' + this.destNode.getAlias() + ')';

        return edgeString;
    }
}