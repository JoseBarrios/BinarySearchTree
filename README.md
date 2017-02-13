# Usage

var validBST = new BinarySearchTree(50);
validBST.insertLeft(30);
validBST.left.insertLeft(20);
validBST.left.insertRight(40);
validBST.left.left.insertLeft(10);
validBST.insertRight(80);
validBST.right.insertLeft(70);
validBST.right.left.insertLeft(60);
validBST.right.insertRight(90);
validBST.right.right.insertLeft(85);
validBST.right.right.left.insertLeft(82);
validBST.right.right.left.insertRight(86);
validBST.right.right.insertRight(100);

var invalidBST = new BinarySearchTree(50);
invalidBST.insertLeft(30);
invalidBST.left.insertLeft(20);
invalidBST.left.insertRight(60);
invalidBST.insertRight(80);
invalidBST.right.insertLeft(70);
invalidBST.right.insertRight(90);
