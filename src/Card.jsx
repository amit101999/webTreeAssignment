import React from 'react'

const Card = ({ data }) => {
    console.log(data)
    return (
        <>
            {/* Image Section */}
            < div className=" w-[30%] h-[150px] flex items-center justify-center rounded " >
                <img src={data.picture.large} alt="" className='w-[100%] h-[100%] rounded ' />
            </div >
            {/* Details Section */}
            < div className="ml-6 w-[65%] text-[#262626] " >
                <div className='flex justify-between text-xl mb-2'>
                    <div>
                        <span className='font-bold '>FirstName : </span>
                        <span className='text-white text-2xl'>{data.name.first}</span>
                    </div>
                    <div>
                        <span className='font-bold '>LastName : </span>
                        <span className='text-white text-2xl '>{data.name.last}</span>
                    </div>
                </div>
                <div className='flex'>
                    <p className='font-bold'>Gender : </p>
                    <span className='text-white ml-2'> {data.gender.toUpperCase()} </span>
                </div>
                <div className='flex'>
                    <p className='font-bold'>Phone Number : </p>
                    <span className='text-white ml-2'> {data.phone} </span>
                </div>
                <div className='flex'>
                    <p className='font-bold'>Location : </p>
                    <span className='text-white ml-2'> {data.location.city} </span>
                </div>
            </div >
        </ >
    )
}

export default Card