import { createSlice } from "@reduxjs/toolkit";



const storedItems=localStorage.getItem('favitems')


const initialState={
    favitems:storedItems?JSON.parse(storedItems):[]
}


const FavSlice=createSlice(
 {
    name:'fav',
    initialState,
    reducers:{


    addTofav:(state,action)=>{
    const newItem=action.payload
    //   console.log(state.favitems,"from redux add")
    const  existitem=state.favitems.find(item=>item.id===newItem.id)
                 
      if(existitem){
        existitem.quantity += newItem.quantity
      }else{
         state.favitems.push(
         newItem    )
    
  
        }

localStorage.setItem('favitems',JSON.stringify(state.favitems))

            },


    deleteFromfav:(state,action) =>{
      state.favitems=state.favitems.filter(Items=>Items.id !== action.payload.id);
      localStorage.setItem("favitems",JSON.stringify(state.favitems));
            },


      updateQuantity:(state,action)=>{


        const{id,quantity}=action.payload;
        const itemToUpdate=state.favitems.find(Item=>Item.id===id);


    if(itemToUpdate)
        {
          itemToUpdate.quantity=quantity;
          localStorage.setItem("favitems",JSON.stringify(state.favitems));
        }
            }          
        }
    }
)



export default FavSlice.reducer;
export const {addTofav,deleteFromfav,updateQuantity}=FavSlice.actions;




