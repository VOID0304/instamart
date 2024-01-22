import {atom} from 'jotai'

export const size = atom<Boolean>(false);

size.onMount=(set)=>{
    window.innerWidth<640? set(true):set(false)
    window.addEventListener('resize',()=>{
        if(window.innerWidth<640){
            set(true)
        }
        else{
            set(false)
        }
    })
}

export const ItemCategory = atom<String>("all");