import React, { useEffect } from 'react';
import PersonalInfo from './Components/PersonalInfo';
import AddressInfo from './Components/AddressInfo';
import EducationInfo from './Components/EducationInfo';
import PassportInfo from './Components/PassportInfo';
import Confirm from './Components/Confirm';
import Tabs from './Components/Tabs';
import './App.css';
import './Content/css/font-awesome.min.css';
import './Content/fonts/FontAwesome/fontawesome-webfont.ttf';
import './Content/fonts/FontAwesome/fontawesome-webfont.eot';
import './Content/css/bootstrap-datepicker.min.css';
import './Content/css/bootstrap.min.css';

import './Content/css/datepicker.css';
import './Content/css/main.css';

const App = () => {
	useEffect(() => {
		var schoolData = [];
		var i;

		//prevents form submit and calls for next tab

		//change backgroun image in click
		document.querySelectorAll('.nav .nav-link').forEach((item) => {
			item.addEventListener('click', function (e) {
				var tabID = e.target.getAttribute('aria-controls');
				var bgImageName = tabID.split('pills-')[1];
				var body = document.getElementsByTagName('body')[0];
				body.style.cssText =
					'background-image : url(../Content/img/bg_' + bgImageName + '.png);';
			});
		});

		const checkbox = document.getElementById('confirmsubmit');

		checkbox.addEventListener('change', function (event) {
			if (event.currentTarget.checked) {
				document
					.getElementById('confirmSubmitButton')
					.removeAttribute('disabled');
			} else {
				document.getElementById('confirmSubmitButton').disabled = true;
			}
		});
	}, []);

	return (
		<div className='section-card'>
			<div className='tab-content' id='pills-navigation-tabContent'>
				<PersonalInfo />

				<AddressInfo />
				<EducationInfo />
				<PassportInfo />
				<Confirm />
			</div>
			<Tabs />
		</div>
	);
};

export default App;
