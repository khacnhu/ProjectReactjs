import {createSlice} from '@reduxjs/toolkit'


// const initialState = {
//     dark: false,
//     // status: 'idle'
// }


// const getTheme = ()=>{
//     let theme = `${window.localStorage.getItem("theme")}`
//     if ([ '', 'dark'].includes(theme)) return theme

//     if (theme === undefined) {
//         return ""
//     } else if (theme === "") {
//         return ""
//     } else if (theme === "dark") {
//         return "dark"
//     }

// }

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: false
    },

    reducers: {
        changetheme : (state, action) => {
            state.theme = action.payload
        }
    }

})


export const {changetheme} = themeSlice.actions

export default themeSlice.reducer