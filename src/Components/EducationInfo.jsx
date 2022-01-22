import React, { useEffect } from 'react';

const EducationInfo = () => {
	useEffect(() => {
		var schoolData = [];
		var i;
		var schoolCount = 0;
		var node;
		document.querySelectorAll('form.form-direct').forEach(function (item) {
			item.addEventListener('submit', function (e) {
				e.preventDefault();
				goToNextTab();
			});
		});
		document
			.getElementById('schoolproceed')
			.addEventListener('click', function (e) {
				goToNextTab();
			});
		// ADD SCHOOL
		document
			.getElementById('btnaddschool')
			.addEventListener('click', function (e) {
				document.getElementById('btnsaveschool').setAttribute('event', 'add');
				document.getElementById('btnsaveschool').setAttribute('schoolno', ' ');

				document.getElementById('formaddschool').reset();
				document.getElementById('formaddschool').classList.remove('d-none');
			});
		function formData2JSON(formBind) {
			var formData = new FormData(formBind);
			var object = {};
			formData.forEach((value, key) => {
				if (!Reflect.has(object, key)) {
					object[key] = value;
					return;
				}
				if (!Array.isArray(object[key])) {
					object[key] = [object[key]];
				}
				object[key].push(value);
			});
			var json = JSON.stringify(object);
			return json;
		}

		function goToNextTab() {
			var activeTab = document.querySelector('.nav .nav-link.active');
			var nextTab;

			// CHECK IF NEXT TAB EXISTS
			if (activeTab.parentNode.nextElementSibling) {
				nextTab =
					activeTab.parentNode.nextElementSibling.querySelector('.nav-link');
				nextTab.classList.remove('disabled');
			} else {
				nextTab = null;
			}

			// NEXT TAB ACTION
			if (nextTab != null && nextTab.onclick) {
				nextTab.onclick();
			} else if (nextTab != null && nextTab.click) {
				nextTab.click();
			} else {
				var form1 = formData2JSON(
					document.getElementById('pills-personalInfo'),
				);
				var form2 = formData2JSON(document.getElementById('pills-addressInfo'));
				var form3 = {};
				for (i = 0; i < schoolData.length; i++) {
					var key = 'School ' + (i + 1);
					form3[key] = schoolData[i];
				}
				var form4 = formData2JSON(
					document.getElementById('pills-passportInfo'),
				);
				var object = {
					Personal_Info: JSON.parse(form1),
					Address_Info: JSON.parse(form2),
					Education_Info: form3,
					Passport_Info: JSON.parse(form4),
				};
				let options = {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
					},
					body: JSON.stringify(object),
				};
				fetch(
					'https://616la8v4l3.execute-api.us-east-1.amazonaws.com/dev/student-data-docs/testing.json',
					options,
				)
					.then(function (res) {
						return res.json();
					})
					.then(function (d) {
						console.log(d);
					});
			}
		}
		function schoolRowRefresh() {
			// Delete Rows from DOM if rows are not empty
			if (document.querySelector('.contentschoolrow') != null) {
				document.querySelectorAll('.contentschoolrow').forEach(function (e) {
					e.remove();
				});
			}

			// Check if there is no Data
			if (schoolData.length == 0) {
				document.getElementById('schoolproceed').disabled = true;
				document.getElementById('maxschoolNotifier').classList.add('d-none');
				document.getElementById('btnaddschool').removeAttribute('disabled');
				// } else if (schoolData.length >= 4) {
				// 	document.getElementById('btnaddschool').disabled = true;
				// 	document.getElementById('maxschoolNotifier').classList.remove('d-none');
				// 	document.getElementById('schoolproceed').removeAttribute('disabled');
			} else {
				document.getElementById('maxschoolNotifier').classList.add('d-none');
				document.getElementById('btnaddschool').removeAttribute('disabled');
				document.getElementById('schoolproceed').removeAttribute('disabled');
			}

			// Display data
			for (i = 0; i < schoolData.length; i++) {
				document
					.getElementById('contentaddschool')
					.insertAdjacentHTML(
						'beforebegin',
						"<div class='row py-2 rounded align-items-center mx-0 mt-2 contentschoolrow' schoolNo='" +
							i +
							"'><span class='col-3 col-md-2 pr-0'>School " +
							(i + 1) +
							"</span><h5 class='col-5 mb-0'>" +
							schoolData[i]['schoolname'] +
							"</h5><div class='col-4 col-md-5'><div class='row'><div class='col-6 pl-0'><button class='btn-warning rounded w-100 p-2 editschool'><i class='fa fa-edit'></i><span class='ml-2'>Edit</span></button></div><div class='col-6 pl-0'><button class='btn-danger rounded w-100 p-2 deleteschool'><i class='fa fa-trash'></i><span class='ml-2'>Delete</span></button></div></div></div></div>",
					);
			}
			// }
		}
		// EDIT SCHOOL
		document
			.getElementById('pills-educationInfo')
			.addEventListener('click', function (e) {
				if (
					e.target.classList.contains('editschool') ||
					e.target.closest('.editschool')
				) {
					document
						.getElementById('btnsaveschool')
						.setAttribute('event', 'edit');

					document.getElementById('formaddschool').reset();
					document.getElementById('btnaddschool').classList.add('d-none');
					var row = e.target.closest('.contentschoolrow');
					row.classList.add('editable');
					row.classList.remove('unable');

					node = row.parentNode.firstChild;
					while (node) {
						if (node !== row && node.nodeType === Node.ELEMENT_NODE)
							node.classList.add('unable');
						node = node.nextElementSibling || node.nextSibling;
					}

					var schoolNo = row.getAttribute('schoolNo');
					document
						.getElementById('btnsaveschool')
						.setAttribute('schoolno', schoolNo);
					var editData = schoolData[schoolNo];
					for (const key in editData) {
						document.querySelector("input[name='" + key + "']").value =
							editData[key];
					}
					document.getElementById('formaddschool').classList.remove('d-none');
				} else if (
					e.target.classList.contains('deleteschool') ||
					e.target.closest('.deleteschool')
				) {
					var schoolNo = e.target
						.closest('.contentschoolrow')
						.getAttribute('schoolNo');
					schoolData.splice(schoolNo, 1);
					document.getElementById('formaddschool').classList.add('d-none');
					schoolRowRefresh();
				}
			});

		// SAVE SCHOOL
		document
			.getElementById('formaddschool')
			.addEventListener('submit', function (e) {
				e.preventDefault();
				var formBind = document.getElementById('formaddschool');
				var formData = new FormData(formBind);
				var formJSON = formData2JSON(formBind);
				formJSON = JSON.parse(formJSON);
				var eventCheck = document
					.getElementById('btnsaveschool')
					.getAttribute('event');
				if (eventCheck == 'add') {
					schoolCount++;
					var schoolVar = 'school' + schoolCount;
					schoolData.push(formJSON);
					// document.getElementById("contentaddschool").insertAdjacentHTML("beforebegin",
					// "<div class='row py-2 rounded align-items-center mx-0 mt-2 contentschoolrow' schoolNo='school"+ schoolCount +"'><h4 class='col-3 mb-0'>School " + schoolCount + "</h4><span class='col-5'>" + formData.get("schoolname") + "</span><div class='col-4'><div class='row'><div class='col-6'><button class='btn-warning rounded w-100 p-2 editschool'><i class='fa fa-edit mr-2'></i>Edit</button></div><div class='col-6'><button class='btn-danger rounded w-100 p-2 deleteschool'><i class='fa fa-trash mr-2'></i>Delete</button></div></div></div></div>"
					// );
					schoolRowRefresh();
				} else if (eventCheck == 'edit') {
					var schoolNo = document
						.getElementById('btnsaveschool')
						.getAttribute('schoolNo');
					schoolData[schoolNo] = formJSON;
					document.getElementById('btnaddschool').classList.remove('d-none');
					schoolRowRefresh();
				}

				this.classList.add('d-none');
			});
	}, []);

	return (
		<div
			className='tab-pane fade container-sm bg-blue-transparent text-white'
			id='pills-educationInfo'
			role='tabpanel'
			aria-labelledby='pills-educationInfo-tab'
		>
			<div className='row justify-content-center p-3'>
				<h2>EDUCATION INFO</h2>
			</div>
			<div id='contentaddschool'>
				<div className='row mt-3 text-center justify-content-center btnaddschoolgroup'>
					<div className='col-6 col-sm-auto text-dark'>
						<button
							type='button'
							id='btnaddschool'
							className='py-2 px-3 primary-btn'
							// onClick={educationForm}
						>
							<i className='fa fa-plus mr-1'></i>
							<span>Add School</span>
						</button>
						<p className='text-danger d-none' id='maxschoolNotifier'>
							Only a maximum of 4 schools can be entered.
						</p>
					</div>
				</div>
			</div>
			<form
				className='row position-relative mt-5 justify-content-center d-none'
				id='formaddschool'
			>
				<div className='form-group col-12 col-sm-6'>
					<label for='schoolname'>School Name</label>
					<input
						id='schoolname'
						name='schoolname'
						type='text'
						className='form-control'
						required
					/>
				</div>
				<div className='form-group col-12 col-sm-6'>
					<label for='schooladdress'>School Address</label>
					<input
						id='schooladdress'
						name='schooladdress'
						type='text'
						className='form-control'
						required
					/>
				</div>
				<div className='form-group col-12 col-sm-6'>
					<label for='yearofstudyfrom'>Year of Study - From</label>
					<input
						id='yearofstudyfrom'
						name='yearofstudyfrom'
						type='number'
						className='form-control'
						required
					/>
				</div>
				<div className='form-group col-12 col-sm-6'>
					<label for='yearofstudyto'>Year of Study - To</label>
					<input
						id='yearofstudyto'
						name='yearofstudyto'
						type='number'
						className='form-control'
						required
					/>
				</div>
				<div className='form-group col-12 col-sm-6'>
					<label for='certificateissuedate'>Certificate Issue Date</label>
					<input
						id='certificateissuedate'
						name='certificateissuedate'
						type='date'
						className='form-control'
						required
					/>
				</div>
				<div className='form-group col-12 col-sm-6'>
					<label for='certificatereceiveddate'>Certificate Received Date</label>
					<input
						id='certificatereceiveddate'
						name='certificatereceiveddate'
						type='date'
						className='form-control'
						required
					/>
				</div>
				<div className='col-6 col-sm-4'>
					<button
						type='submit'
						className='w-100 h-100 py-2 px-3 btn-success'
						id='btnsaveschool'
						event=''
						schoolno=''
						// onClick={saveSchool}
					>
						<i className='fa fa-check ml-1'></i>
						<span>Save School</span>
					</button>
				</div>
			</form>
			<div className='row mt-3 text-center justify-content-end'>
				<div className='col-6 col-sm-3 text-dark'>
					<button
						type='button'
						className='py-2 px-3 w-100 primary-btn d-flex justify-content-center align-items-center'
						id='schoolproceed'
						disabled
					>
						<span>Next</span>
						<i className='fa fa-arrow-right ml-1'></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default EducationInfo;
