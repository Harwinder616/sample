import database from '../firebase/firebase'

const optionsDefault=[];
export default (state=optionsDefault,action)=>{
    switch(action.type)
    {
            case 'ADD_OPTION':
                database.ref('options').push(action.option)
          

            
            return[
                ...state,
                action.option
            ];
     

            case 'SET_OPTION':
                return[
                    ...action.options
                ]


            case 'REMOVE_OPTION':
                    database.ref('options').on('value',(snapshot)=>{
                        snapshot.forEach((child)=>{
                            if(child.val()===action.option)
                            
                             {database.ref('options/'+child.key).set(null);
                             console.log(child.key)}
  
                       
                          
                           
                            
                         
                      
                        })})
                    
                    return state.filter((option)=>
                        option!==action.option
                        

                    )

             case 'REMOVE_ALL':
                 database.ref().set(null);
            return [];

            default:
            return state;

    }
}
