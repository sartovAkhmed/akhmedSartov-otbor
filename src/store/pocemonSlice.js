import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"; 

export const fetchPocemon = createAsyncThunk(
    'todos/fetchProducts', 
    async () => { 
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/') 
        return response.data.results
    } 
) 

const pocemonSlice = createSlice({ 
    name: 'products', 
    initialState: {
        loading: false, 
        error: null,
        items: []
    }, 
    reducers: {}, 
    extraReducers: (builder) => { 
        builder.addCase(fetchPocemon.pending, (state) => { 
            state.loading = true
            state.error = null 
        })
        .addCase(fetchPocemon.fulfilled, (state, action) => { 
            state.error = null 
            state.loading = false 
            state.items = action.payload 
        })
        .addCase(fetchPocemon.rejected, (state, action) => { 
            state.error = action.error.message 
            state.loading = false 
        }) 
    }  
}) 

export const pocemonReducer = pocemonSlice.reducer