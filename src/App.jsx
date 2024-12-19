import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true)
        const res = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
        setData(res.data.results)
      } catch (err) {
        console.error("error in getting data : ", err)
      }
    }
    fetch()
  }, [])


  return (
    <div className=''>
      <div className="flex items-center justify-center min-h-screen  bg-slate-900">
        <div className="p-6 w-[45%] h-[200px] bg-gradient-to-r from-fuchsia-600 to-indigo-600 flex rounded">
          {
            data.map((item) => {
              return (
                <Card key={item.id.value} data={item} />
              )
            })
          }
        </div>
      </div>
    </div >
  )
}

export default App



