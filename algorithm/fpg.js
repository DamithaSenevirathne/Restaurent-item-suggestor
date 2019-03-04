class TreeNode{

    constructor(nameValue, namOccur, parentNode){
        this.name = nameValue;
        this.count = namOccur;
        this.nodeLink = null;
        this.parent = parentNode;
        this.children = {};
    }

    inc(namOccur){

        this.count = namOccur + 1;
    }

}

/*

var x;
for (x in person) {
  text += person[x] + " ";
}

*/

const rootNode = new TreeNode('pyramid',9,null);
rootNode.children['eye'] = new TreeNode('eye',13,null);

function createFpTree(dataset,minSup=1){

    headerTable = {}

    var trans;
    var item;
    var k;

    for (trans in dataset){

        for(item in trans){
            /*check for errors*/
            /*headerTable[item] = headerTable.get(item, 0) + dataSet[trans]*/
            header[item] = headerTable[item] + dataset[trans];

        }


    }



}