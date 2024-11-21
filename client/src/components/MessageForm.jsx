import React from 'react'

const MessageForm = () => {
    return (
        <div className='w-full flex flex-col'>

            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-full justify-center items-center flex'>
                    <form action="" className='flex flex-col gap-5 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-10 md:p-0 xl:p-0 2xl:p-0 '>
                        <div className='flex justify-center items-center w-full'>
                            <h2 className='w-full text-start text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold px-3 border-l-2 border-red-600'>Leave a message</h2>
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="fullname">Full Name</label>
                            <input className=' bg-transparent rounded-md border-[1px] border-slate-400 py-3 px-2' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email Address</label>
                            <input className=' bg-transparent rounded-md border-[1px] border-slate-400 py-3 px-2' autoFocus={false} />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" cols="30" rows='5' className='rounded-md bg-transparent border-slate-400'></textarea>
                        </div>
                        <button className='bg-red-600 text-white py-2 rounded-md hover:bg-red-700 duration-75 ease-in'>Send</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default MessageForm