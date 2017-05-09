import h from'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

// 1: Create a function that declares what the DOM should look like
function render(count)  {
    return h('div', {
        style: {
            textAlign: 'center',
            lineHeight: (100 + count) + 'px', 
            border: '1px solid red',
            width: (100 + count) + 'px',
            height: (100 + count) + 'px'
        }
    }, [String(count)]);
}

// 2: Initialise the document
var count = 0;      // We need some app data. Here we just store a count.

var tree = render(count);               // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
document.body.appendChild(rootNode);    // ... and it should be in the document



setInterval(function () {
      
      // CHANGE DATA
      count++;
      
      const newTree = render(count);

      // find changes and only update the virtual nodes which changed
      const patches = diff(tree, newTree);
      
      // update/patch dom
      rootNode = patch(rootNode, patches);

      // set new tree
      tree = newTree;
}, 10000);
