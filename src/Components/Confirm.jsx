import React from 'react';

const Confirm = () => {
	return (
		<>
			<form
				className='tab-pane fade container-sm bg-blue-transparent text-white form-direct'
				id='pills-confirmForm'
				role='tabpanel'
				aria-labelledby='pills-confirmForm-tab'
			>
				<div className='row justify-content-center p-3'>
					<h2>CONFIRM SUBMIT?</h2>
				</div>
				<div className='row position-relative image-head'>
					<div className='form-check col-12'>
						<input
							id='confirmsubmit'
							name='ConfirmSubmit'
							type='checkbox'
							className='form-check-input'
							required
						/>
						<label className='form-check-label' for='confirmsubmit'>
							Check the box if all the details you have entered are your own
							genuine details and you want to proceed.
						</label>
					</div>
				</div>
				<div className='row mt-3 text-center justify-content-end'>
					<div className='col-12 col-sm-3 text-dark'>
						<button
							type='submit'
							id='confirmSubmitButton'
							className='w-100 h-100 py-2 px-3 primary-btn d-flex justify-content-center align-items-center'
							disabled
						>
							<span>Confirm</span>
							<i className='fa fa-arrow-right ml-1'></i>
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default Confirm;
