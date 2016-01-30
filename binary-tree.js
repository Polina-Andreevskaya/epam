'use strict';

class BinaryTree {
	

	constructor() {
		this.root = null;		
	}

	insert(data) {
		var node = new Node(data,null,null);
		var currentNode = this.root;
		if (this.root == null)
		{
			this.root = node
			return;
		}
		else
		{			
			if (currentNode.data == node.data)
				return
			else
			{
				do
				{
					if(currentNode.data > node.data)
					{
						if(currentNode.left == null)
						{
							currentNode.left = node;
							break;
						}
						else
						{
							currentNode = currentNode.left;
						}
					}
					else
					{
						if(currentNode.right == null)
						{
							currentNode.right = node;
							break;
						}
						else
						{
							currentNode = currentNode.right;
						} 
					}
				}
				while(currentNode.data != data)
			}					
		}
	}

	contains(data) {
		var currentNode = this.root;
		if (this.root == null)
		{			
			return false;
		}		
		else
		{
			do
			{
				if (currentNode.data == data)
				{			
					return true;
				}
				if(currentNode.data > data)
				{						
					currentNode = currentNode.left;						
				}
				else
				{						
					currentNode = currentNode.right;						 
				}
			}
			while(currentNode != null)
		}
		return false;
	}

	remove(data) {
		var currentNode = this.root;
		var parentNode = null;
		var isContains = false;

		var parentOfMinNode = new Node(null, null, null);
		var exchangedNode = new Node(null, null, null);

		if (this.root == null) //search 'data' begins
		{			
			return;
		}		
		else
		{
			do
			{
				if (currentNode.data == data)
				{	
					isContains = true;		
					break;
				}
				if(currentNode.data > data)
				{
					parentNode = currentNode;				
					currentNode = currentNode.left;																				
				}
				else
				{			
					parentNode = currentNode;			
					currentNode = currentNode.right;																		 
				}
			}
			while(currentNode != null)
		}

		if (!isContains)
		{
			return;
		}				//search 'data' ends

		if (parentNode == null)
		{
			this.root = null;
			return;
		}

		if ((currentNode.left == null) && (currentNode.right == null))
		{			
			if (parentNode.right == currentNode)
			{
				parentNode.right = null;
			}
			else
			{
				parentNode.left = null;
			}
		}
		else
		{
			if ((currentNode.left != null) && (currentNode.right != null))
			{
				if (currentNode.right.left == null)
				{
					currentNode.data = currentNode.right.data;
					if (currentNode.right.right != null)
					{
						currentNode.right = currentNode.right.right;
					}
					else
					{
						currentNode.right = null;
					}
				}
				/*else
				{
					//removenode2(currentNode.right, currentNode);
					//var parentOfMinNode = findmin(currentNode.right.right, currentNode);
					var parentOfMinNode = function(current, parent)
					{
						if (current.left == null)
						{
							return parent;
						}
						else
						{
							parent = current;
							current = current.left;
							findmin(current, parent);
						}
					}
					var pnode = parentOfMinNode(currentNode.right.right, currentNode);
					var minNode = pnode.left;
					pnode.left = null;
					parentNode.data = minNode.data;
				}*/
			}

			else
			{
				if (parentNode.right == currentNode)
				{
					if (currentNode.right != null)
					{
						parentNode.right = currentNode.right;
					}
					else
					{
						parentNode.right = currentNode.left;
					}
				}
				else
				{
					if (currentNode.right != null)
					{
						parentNode.left = currentNode.right;					
					}
					else
					{
						parentNode.left = currentNode.left;
					}
				}
			
			}

		}

	}

/*removenode2(curNode, parNode)
	{
		var parentOfMinNode = findmin(curNode.right, currentNode);
		var minNode = parentOfMinNode.left;
		parentOfMinNode.left = null;
		parentNode.data = minNode.data;
	}

	findmin(currentRoot, parentOfCurrentNode) {
		if (currentRoot.left == null)
		{
			return parentOfCurrentNode;
		}
		else
		{
			parentOfCurrentNode = currentRoot;
			currentRoot = currentRoot.left;
			findmin(currentRoot, parentOfCurrentNode);
		}
	}

	
*/	

	size() {

		var elemCount = 0;
		var elements = function (elem)
		{
			if(elem != null)
			{
				elemCount++;
				elements(elem.left);
				elements(elem.right);
			}
		};
		if (this.root == null)
		{
			return 0;
		}
		elements(this.root);
		return elemCount;
	}
	
	

	isEmpty() {	

		if (this.root == null)
		{
			return true;
		}
		return false;


	}
}
