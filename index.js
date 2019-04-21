'use strict'

var BinaryTree = require('dc-binary-tree');
var _ = require('lodash');

/*  Test tree:
                 10
              5     15
            4   7      17
               6 8   16
*/



class BinarySearchTree extends BinaryTree{

  constructor(value){
    super(value);
  }

  insert(value, node=this.root){

    if(!node.data){ node.data = value; }

    if(value < node.data){
      if(node.left){
        this.insert(value, node.left);
      }
      else{
        node.left = value;
      }
    }
    else if(value > node.data){
      if(node.right){
        this.insert(value, node.right);
      }
      else{
        node.right = value;
      }
    }
  }

  //O(n)
  isValid(){
    let prev = -Infinity;
    let validity = true;
    //Use in-order search
    function search(node){
      if(node.left && validity){ search(node.left) }
      if(node.data <= prev){ validity = false; }
      prev = node.data;
      if(node.right && validity){ search(node.right) }
    }
    search(this.root);
    return validity;
  }

  getMax(){
    let result = null;
    //O(l), where l is the depth
    if(this.isValid()){
      function search(node){
        if(node.right){
          search(node.right)
        }
        result = result || node.data;
      }
      search(this.root);
    }
    else{
      console.warn('Not valid BST, searching via O(n)')
      let inOrder = super.inOrder();
      result = inOrder.reduce((a, b) => {
        return Math.max(a, b);
      });
    }
    return result;
  }

  delete(data){

    if(_.isEqual(data, this.root.data)){
      this.root = null;
      return;
    }
    const LEFT_NODE = Symbol();
    const RIGHT_NODE = Symbol();
    let parentNode = null;
    let side = null;

    recurse(this.root);

    function recurse(node){
      if(_.isEqual(node.data, data)){
        if(side === LEFT_NODE){
          parentNode.left = null;
        } else{
          parentNode.right = null;
        }
        return;
      }

      if(node.left){
        parentNode = node;
        side = LEFT_NODE;
        recurse(node.left);
      }

      if(node.right){
        parentNode = node;
        side = RIGHT_NODE;
        recurse(node.right);
      }
    }
  }


}


module.exports = BinarySearchTree;
