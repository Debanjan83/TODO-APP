const Navbar = () => {
  return (
    <nav className='flex justify-around bg-indigo-900 text-white py-2 w-full'>
        <div className="logo">
            <span className="font-bold text-xl mx-8 cursor-pointer">iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-150'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-150'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
