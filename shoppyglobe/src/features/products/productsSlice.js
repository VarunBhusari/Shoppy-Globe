import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('https://dummyjson.com/products')
            return res.data.products
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        filteredItems: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        filterProducts(state, action) {
            const searchTerm = action.payload.toLowerCase()
            state.filteredItems = state.items.filter(product =>
                product.title.toLowerCase().includes(searchTerm)
            )
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
                state.filteredItems = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export const { filterProducts } = productsSlice.actions
export default productsSlice.reducer
