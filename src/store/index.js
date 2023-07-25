import {configureStore, createSlice} from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'task',
    initialState: {todoItems: []},
    reducers: {
        addTask(state, action) {
            const newItem = action.payload;

            const existingItem = state.todoItems.find(item => item.id === newItem.id)
            if(!existingItem) {
                state.todoItems.push({
                    title: newItem.title,
                    id: newItem.id
                })
            }else{
                existingItem.title = newItem.title
            }                      
        },
        deleteTask(state, action) {
            const id = action.payload;
            state.todoItems = state.todoItems.filter(item => item.id !== id);
        },
        // editTask(state, action) {
        //     const id = action.payload;
        //     const editItem = state.todoItems.find(item => item.id === id);            
        // }
        
    }
})

const modalSlice = createSlice({
    name: 'modal',
    initialState: {showModal: false, editedItem: ''},
    reducers: {
        openModal(state, action) {
            state.showModal = true;     
            state.editedItem = action.payload
        },
        closeModal(state) {
            state.showModal = false
        }
    }

})

const store = configureStore({
    reducer: {task: taskSlice.reducer, modal: modalSlice.reducer}
})

export default store;

export const taskActions = taskSlice.actions;
export const modalActions = modalSlice.actions;

