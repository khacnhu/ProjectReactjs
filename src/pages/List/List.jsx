import React from 'react'
import "./list.scss"

import { Sidebar } from '../../components/Sidebar/Sidebar'

import Navbar from '../../components/Navbar/Navbar'
// import Datatable from '../../components/Datatable/Datatable'
import { Datatable } from '../../components/Datatable/Datatable'

export const List = () => {
  return (

    <div className = "list" >
      <Sidebar/>
      <div className='listContainer' >
          <Navbar/>
          <Datatable/>
      </div>

    
    </div>

  )
}
