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
    for(let j=start; j<end; j++){
        const animationEntry = {};
        animationEntry.idx1 = j;
        animationEntry.idx2 = k;
        animationEntry.swap = false;
      
        if (array[j] <= pivot) {
            swap(array,j,k);
            k++;
            animationEntry.swap = true;
        }
        animations.push(animationEntry);   

    }
      swap(array,end,k);
      const animationEntry = {};
      animationEntry.idx1=end;
      animationEntry.idx2=k;
      animationEntry.swap = true;
      animations.push(animationEntry);  
    
    
    return k;
  }

  function swap(array, i, j){

    let aux = array[i];
    array[i] = array[j];
    array[j] = aux;
   
  }

  