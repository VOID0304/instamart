import {atom} from 'jotai'

export const size = atom<Boolean>(true);

size.onMount=(set)=>{
    
    window.addEventListener('resize',()=>{
        if(window.innerWidth<640){
            set(true)
        }
        else{
            set(false)
        }
    })
}