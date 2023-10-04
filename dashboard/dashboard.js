// Initialize the References

window.addEventListener('load', () =>{ 
	const form = document.getElementById('add-new-shift-input');
	const input = document.getElementById('new-shift-input');
	const myShiftsBtn = document.getElementById('myShifts-button');
	const list_el = document.getElementById('shifts');
	const logout = document.getElementById('logout');
	const shiftEdit = document.getElementById('shift-edit');
	const editProfileBtn = document.getElementById('edit-profile-button');
	const editProfileForm = document.getElementById('edit-profile-form');
	const updateProfileBtn = document.getElementById('update-profile-button');
	const editUserName = document.getElementById('username');
	const editFirstName = document.getElementById('fname');
	const editLastName = document.getElementById('lname');
	const editAge = document.getElementById('age');
	const editEmail = document.getElementById('email');
	const editPassword = document.getElementById('password');
	const editConfirmPassword = document.getElementById('password2nd');
	let userlogged=JSON.parse(localStorage.getItem("loggedIn"));
if(userlogged)
{

	let data = JSON.parse(localStorage.getItem(userlogged.username));

		if (data) {
			
				let shifts = data.shift;
      let user_text=document.querySelector("#greetings-user");
			user_text.value=data.username;
				for ( let shift of shifts) {
				createShiftSlug(shift.shiftName, false);

        shift.comments = document.querySelector('#comments_'+shift.shiftName).value;
				let ShiftSlug2 = document.querySelector('#slug_'+shift.shiftName);
				console.log(ShiftSlug2.option);
				ShiftSlug2.value=shift.shiftSlug;

				document.getElementById('start_shift_'+shift.shiftName).lastChild.value = shift.startShift;
				}

				editUserName.value = data.username;
				editFirstName.value = data.firstName;
				editLastName.value = data.lastName;
				editAge.value = data.age;
				editEmail.value = data.email;
				editPassword.value = data.pasword;
				editConfirmPassword.value = data.editConfirmPassword;
			
		}
}

	logout.addEventListener('click', e => {
		window.location.href = 'login.html';
	});

	myShiftsBtn.addEventListener('click', (e) =>{
		shiftEdit.style.display = 'block';
		editProfileForm.style.display = 'none';
	});

	myShiftsBtn.addEventListener('dblclick', (e) =>{
		shiftEdit.style.display = 'none';
	});

	function createShiftSlug(shiftName1,saved) {
		const shift_el = document.createElement('div');

      shift_el.classList.add('shift');

			const shift_content_el = document.createElement('div');
			shift_content_el.classList.add('content');

			if (saved) {
			shift_content_el.setAttribute('saved','false');
			}
	
			shift_el.appendChild(shift_content_el);
	
			const shift_input_el = document.createElement('input');
			shift_input_el.classList.add('text');
			shift_input_el.type = 'text';
			shift_input_el.value = shiftName1;
			shift_input_el.setAttribute('id','name_'+shiftName1);
			shift_input_el.setAttribute('readonly', 'readonly');
	
			shift_content_el.appendChild(shift_input_el);
		
			//Configure Shift slug
			const shift_slug = document.createElement('select');
			shift_slug.classList.add('shift-slug');
			shift_slug.setAttribute('id','slug_'+shiftName1);
	
			shift_content_el.appendChild(shift_slug);
	
			const shift_slug_option_A = document.createElement('option');
			shift_slug_option_A.classList.add('shift-slug-option');
			shift_slug_option_A.innerHTML = 'shift A';
			
			const shift_slug_option_B = document.createElement('option');
			shift_slug_option_B.classList.add('shift-slug-option');
			shift_slug_option_B.innerHTML = 'shift B';
	
			const shift_slug_option_C = document.createElement('option');
			shift_slug_option_C.classList.add('shift-slug-option');
			shift_slug_option_C.innerHTML = 'shift C';
	
			const shift_slug_option_D = document.createElement('option');
			shift_slug_option_D.classList.add('shift-slug-option');
			shift_slug_option_D.innerHTML = 'shift D';
	
			const shift_slug_option_E = document.createElement('option');
			shift_slug_option_E.classList.add('shift-slug-option');
			shift_slug_option_E.innerHTML = 'shift E';
	
			shift_slug.appendChild(shift_slug_option_A);
			shift_slug.appendChild(shift_slug_option_B);
			shift_slug.appendChild(shift_slug_option_C);
			shift_slug.appendChild(shift_slug_option_D);
			shift_slug.appendChild(shift_slug_option_E);
			
			//Configure workplace

			const workplace = document.createElement('select');
			workplace.classList.add('workplace');
			workplace.setAttribute('id', 'workplace_'+shiftName1);
	
			shift_content_el.appendChild(workplace);
	
			const workplace_option_A = document.createElement('option');
			workplace_option_A.classList.add('workplace_option');
			workplace_option_A.innerHTML = 'workplace A';
	
			const workplace_option_B = document.createElement('option');
			workplace_option_B.classList.add('workplace_option');
			workplace_option_B.innerHTML = 'workplace B';
	
			const workplace_option_C = document.createElement('option');
			workplace_option_C.classList.add('workplace_option');
			workplace_option_C.innerHTML = 'workplace C';
	
			const workplace_option_D = document.createElement('option');
			workplace_option_D.classList.add('workplace_option');
			workplace_option_D.innerHTML = 'workplace D';
	
			const workplace_option_E = document.createElement('option');
			workplace_option_E.classList.add('workplace_option');
			workplace_option_E.innerHTML = 'workplace E';
	
			workplace.appendChild(workplace_option_A);
			workplace.appendChild(workplace_option_B);
			workplace.appendChild(workplace_option_C);
			workplace.appendChild(workplace_option_D);
			workplace.appendChild(workplace_option_E);
	
			// Configure start and end shifts

			const start_end_shift = document.createElement('div');
			start_end_shift.classList.add('start-end-shift');
	
			shift_content_el.appendChild(start_end_shift);
	
			const start_shift = document.createElement('div');
			start_shift.classList.add('start-shift');
			start_shift.setAttribute('id','start_shift_'+shiftName1);
	
			start_end_shift.appendChild(start_shift);
	
			const label_start_shift = document.createElement('label');
			label_start_shift.classList.add('label-shift');
	
			start_shift.appendChild(label_start_shift);
	
			const input_start_shift = document.createElement('input');
			input_start_shift.classList.add('input-shift');
			input_start_shift.type = 'datetime-local';
	
			start_shift.appendChild(input_start_shift);
	
			const end_shift = document.createElement('div');
			end_shift.classList.add('end-shift');
			end_shift.setAttribute('id','end_shift_'+shiftName1);
	
			start_end_shift.appendChild(end_shift);
	
			const label_end_shift = document.createElement('label');
			label_end_shift.classList.add('label-shift');
	
			end_shift.appendChild(label_end_shift);
	
			const input_end_shift = document.createElement('input');
			input_end_shift.classList.add('input-shift');
			input_end_shift.type = 'datetime-local';
	
			end_shift.appendChild(input_end_shift); 

			// Configure hourly wage and comments textareas
			
			const hourlyWage = document.createElement('textarea');
			hourlyWage.classList.add('hourly-wage');
			hourlyWage.placeholder = 'Hourly Wage ($)';
			hourlyWage.setAttribute('id','hourlyWage_'+shiftName1);
			shift_content_el.appendChild(hourlyWage);

			const comments = document.createElement('textarea');
			comments.classList.add('comments');
			comments.placeholder = 'Comments';
			comments.setAttribute('id','comments_'+shiftName1);
			shift_content_el.appendChild(comments);

			//Configure Edit and Delete Buttons

			const shift_actions_el = document.createElement('div');
			shift_actions_el.classList.add('actions');
			
			const shift_edit_el = document.createElement('button');
			shift_edit_el.classList.add('edit');
			shift_edit_el.innerText = 'Edit';
	
			const shift_delete_el = document.createElement('button');
			shift_delete_el.classList.add('delete');
			shift_delete_el.innerText = 'Delete';
	
			shift_actions_el.appendChild(shift_edit_el);
			shift_actions_el.appendChild(shift_delete_el);
	
			shift_content_el.appendChild(shift_actions_el);
	
			list_el.appendChild(shift_el);
	
			input.value = '';
	
			shift_edit_el.addEventListener('click', (e) => {
				if (shift_edit_el.innerText.toLowerCase() === "edit") {
					shift_edit_el.innerText = "Update";
					shift_input_el.removeAttribute("readonly");
					shift_input_el.focus();
				} else {
					shift_edit_el.innerText = "Edit";
					shift_input_el.setAttribute("readonly", "readonly");
				}
			});
	
			shift_delete_el.addEventListener('click', (e) => {
				list_el.removeChild(shift_el);
			});

			let returnValues = {

				shift_input_el: shift_input_el.value,
				shift_slug: shift_slug.value,
				workplace: workplace.value,
				start_shift: start_shift.value,
				end_shift: end_shift.value,
				hourlyWage: hourlyWage.value,
				commentsValue: comments.value
			}
			return returnValues;
};

  form.addEventListener('click', (e) => {
		e.preventDefault();
		const shift = input.value;

		if (shift === '') {
			alert('Please, fill the field');

		} else {
      let returnValues = createShiftSlug(shift,true);

			}
		});

      // Store shifts to localStorage

		const saveBtn = document.querySelector('#save');

		saveBtn.addEventListener('click', (e) => {
			e.preventDefault();
      let shiftName, shiftSlug, workplace, startShift, endShift, hourlyWage, comments;
			let contents = document.querySelectorAll('.content');
			
			for (let content of contents) {

				if (content.getAttribute('saved') == 'false') {
					let unique_name = '';
					let first_element = content.querySelector('input');
					let name = first_element.getAttribute('id');
					
          let arr_name = name.split('_');
				
					unique_name = arr_name[1];
					
					
					shiftName = first_element.value;
					
					shiftSlug = content.querySelector('#slug_'+String(unique_name)).value;
					workplace = content.querySelector('#workplace_'+unique_name).value;
					startShift = content.querySelector('#start_shift_'+unique_name).lastChild.value;
					endShift = content.querySelector('#end_shift_'+unique_name).lastChild.value;
					hourlyWage = content.querySelector('#hourlyWage_'+unique_name).value;
					comments = content.querySelector('#comments_'+unique_name).value;
					console.log(shiftSlug);
				}
			}

			totalWage();
      const ShiftName1 = shiftName;
			const shiftSlugValue = shiftSlug;
			const workplaceValue = workplace;
			const startShiftValue = startShift;
			const endShiftValue = endShift;
			const hourlyWageValue = hourlyWage;
			const commentsValue = comments;
			let loggedIn=JSON.parse(localStorage.getItem("loggedIn"));
			console.log(loggedIn);
			if(loggedIn)
			{
					let user_storage=JSON.parse(localStorage.getItem(loggedIn.username))
					if(user_storage)
					{
						let shifts=[];
						const myShift = {
							shiftName:'',
							shiftSlug:'',
							workplace:'',
							startShift:'',
							endShift:'',
							hourlyWage:'',
							comments:''
						}

						// Load data value in Obj
						myShift.shiftName = ShiftName1;
						myShift.shiftSlug = shiftSlugValue;
						myShift.workplace = workplaceValue;
						myShift.startShift = startShiftValue;
						myShift.endShift = endShiftValue;
						myShift.hourlyWage = hourlyWageValue;
						myShift.comments = commentsValue;

						shifts.push(myShift);
						user_storage.shift = shifts;

						localStorage.setItem(loggedIn.username, JSON.stringify(user_storage));
					}
					else
					{
						alert("User has not been found.This should not happen again!")
					}
			}
			else
			{
				alert("you are not logged in");
			}

		});

		

		//Edit Profile

		editProfileBtn.addEventListener('click', (e) => {
			editProfileForm.style.display = 'block';
			shiftEdit.style.display = 'none';
		})

		editProfileBtn.addEventListener('dblclick', (e) => {
			editProfileForm.style.display = 'none';
		})

		updateProfileBtn.addEventListener('click', (e) =>{
			e.preventDefault();
			checkInputs();
		});

// Set a function for a dropdown and for a value to set
		
    function setSelectedValue (selectObj, valueToSet) {
    for ( let i = 0; i < selectObj.option.length; i++) {
		if(selectObj.option[i].text == valueToSet) {
			selectObj.option[i].selected = true;
			return;
		}
	}
}
		function checkInputs(){
    
			const editUsernameValue = editUserName.value.trim();
			const editFirstnameValue = editFirstName.value.trim();
			const editLastnameValue = editLastName.value.trim();
			const editAgeValue = editAge.value.trim();
			const editEmailValue = editEmail.value.trim();
			const editPasswordValue = editPassword.value.trim();
			const editConfirmPasswordValue = editConfirmPassword.value.trim();
			
			let editArrayValidation = [];

			const editArrayValidationCheck = editArrayValidation.every(element => element === 'true');

			if(editArrayValidationCheck === 'true'){
				updateProfileBtn.addEventListener('click', () =>{
					console.log("aksjbdkjsabkjsab")
					const editUser = {
						username: editUsernameValue,
						firstName: editFirstnameValue,
						lastName: editLastnameValue,
						email: editEmailValue,
						age: editAgeValue,
						password: editPasswordValue,
						confirmPassword: editConfirmPasswordValue
					};

					const userlogged=JSON.parse(localStorage.getItem("loggedIn"));

			if(userlogged)
			{

				let data = JSON.parse(localStorage.getItem(userlogged.username));

					if (data) {
					data.username=editFirstnameValue;
					data.email = editEmailValue;
					data.firstName = editFirstnameValue;
					data.lastName = editLastnameValue;
					data.age = editAgeValue;
					data.password = editPasswordValue;
					data.confirmPassword = editConfirmPasswordValue;

					localStorage.setItem(userlogged.username,JSON.stringify(data));
					};
			};
			});
			};
		};

});

// Configure total wage tab

function totalWage(wage) {
	let arr = document.getElementsByClassName('hourly-wage');
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (parseInt(arr[i].value)) {
			sum += parseInt(arr[i].value);
		}
	}
	document.getElementById('total').value = sum;
}

// Configure Search tab

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (e) => {
	const value = e.target.value;

	shift.foreach(myShift => {
		const isVisible = myShift.shiftName.includes(value) || myShift.startShift.includes(value) || myShift.endShift.includes(value);
		myShift.shiftName.classList('hide', isVisible);
	});

});


