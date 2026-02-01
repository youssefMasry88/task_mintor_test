import React from 'react'
import { MdFacebook } from 'react-icons/md'

export default function Facebook() {
  return (
<div>
        <div className="Google px-4 py-2.5 border-2 border-gray-300 rounded-md shadow-md flex items-center justify-center">
        <MdFacebook className="mr-2" size={24} color="#1877F2" />

        <p>Login with Google</p>
        </div>
    </div>
  )
}
