import React from 'react';

const Tabs = () => {
	return (
		<>
			<div className='nav-pills-container'>
				<ul
					className='nav nav-pills bg-blue-transparent'
					id='pills-navigation'
					role='tablist'
				>
					<li className='nav-item active col px-0' role='presentation'>
						<a
							className='nav-link d-flex justify-content-center active'
							id='pills-personalInfo-tab'
							data-toggle='pill'
							href='#pills-personalInfo'
							role='tab'
							aria-controls='pills-personalInfo'
							aria-selected='true'
						>
							Personal Info
						</a>
					</li>
					<li className='nav-item col px-0' role='presentation'>
						<a
							className='nav-link d-flex justify-content-center disabled'
							id='pills-addressInfo-tab'
							data-toggle='pill'
							href='#pills-addressInfo'
							role='tab'
							aria-controls='pills-addressInfo'
							aria-selected='true'
						>
							Address Info
						</a>
					</li>
					<li className='nav-item col px-0' role='presentation'>
						<a
							className='nav-link d-flex justify-content-center disabled'
							id='pills-educationInfo-tab'
							data-toggle='pill'
							href='#pills-educationInfo'
							role='tab'
							aria-controls='pills-educationInfo'
							aria-selected='true'
						>
							Education Info
						</a>
					</li>
					<li className='nav-item col px-0' role='presentation'>
						<a
							className='nav-link d-flex justify-content-center disabled'
							id='pills-passportInfo-tab'
							data-toggle='pill'
							href='#pills-passportInfo'
							role='tab'
							aria-controls='pills-passportInfo'
							aria-selected='true'
						>
							Passport Info
						</a>
					</li>
					<li className='nav-item col px-0' role='presentation'>
						<a
							className='nav-link d-flex justify-content-center disabled'
							id='pills-confirmForm-tab'
							data-toggle='pill'
							href='#pills-confirmForm'
							role='tab'
							aria-controls='pills-confirmForm'
							aria-selected='true'
						>
							Confirm
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Tabs;
