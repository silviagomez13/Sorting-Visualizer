export function getHeapSortAnimations(array) {
   
    const animations = [];
    if (array.length <= 1) return array;
    
    heapSort(array, array.length, animations);
    console.log({array});
    return animations;
  }

  function heapSort(array, size, animations){
    let i;
    let j;
    let temp;

    for (i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(array, size, i);
    }

    for (j = size - 1; j >= 0; j--) {
        temp = array[0];
        array[0] = array[j];
        array[j] = temp;

        // visualize {
       
        // }

        heapify(array, j, 0);

        // visualize {
        
        // }
    }
  }

  // Recursive Heapify-down algorithm. The node at index i and 
  // its two direct children violates the heap property
  function heapify(array, size, root) {
    
    let largest = root;
    // get left and right child of node at index root
    const left = 2 * root + 1;
    const right = 2 * root + 2;
    let temp;
  
    // compare A[root] with its left and right child
    // and find smallest value
    if (left < size && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < size && array[right] > array[largest]) {
      largest = right;
    }
  
    // swap with child having lesser value and
	// call heapify-down on the child
    if (largest !== root) {
      temp = array[root];
      array[root] = array[largest];
      array[largest] = temp;
  
      // visualize {
      
      // }
  
      heapify(array, size, largest);
    }
  }
