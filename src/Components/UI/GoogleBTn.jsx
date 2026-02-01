import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function Google() {
  return (
    <div>
        <div className="Google px-4 py-2.5 border-2 border-gray-300 rounded-md shadow-md flex items-center justify-center">
        <FcGoogle className="mr-2" size={24} />
        <p>Login with Google</p>
        </div>
    </div>
  )
}
