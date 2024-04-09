import React from 'react'
// import './navbar.css'
const navbar = ({openCloseQR}) => {
  return (
    <div className="w-[90%] fixed bottom-0 rounded-full px-20 bg-zinc-700 mb-2 flex justify-center">
	<ul className='flex list-none gap-2 justify-center py-3 w-fit px-4'>
	<li className='navElem'>
		<a href="#">
			<i className="ai-home"></i>
			<span>Home</span>
		</a>
	</li>
	<li className='navElem'>
		<a onClick={openCloseQR} href="#">
			<i className="ai-home"></i>
			<span>Scanner</span>
		</a>
	</li>
	<li className='navElem'>
		<a href="#">
			<i className="ai-image"></i>
			<span>Tansaction</span>
		</a>
	</li>	
	<li className='navElem'>
		<a href="#">
			<i className="ai-file"></i>
			<span>Profile</span>
		</a>
	</li>
	
</ul>
</div>


  )
}

export default navbar