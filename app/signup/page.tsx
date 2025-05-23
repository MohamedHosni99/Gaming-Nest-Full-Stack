'use client'
import Signup from '../components/forms/Signup';

const page = () => {
  return (
    <main className='min-h-screen flex items-center justify-center w-full' 
      style = {{
        backgroundImage: 'url(/bg2.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    }
  }
  >
    <Signup/>
  </main>

)}

export default page