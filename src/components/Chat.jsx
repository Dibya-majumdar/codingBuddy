import React from 'react'

const Chat = () => {
  return (
    < >
        <div id='chat_container' className='w-1/2  m-auto mt-10 rounded-md bg-[#1D232A]'>
          <nav className='w-full h-10  overflow-hidden border border-white text-white pt-2 pl-2'>targetUserIdName</nav>       {/*bg-blue-500 */}
          <main className="w-full h-96 overflow-y-auto bg-[#1D232A] p-4 space-y-2">
              <div className="w-full flex justify-start">
              <div className="inline-block max-w-xs bg-blue-500 text-white px-4 py-2 rounded-lg">
                Hey! How are you?
              </div>
              </div>
              <div className="w-full flex justify-end">
              <div className="inline-block max-w-xs bg-green-500 text-white px-4 py-2 rounded-lg">
              I'm good, thanks nad waht about you bro from kahragpur how are you doing?
              !
              </div>
              </div>
          
</main>

          <footer className='flex bg-black h-12 w-full'>
            <input placeholder='message...' className='w-2/3 h-8 text-black font-semibold rounded-md ml-1 mt-2 pl-2'></input>
            <button className='w-20 h-8 bg-green-500 text-black font-bold rounded-md mt-2 ml-2'>send</button>
          </footer>

        </div>
      
    </>
  )
}

export default Chat
