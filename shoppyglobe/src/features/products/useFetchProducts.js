import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productsSlice'

export const useFetchProducts = () => {
    const dispatch = useDispatch()
    const { items, status, error, filteredItems } = useSelector(state => state.products)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts())
        }
    }, [dispatch, status])

    return { products: filteredItems, status, error }
}