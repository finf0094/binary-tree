// Создайте веб-страницу с отображенным на ней бинарным деревом поиска.

// При нажатии пробела веб-страница должна сгенерировать новый номер в диапазоне
// [-100, 100] и добавьте это число в дерево.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor () {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while(currentNode) {
            if(newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        } 
    }
}

let tree = new BinaryTree();

    //         9  
    //     4       10
    // 3     8       13
    //     5
console.log(tree)

const $d = document;

function addNodeFromObj(obj, parentEl = $d.body) {
  let el = $d.createElement('div');
  el.classList.add('node');
  if (!obj) {
    el.classList.add('leaf');
    parentEl.appendChild(el);
    return;
  }
  el.insertAdjacentHTML('beforeend', `
    <span class="name">${obj.value}</span><div class="container"></div>
  `);
  parentEl.appendChild(el);
  if (obj.left || obj.right) {
    el = el.querySelector('.container');
    addNodeFromObj(obj.left, el);
    addNodeFromObj(obj.right, el);
  }
  else
    el.classList.add('leaf');
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      tree.add(getRandomNumber(-100, 100));
      const treeEl = document.querySelector('.tree');
      treeEl.innerHTML = '';
      addNodeFromObj(tree.root, treeEl);
    }
  });
addNodeFromObj(tree.root);