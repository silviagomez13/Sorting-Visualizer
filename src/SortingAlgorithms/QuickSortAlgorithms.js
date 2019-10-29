export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    console.log({array});
    //const auxiliaryArray = array.slice(); //copia exacta del array
    quickSortHelper(0, array.length - 1, array, animations);
    //console.log({auxiliaryArray});
    return animations;
  }
  
  function quickSortHelper(
 
    start,
    end,
    array,
    animations,
  ) {
    if (start >= end) return;
    
    const pi = partition(start, end, array, animations);
    //console.log({pi});
    quickSortHelper( start, pi-1, array, animations);
    //console.log({array});
    quickSortHelper( pi+1, end, array, animations);
    //console.log({array});

  }
  
  function partition(

    start,
    end,
    array,
    animations,
  ) {
    let k = start;
    let i = start;
    let pivot = array[end]; // ultimo elemento
    //console.log({animations});
    console.log({pivot});
    // each time we finds an element less than or equal to pivot,
    // k is incremented and that element would be placed 
    // before the pivot.
    for(let j=start; j<end; j++){
      // These are the values that we're comparing; we push them once
      // to change their color.
     
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      //animations.push([j, end]);
      
        if (array[j] <= pivot) {
            
            swap(array,j,k);
            k++;
            //animations.push([j, k]);
            animations.push([j, k]);
            animations.push([j, k]);
            
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
           // animations.push([array[k], array[j]]);
            console.log("menos al pivote");
            console.log({array});
            //mainArray[k++] = array[j++];
            //animations.push([i, end]);
        }else{ 
            animations.push([k, j]);
            animations.push([k, j]);
        }
        
    }   

    
      swap(array,end,k);
      console.log("mayor al pivote");
      console.log({array});
      //animations.push([i, end]);
      animations.push([k, end]);
      animations.push([k, end]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      //animations.push([array[k], array[end]]);
      //mainArray[k++] = auxiliaryArray[i++];
    
    return k;
  }

  function swap(array, i, j){

    let aux = array[i];
    array[i] = array[j];
    array[j] = aux;
   
  }

  