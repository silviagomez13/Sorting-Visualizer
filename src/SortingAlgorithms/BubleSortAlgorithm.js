export function getBubleSortAnimations(array) {
    console.log({array});
    const animations = [];
    if (array.length <= 1) return array;
    
    bubleSort(array, animations);
    console.log({array});
    return animations;
  }

  function bubleSort(array, animations){

    for(let i = 0; i<array.length-1; i++){
        let swapped = false;

        for(let j = 0; j<array.length-i-1; j++){
            
            const animationEntry={};
            animationEntry.idx1 = j;
            animationEntry.idx2 = j+1;
            animationEntry.swap = false;

            if(array[j] > array[j+1]){
                
                let aux =  array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
                swapped = true;
                animationEntry.swap = true;

            }

            animations.push(animationEntry);

        }
        if(!swapped){
            break;
        }
    }
  }