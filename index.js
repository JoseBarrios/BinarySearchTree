'use strict'

var BinaryTree = require('binarytree');


////////////////////////////
///////////////////////////
//                     //
// BINARY SEARCH TREE //
//                   //
//////////////////////
/////////////////////


class BinarySearchTree extends BinaryTree{

    constructor(value, leftNode, rightNode){
        super(value,leftNode,rightNode);
    }

    isValid(){
        var inOrderNodes = super.DSF('in');
        for(var i=0; i < inOrderNodes.length-1; i++){
            if(inOrderNodes[i] > inOrderNodes[i+1]){
                return false;
            }
        }
        return true
    }

    getLargestNthElement(nth){
        var nth = nth || 1;
        var inOrderNodes = super.DSF('in');
        return inOrderNodes[inOrderNodes.length-nth]
    }

    getLeastCommonAncester(a, b){
        //Check that both a and b actually exist
        if(this.findPath(a) && this.findPath(b) && this.isValid()){
            //Returns currentNode that is greater than min, and smaller than max
            function recurse(currentNode, a, b){
                //Invalid input
                if(!currentNode || !a || !b){ return null }
                //If currentNode is greater than max, decrement currentNode value (by going left);
                if(currentNode.value > Math.max(a, b)){ return recurse(currentNode.left, a, b); }
                //If currentNode is smaller than min, increment currentNode value (by going right);
                else if(currentNode.value < Math.min(a, b)){ return recurse(currentNode.right, a, b); }
                //If currentNode is greater than min, and smaller than max
                else { return currentNode; }
            }
            return recurse(this, a, b).value;
        }
        else{ return null }
    }




    ///////////////////////
    //   TO DELETE
    ///////////////////////
    getSecondLargestElement(){

        var largestNode = null;
        var largestNodeParent = null;

        function recurse(node){
            if(node.right){
                largestNodeParent = node;
                return recurse(node.right);
            }
            return {largestNode: node, largestNodeParent: largestNodeParent }
        }

        var response = recurse(this);

        if(response.largestNode.left){
            return getLargestElement(response.largestNode.left)
        }else {
            return response.largestNodeParent.value;
        }
    }

}

module.exports = BinarySearchTree;
