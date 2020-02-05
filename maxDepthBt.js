    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    var maxDepth = function(root) {


        let depth = 0;



        function traverse(c,nextNode){

            let current = c;

            if(nextNode === null){

                return;
            }

            current++;
            if(current > depth){
                depth = current;
                console.log(depth)
            }


            traverse(current,nextNode.left);
            traverse(current, nextNode.right);


        }


        traverse(0,root);
        return depth;
        //in order traversal
        //starting with depth of 1
        //current count variable
        //traverse left
        //add to current count call recursive function(next.left,currcount)
        //current count will be different in each execution context

    };

    //issue here was fumbling with visualizing count at each execution context in each stage of the recursion
    //passing the current count as an arguement served as a way for each recursive trip to refer to its own depth count