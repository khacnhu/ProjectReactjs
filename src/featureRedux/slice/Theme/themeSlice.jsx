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
        },

        lighttheme : (state) => {
            state.theme = false
        },


        darktheme : (state) => {
            state.theme = true
        }
        
    }

})


export const {changetheme, lighttheme, darktheme} = themeSlice.actions

export default themeSlice.reducer