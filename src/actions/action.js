import '../firebase/firebase';

import database from '../firebase/firebase';

export const addOption = ( option ) => ({
        type : 'ADD_OPTION',
        option
    });

     /*export const startaddOption=(optionData)=>{
        return (dispatch)=>{
           
            
            return database.ref('options').push(optionData).then(()=>{
                dispatch(addOption(optionData
                    
                ))
            })
        }
        
    }*/
    

    
export const removeOption=(option)=>(
    {
        type:'REMOVE_OPTION',
        option
    }
)
export const removeAll=()=>(
    {
        type:'REMOVE_ALL'
        
    }
)
export const setData=(options)=>(
    {
      type:'SET_OPTION',
      options
    }
)


const StartsetOptions=()=>{
    console.log('kogged')
    return(dispatch)=>{ 
   return database.ref('options/').once('value').then((snapshot)=>{
        const options=[];
        snapshot.forEach((child)=>{console.log(child.key)
          options.push(child.val()
    
           
          )
         
    
        })
        console.log(options)
      dispatch(setData(options))
     
      })
    }
    
}
 export default StartsetOptions
 