import React from 'react';

const AddressInfo = ({ handleSubmit }) => {
	return (
		<>
			<form
				className='tab-pane fade container-sm bg-blue-transparent text-white form-direct'
				id='pills-addressInfo'
				role='tabpanel'
				aria-labelledby='pills-addressInfo-tab'
			>
				<div className='row justify-content-center p-3'>
					<h2>ADDRESS INFO</h2>
				</div>
				<div className='row position-relative'>
					<div className='form-group col-12 col-sm-6'>
						<label for='addr0'>Address</label>
						<input
							id='addr0'
							name='addr0'
							type='text'
							className='form-control'
							required
						/>
					</div>
					<div className='form-group col-12 col-sm-6'>
						<label for='city'>City</label>
						<input
							id='city'
							name='city'
							type='text'
							className='form-control'
							required
						/>
					</div>
					<div className='form-group col-12 col-sm-6'>
						<label for='addr1'>Line 1</label>
						<input
							id='addr1'
							name='addr1'
							type='text'
							className='form-control'
							required
						/>
					</div>
					<div className='form-group col-12 col-sm-6'>
						<label for='state'>State</label>
						<input
							id='state'
							name='state'
							type='text'
							className='form-control'
							required
						/>
					</div>
					<div className='form-group col-12 col-sm-6'>
						<label for='addr2'>Line 2 (optional)</label>
						<input
							id='addr2'
							name='addr2'
							type='text'
							className='form-control'
						/>
					</div>
					<div className='form-group col-12 col-sm-6'>
						<label for='userName-2'>Country</label>
						{/* <!-- <input id="country" name="country" type="text" className="form-control" required> --> */}
						<select
							id='country'
							name='country'
							className='form-control'
							required
						>
							<option value='Afganistan' className='form-control'>
								Afghanistan
							</option>
							<option value='Albania' className='form-control'>
								Albania
							</option>
							<option value='Algeria' className='form-control'>
								Algeria
							</option>
							<option value='American Samoa' className='form-control'>
								American Samoa
							</option>
							<option value='Andorra' className='form-control'>
								Andorra
							</option>
							<option value='Angola' className='form-control'>
								Angola
							</option>
							<option value='Anguilla' className='form-control'>
								Anguilla
							</option>
							<option value='Antigua & Barbuda' className='form-control'>
								Antigua & Barbuda
							</option>
							<option value='Argentina' className='form-control'>
								Argentina
							</option>
							<option value='Armenia' className='form-control'>
								Armenia
							</option>
							<option value='Aruba' className='form-control'>
								Aruba
							</option>
							<option value='Australia' className='form-control'>
								Australia
							</option>
							<option value='Austria' className='form-control'>
								Austria
							</option>
							<option value='Azerbaijan' className='form-control'>
								Azerbaijan
							</option>
							<option value='Bahamas' className='form-control'>
								Bahamas
							</option>
							<option value='Bahrain' className='form-control'>
								Bahrain
							</option>
							<option value='Bangladesh' className='form-control'>
								Bangladesh
							</option>
							<option value='Barbados' className='form-control'>
								Barbados
							</option>
							<option value='Belarus' className='form-control'>
								Belarus
							</option>
							<option value='Belgium' className='form-control'>
								Belgium
							</option>
							<option value='Belize' className='form-control'>
								Belize
							</option>
							<option value='Benin' className='form-control'>
								Benin
							</option>
							<option value='Bermuda' className='form-control'>
								Bermuda
							</option>
							<option value='Bhutan' className='form-control'>
								Bhutan
							</option>
							<option value='Bolivia' className='form-control'>
								Bolivia
							</option>
							<option value='Bonaire' className='form-control'>
								Bonaire
							</option>
							<option value='Bosnia & Herzegovina' className='form-control'>
								Bosnia & Herzegovina
							</option>
							<option value='Botswana' className='form-control'>
								Botswana
							</option>
							<option value='Brazil' className='form-control'>
								Brazil
							</option>
							<option value='British Indian Ocean Ter' className='form-control'>
								British Indian Ocean Ter
							</option>
							<option value='Brunei' className='form-control'>
								Brunei
							</option>
							<option value='Bulgaria' className='form-control'>
								Bulgaria
							</option>
							<option value='Burkina Faso' className='form-control'>
								Burkina Faso
							</option>
							<option value='Burundi' className='form-control'>
								Burundi
							</option>
							<option value='Cambodia' className='form-control'>
								Cambodia
							</option>
							<option value='Cameroon' className='form-control'>
								Cameroon
							</option>
							<option value='Canada' className='form-control'>
								Canada
							</option>
							<option value='Canary Islands' className='form-control'>
								Canary Islands
							</option>
							<option value='Cape Verde' className='form-control'>
								Cape Verde
							</option>
							<option value='Cayman Islands' className='form-control'>
								Cayman Islands
							</option>
							<option value='Central African Republic' className='form-control'>
								Central African Republic
							</option>
							<option value='Chad' className='form-control'>
								Chad
							</option>
							<option value='Channel Islands' className='form-control'>
								Channel Islands
							</option>
							<option value='Chile' className='form-control'>
								Chile
							</option>
							<option value='China' className='form-control'>
								China
							</option>
							<option value='Christmas Island' className='form-control'>
								Christmas Island
							</option>
							<option value='Cocos Island' className='form-control'>
								Cocos Island
							</option>
							<option value='Colombia' className='form-control'>
								Colombia
							</option>
							<option value='Comoros' className='form-control'>
								Comoros
							</option>
							<option value='Congo' className='form-control'>
								Congo
							</option>
							<option value='Cook Islands' className='form-control'>
								Cook Islands
							</option>
							<option value='Costa Rica' className='form-control'>
								Costa Rica
							</option>
							<option value='Cote DIvoire' className='form-control'>
								Cote DIvoire
							</option>
							<option value='Croatia' className='form-control'>
								Croatia
							</option>
							<option value='Cuba' className='form-control'>
								Cuba
							</option>
							<option value='Curaco' className='form-control'>
								Curacao
							</option>
							<option value='Cyprus' className='form-control'>
								Cyprus
							</option>
							<option value='Czech Republic' className='form-control'>
								Czech Republic
							</option>
							<option value='Denmark' className='form-control'>
								Denmark
							</option>
							<option value='Djibouti' className='form-control'>
								Djibouti
							</option>
							<option value='Dominica' className='form-control'>
								Dominica
							</option>
							<option value='Dominican Republic' className='form-control'>
								Dominican Republic
							</option>
							<option value='East Timor' className='form-control'>
								East Timor
							</option>
							<option value='Ecuador' className='form-control'>
								Ecuador
							</option>
							<option value='Egypt' className='form-control'>
								Egypt
							</option>
							<option value='El Salvador' className='form-control'>
								El Salvador
							</option>
							<option value='Equatorial Guinea' className='form-control'>
								Equatorial Guinea
							</option>
							<option value='Eritrea' className='form-control'>
								Eritrea
							</option>
							<option value='Estonia' className='form-control'>
								Estonia
							</option>
							<option value='Ethiopia' className='form-control'>
								Ethiopia
							</option>
							<option value='Falkland Islands' className='form-control'>
								Falkland Islands
							</option>
							<option value='Faroe Islands' className='form-control'>
								Faroe Islands
							</option>
							<option value='Fiji' className='form-control'>
								Fiji
							</option>
							<option value='Finland' className='form-control'>
								Finland
							</option>
							<option value='France' className='form-control'>
								France
							</option>
							<option value='French Guiana' className='form-control'>
								French Guiana
							</option>
							<option value='French Polynesia' className='form-control'>
								French Polynesia
							</option>
							<option value='French Southern Ter' className='form-control'>
								French Southern Ter
							</option>
							<option value='Gabon' className='form-control'>
								Gabon
							</option>
							<option value='Gambia' className='form-control'>
								Gambia
							</option>
							<option value='Georgia' className='form-control'>
								Georgia
							</option>
							<option value='Germany' className='form-control'>
								Germany
							</option>
							<option value='Ghana' className='form-control'>
								Ghana
							</option>
							<option value='Gibraltar' className='form-control'>
								Gibraltar
							</option>
							<option value='Great Britain' className='form-control'>
								Great Britain
							</option>
							<option value='Greece' className='form-control'>
								Greece
							</option>
							<option value='Greenland' className='form-control'>
								Greenland
							</option>
							<option value='Grenada' className='form-control'>
								Grenada
							</option>
							<option value='Guadeloupe' className='form-control'>
								Guadeloupe
							</option>
							<option value='Guam' className='form-control'>
								Guam
							</option>
							<option value='Guatemala' className='form-control'>
								Guatemala
							</option>
							<option value='Guinea' className='form-control'>
								Guinea
							</option>
							<option value='Guyana' className='form-control'>
								Guyana
							</option>
							<option value='Haiti' className='form-control'>
								Haiti
							</option>
							<option value='Hawaii' className='form-control'>
								Hawaii
							</option>
							<option value='Honduras' className='form-control'>
								Honduras
							</option>
							<option value='Hong Kong' className='form-control'>
								Hong Kong
							</option>
							<option value='Hungary' className='form-control'>
								Hungary
							</option>
							<option value='Iceland' className='form-control'>
								Iceland
							</option>
							<option value='Indonesia' className='form-control'>
								Indonesia
							</option>
							<option value='India' className='form-control'>
								India
							</option>
							<option value='Iran' className='form-control'>
								Iran
							</option>
							<option value='Iraq' className='form-control'>
								Iraq
							</option>
							<option value='Ireland' className='form-control'>
								Ireland
							</option>
							<option value='Isle of Man' className='form-control'>
								Isle of Man
							</option>
							<option value='Israel' className='form-control'>
								Israel
							</option>
							<option value='Italy' className='form-control'>
								Italy
							</option>
							<option value='Jamaica' className='form-control'>
								Jamaica
							</option>
							<option value='Japan' className='form-control'>
								Japan
							</option>
							<option value='Jordan' className='form-control'>
								Jordan
							</option>
							<option value='Kazakhstan' className='form-control'>
								Kazakhstan
							</option>
							<option value='Kenya' className='form-control'>
								Kenya
							</option>
							<option value='Kiribati' className='form-control'>
								Kiribati
							</option>
							<option value='Korea North' className='form-control'>
								Korea North
							</option>
							<option value='Korea Sout' className='form-control'>
								Korea South
							</option>
							<option value='Kuwait' className='form-control'>
								Kuwait
							</option>
							<option value='Kyrgyzstan' className='form-control'>
								Kyrgyzstan
							</option>
							<option value='Laos' className='form-control'>
								Laos
							</option>
							<option value='Latvia' className='form-control'>
								Latvia
							</option>
							<option value='Lebanon' className='form-control'>
								Lebanon
							</option>
							<option value='Lesotho' className='form-control'>
								Lesotho
							</option>
							<option value='Liberia' className='form-control'>
								Liberia
							</option>
							<option value='Libya' className='form-control'>
								Libya
							</option>
							<option value='Liechtenstein' className='form-control'>
								Liechtenstein
							</option>
							<option value='Lithuania' className='form-control'>
								Lithuania
							</option>
							<option value='Luxembourg' className='form-control'>
								Luxembourg
							</option>
							<option value='Macau' className='form-control'>
								Macau
							</option>
							<option value='Macedonia' className='form-control'>
								Macedonia
							</option>
							<option value='Madagascar' className='form-control'>
								Madagascar
							</option>
							<option value='Malaysia' className='form-control'>
								Malaysia
							</option>
							<option value='Malawi' className='form-control'>
								Malawi
							</option>
							<option value='Maldives' className='form-control'>
								Maldives
							</option>
							<option value='Mali' className='form-control'>
								Mali
							</option>
							<option value='Malta' className='form-control'>
								Malta
							</option>
							<option value='Marshall Islands' className='form-control'>
								Marshall Islands
							</option>
							<option value='Martinique' className='form-control'>
								Martinique
							</option>
							<option value='Mauritania' className='form-control'>
								Mauritania
							</option>
							<option value='Mauritius' className='form-control'>
								Mauritius
							</option>
							<option value='Mayotte' className='form-control'>
								Mayotte
							</option>
							<option value='Mexico' className='form-control'>
								Mexico
							</option>
							<option value='Midway Islands' className='form-control'>
								Midway Islands
							</option>
							<option value='Moldova' className='form-control'>
								Moldova
							</option>
							<option value='Monaco' className='form-control'>
								Monaco
							</option>
							<option value='Mongolia' className='form-control'>
								Mongolia
							</option>
							<option value='Montserrat' className='form-control'>
								Montserrat
							</option>
							<option value='Morocco' className='form-control'>
								Morocco
							</option>
							<option value='Mozambique' className='form-control'>
								Mozambique
							</option>
							<option value='Myanmar' className='form-control'>
								Myanmar
							</option>
							<option value='Nambia' className='form-control'>
								Nambia
							</option>
							<option value='Nauru' className='form-control'>
								Nauru
							</option>
							<option value='Nepal' className='form-control'>
								Nepal
							</option>
							<option value='Netherland Antilles' className='form-control'>
								Netherland Antilles
							</option>
							<option value='Netherlands' className='form-control'>
								Netherlands (Holland, Europe)
							</option>
							<option value='Nevis' className='form-control'>
								Nevis
							</option>
							<option value='New Caledonia' className='form-control'>
								New Caledonia
							</option>
							<option value='New Zealand' className='form-control'>
								New Zealand
							</option>
							<option value='Nicaragua' className='form-control'>
								Nicaragua
							</option>
							<option value='Niger' className='form-control'>
								Niger
							</option>
							<option value='Nigeria' className='form-control'>
								Nigeria
							</option>
							<option value='Niue' className='form-control'>
								Niue
							</option>
							<option value='Norfolk Island' className='form-control'>
								Norfolk Island
							</option>
							<option value='Norway' className='form-control'>
								Norway
							</option>
							<option value='Oman' className='form-control'>
								Oman
							</option>
							<option value='Pakistan' className='form-control'>
								Pakistan
							</option>
							<option value='Palau Island' className='form-control'>
								Palau Island
							</option>
							<option value='Palestine' className='form-control'>
								Palestine
							</option>
							<option value='Panama' className='form-control'>
								Panama
							</option>
							<option value='Papua New Guinea' className='form-control'>
								Papua New Guinea
							</option>
							<option value='Paraguay' className='form-control'>
								Paraguay
							</option>
							<option value='Peru' className='form-control'>
								Peru
							</option>
							<option value='Phillipines' className='form-control'>
								Philippines
							</option>
							<option value='Pitcairn Island' className='form-control'>
								Pitcairn Island
							</option>
							<option value='Poland' className='form-control'>
								Poland
							</option>
							<option value='Portugal' className='form-control'>
								Portugal
							</option>
							<option value='Puerto Rico' className='form-control'>
								Puerto Rico
							</option>
							<option value='Qatar' className='form-control'>
								Qatar
							</option>
							<option value='Republic of Montenegro' className='form-control'>
								Republic of Montenegro
							</option>
							<option value='Republic of Serbia' className='form-control'>
								Republic of Serbia
							</option>
							<option value='Reunion' className='form-control'>
								Reunion
							</option>
							<option value='Romania' className='form-control'>
								Romania
							</option>
							<option value='Russia' className='form-control'>
								Russia
							</option>
							<option value='Rwanda' className='form-control'>
								Rwanda
							</option>
							<option value='St Barthelemy' className='form-control'>
								St Barthelemy
							</option>
							<option value='St Eustatius' className='form-control'>
								St Eustatius
							</option>
							<option value='St Helena' className='form-control'>
								St Helena
							</option>
							<option value='St Kitts-Nevis' className='form-control'>
								St Kitts-Nevis
							</option>
							<option value='St Lucia' className='form-control'>
								St Lucia
							</option>
							<option value='St Maarten' className='form-control'>
								St Maarten
							</option>
							<option value='St Pierre & Miquelon' className='form-control'>
								St Pierre & Miquelon
							</option>
							<option value='St Vincent & Grenadines' className='form-control'>
								St Vincent & Grenadines
							</option>
							<option value='Saipan' className='form-control'>
								Saipan
							</option>
							<option value='Samoa' className='form-control'>
								Samoa
							</option>
							<option value='Samoa American' className='form-control'>
								Samoa American
							</option>
							<option value='San Marino' className='form-control'>
								San Marino
							</option>
							<option value='Sao Tome & Principe' className='form-control'>
								Sao Tome & Principe
							</option>
							<option value='Saudi Arabia' className='form-control'>
								Saudi Arabia
							</option>
							<option value='Senegal' className='form-control'>
								Senegal
							</option>
							<option value='Seychelles' className='form-control'>
								Seychelles
							</option>
							<option value='Sierra Leone' className='form-control'>
								Sierra Leone
							</option>
							<option value='Singapore' className='form-control'>
								Singapore
							</option>
							<option value='Slovakia' className='form-control'>
								Slovakia
							</option>
							<option value='Slovenia' className='form-control'>
								Slovenia
							</option>
							<option value='Solomon Islands' className='form-control'>
								Solomon Islands
							</option>
							<option value='Somalia' className='form-control'>
								Somalia
							</option>
							<option value='South Africa' className='form-control'>
								South Africa
							</option>
							<option value='Spain' className='form-control'>
								Spain
							</option>
							<option value='Sri Lanka' className='form-control'>
								Sri Lanka
							</option>
							<option value='Sudan' className='form-control'>
								Sudan
							</option>
							<option value='Suriname' className='form-control'>
								Suriname
							</option>
							<option value='Swaziland' className='form-control'>
								Swaziland
							</option>
							<option value='Sweden' className='form-control'>
								Sweden
							</option>
							<option value='Switzerland' className='form-control'>
								Switzerland
							</option>
							<option value='Syria' className='form-control'>
								Syria
							</option>
							<option value='Tahiti' className='form-control'>
								Tahiti
							</option>
							<option value='Taiwan' className='form-control'>
								Taiwan
							</option>
							<option value='Tajikistan' className='form-control'>
								Tajikistan
							</option>
							<option value='Tanzania' className='form-control'>
								Tanzania
							</option>
							<option value='Thailand' className='form-control'>
								Thailand
							</option>
							<option value='Togo' className='form-control'>
								Togo
							</option>
							<option value='Tokelau' className='form-control'>
								Tokelau
							</option>
							<option value='Tonga' className='form-control'>
								Tonga
							</option>
							<option value='Trinidad & Tobago' className='form-control'>
								Trinidad & Tobago
							</option>
							<option value='Tunisia' className='form-control'>
								Tunisia
							</option>
							<option value='Turkey' className='form-control'>
								Turkey
							</option>
							<option value='Turkmenistan' className='form-control'>
								Turkmenistan
							</option>
							<option value='Turks & Caicos Is' className='form-control'>
								Turks & Caicos Is
							</option>
							<option value='Tuvalu' className='form-control'>
								Tuvalu
							</option>
							<option value='Uganda' className='form-control'>
								Uganda
							</option>
							<option value='United Kingdom' className='form-control'>
								United Kingdom
							</option>
							<option value='Ukraine' className='form-control'>
								Ukraine
							</option>
							<option value='United Arab Erimates' className='form-control'>
								United Arab Emirates
							</option>
							<option value='United States of America' className='form-control'>
								United States of America
							</option>
							<option value='Uraguay' className='form-control'>
								Uruguay
							</option>
							<option value='Uzbekistan' className='form-control'>
								Uzbekistan
							</option>
							<option value='Vanuatu' className='form-control'>
								Vanuatu
							</option>
							<option value='Vatican City State' className='form-control'>
								Vatican City State
							</option>
							<option value='Venezuela' className='form-control'>
								Venezuela
							</option>
							<option value='Vietnam' className='form-control'>
								Vietnam
							</option>
							<option value='Virgin Islands (Brit)' className='form-control'>
								Virgin Islands (Brit)
							</option>
							<option value='Virgin Islands (USA)' className='form-control'>
								Virgin Islands (USA)
							</option>
							<option value='Wake Island' className='form-control'>
								Wake Island
							</option>
							<option value='Wallis & Futana Is' className='form-control'>
								Wallis & Futana Is
							</option>
							<option value='Yemen' className='form-control'>
								Yemen
							</option>
							<option value='Zaire' className='form-control'>
								Zaire
							</option>
							<option value='Zambia' className='form-control'>
								Zambia
							</option>
							<option value='Zimbabwe' className='form-control'>
								Zimbabwe
							</option>
						</select>
					</div>
					<div className='form-group col-12 col-sm-6'>
						<label for='landmark'>Landmark (optional)</label>
						<input
							id='landmark'
							name='landmark'
							type='text'
							className='form-control'
						/>
					</div>
				</div>
				<div className='row mt-3 text-center justify-content-end'>
					<div className='col-12 col-sm-3 text-dark'>
						<button
							onClick={handleSubmit}
							type='submit'
							className='w-100 h-100 py-2 px-3 primary-btn d-flex justify-content-center align-items-center'
						>
							<span>Next</span>
							<i className='fa fa-arrow-right ml-1'></i>
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default AddressInfo;
