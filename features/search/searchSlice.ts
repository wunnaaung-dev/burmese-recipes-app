import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SearchState {
    searchValue: string
}

const initialState: SearchState = {
    searchValue: ""
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: {
            reducer: (state, action: PayloadAction<string>) => {
                state.searchValue = action.payload
            },
            prepare: (text: string) => {
                return { payload: text }
            }
        }
    }
})

export const { setSearchValue } = searchSlice.actions
export default searchSlice.reducer
