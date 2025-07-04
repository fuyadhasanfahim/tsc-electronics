import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import Category from './Category'

export default function Products() {
  return (
    <div className='mt-6'>
        {/* Navbar */}
        <Navbar />
        
        <Category />
        {/* Footer */}
        <Footer />
    </div>
  )
}
