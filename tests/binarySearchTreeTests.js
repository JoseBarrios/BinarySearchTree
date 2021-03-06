
'use strict'

var BinarySearchTree = require('../index.js');
var assert = require('assert');

/*  Test tree:
                 10
              5     15
            4   7      17
               6 8   16
 */
var numTree = new BinarySearchTree(10)
numTree.insert(5);
numTree.insert(4);
numTree.insert(7);
numTree.insert(6);
numTree.insert(8);
numTree.insert(15);
numTree.insert(17);
numTree.insert(16);
numTree.insert(4);


//Correct outputs
const CORRECT_BFS = [10,5,15,4,7,17,6,8,16];
const CORRECT_DFS_PREORDER = [10,5,4,7,6,8,15,17,16];
const CORRECT_DFS_INORDER = [4,5,6,7,8,10,15,16,17];
const CORRECT_DFS_POSTORDER = [4,6,8,7,5,16,17,15,10];
const CORRECT_MAX = 17;

//TODO
//const CORRECT_A_PATH = [10,5];
//const CORRECT_E_PATH = ['F','B','D'];
//const CORRECT_H_PATH = ['F','G','I'];
//const CORRECT_LEAF_DEPTHS = [ 2, 3, 3, 3 ];
//const CORRECT_MAX_DEPTH = 3;
//const CORRECT_ARRAY = ['F',null,'B','G', null, 'A','D','I',null,'C','E','H',null];
//const CORRECT_REVERSE = ['F',null,'G','B',null,'I','D','A',null,'H','E','C',null]


describe('BinarySearchTree', function() {


  describe('#isValid()', function() {
    it('should return true if valid binary search tree, false otherwise', function() {
      assert.deepStrictEqual(numTree.isValid(), true);
    });
  });

  describe('#getMax()', function() {
    it('should return true if valid binary search tree, false otherwise', function() {
      assert.deepStrictEqual(numTree.getMax(), CORRECT_MAX);
    });
  });

  describe('#getLCA()', function() {
    it('should return the Least Common Ancester (LCA) of two nodes', function() {
      assert.deepStrictEqual(numTree.getLCA(4, 8), 5);
    });
  });

  describe('#BFS()', function() {
    it('should return an array of node values by breath order', function() {
      assert.deepStrictEqual(numTree.BFS(),CORRECT_BFS);
    });
  });

  describe('#DFS()', function() {
    it('should return an array of pre-ordered node values', function() {
      assert.deepStrictEqual(numTree.DFS('PREORDER'),CORRECT_DFS_PREORDER);
    });
    it('should return an array of in-ordered node values', function() {
      assert.deepStrictEqual(numTree.DFS(),CORRECT_DFS_INORDER);
      assert.deepStrictEqual(numTree.DFS('INORDER'),CORRECT_DFS_INORDER);
    });
    it('should return an array of post-ordered node values', function() {
      assert.deepStrictEqual(numTree.DFS('POSTORDER'),CORRECT_DFS_POSTORDER);
    });
  });

/*  Test tree:
                 10
              5     15
            4   7      17
               6 8   16
 */
  describe('#delete()', function() {
    it('should delete an specific node in the tree', function() {
      assert.deepStrictEqual(numTree.DFS('INORDER'), [4,5,6,7,8,10,15,16,17]);
      numTree.delete(16); //delete left leaf
      assert.deepStrictEqual(numTree.DFS('INORDER'), [4,5,6,7,8,10,15,17]);
      numTree.delete(17); //delete right leaf
      assert.deepStrictEqual(numTree.DFS('INORDER'), [4,5,6,7,8,10,15]);
      numTree.delete(7); //delete parent with both sides
      assert.deepStrictEqual(numTree.DFS('INORDER'), [4,5,10,15]);
      numTree.delete(5); //delete parent with left side only
      assert.deepStrictEqual(numTree.DFS('INORDER'), [10,15]);
      numTree.insert(20);
      assert.deepStrictEqual(numTree.DFS('INORDER'), [10,15, 20]);
      numTree.delete(15); //delete parent with right side only
      assert.deepStrictEqual(numTree.DFS('INORDER'), [10]);
      numTree.delete(10); //delete root
      assert.deepStrictEqual(numTree.DFS('INORDER'), []);
    });
  });





  //TODO

  //describe('#getLeafDepths()', function() {
    //it('should return an array of leaf depths', function() {
      //assert.deepStrictEqual(numTree.getLeafDepths(), CORRECT_LEAF_DEPTHS);
    //});
  //});

  //describe('#getMaxDepth()', function() {
    //it('should return the level of the deepest leaf', function() {
      //assert.deepStrictEqual(numTree.getMaxDepth(),CORRECT_MAX_DEPTH);
    //});
  //});

  //describe('#getNode()', function() {
    //it('should return the first instance of the node with matching value', function() {
      //assert.deepStrictEqual(numTree.getNode('A'), aNode );
      //assert.deepStrictEqual(numTree.getNode('H'), hNode );
    //});
  //});

  //describe('#pathTo()', function() {
    //it('should return the path to the passed value', function() {
      //assert.deepStrictEqual(numTree.getPathTo('A'),CORRECT_A_PATH);
    //});
  //});

  //describe('#reverse()', function() {
    //it('should return the reverse of the tree', function() {
      ////TODO: Get rid of #toArray dependency, create the reverse tree
      //assert.deepStrictEqual(numTree.reverse().toArray(), CORRECT_REVERSE);
    //});
  //});

});

