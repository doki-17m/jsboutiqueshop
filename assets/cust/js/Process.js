// process save data form
btnSave.click(function () {
	const formProp = document.getElementById('form-all').firstElementChild.id;
	const form = getForm(formProp);
	const formID = form[0]; // initial id form when input
	const formData = form[1]; // data form when input

	if (setSave === 'add')
		url = SITE_URL + CREATE;
	else
		url = SITE_URL + EDIT + ID;

	$.ajax({
		url: url,
		type: 'POST',
		data: formData + '&id=' + ID,
		dataType: 'JSON',
		success: function (result) {
			// console.log(result)
			resultForm(formID, result);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.info(errorThrown)
			alert(errorThrown)
		}
	});
});

$(document).on('click', '#close_form, #close_form1', function () {
	const formProp = document.getElementById('form-all').firstElementChild.id;
	if (formProp == 'form_product')
		setAction = 'close',
		deleteImage(imgSrc);

	closeModalForm(formProp);
});

// delete data table
function Destroy(id) {
	url = SITE_URL + DELETE + id;
	Swal.fire({
		title: 'Delete?',
		text: "Are you sure you wish to delete the selected data ? ",
		type: 'warning',
		showCancelButton: true,
		cancelButtonColor: '#d33',
		confirmButtonText: 'Ok',
		cancelButtonText: 'Close',
	}).then((data) => {
		if (data.value) //value is true
			$.post(url, function (result) {
				// console.info(result)
				reloadTable(LAST_URL)
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.info(errorThrown)
				reloadTable(LAST_URL)
			});
	});
}

// value checkbox active field in form
function ActiveValue() {
	var isActive;
	if (classActive.is(':checked'))
		isActive = active;
	else
		isActive = nonactive;
	return isActive;
}

// value checkbox sales field in form
function SalesValue() {
	var isSales;
	if (classSalesrep.is(':checked'))
		isSales = active;
	else
		isSales = nonactive;
	return isSales;
}

// value checkbox obral field in form
function ObralValue() {
	var isObral;
	if (classObral.is(':checked'))
		isObral = active;
	else
		isObral = nonactive;
	return isObral;
}

// do open the modal form
function openModalForm() {
	return modalForm.modal({
		backdrop: 'static',
		keyboard: false
	});
}

// do open the modal list
function openModalList() {
	return modalList.modal({
		backdrop: 'static',
		keyboard: false
	});
}

// add class scrollable in modal
function Scrollmodal() {
	return modalDialog.addClass('modal-dialog-scrollable');
}

// add class size modal large
function Largemodal() {
	return modalDialog.addClass('modal-lg');
}

// add class size modal small
function Smallmodal() {
	return modalDialog.addClass('modal-sm');
}

function Removemodal() {
	modalDialog.removeClass('modal-dialog-scrollable');
	modalDialog.removeClass('modal-lg');
	modalDialog.removeClass('modal-sm');
}

// check field data form
function getForm(form) {
	var arrForm;

	if (form == 'form_product')
		arrForm = [
			form,
			proForm.serialize() +
			'&isactive=' + ActiveValue() +
			'&pro_catg=' + $('#pro_catg option:selected').val() +
			'&pro_uom=' + $('#pro_uom option:selected').val() +
			'&pro_img=' + imgSrc +
			'&isobral=' + ObralValue()
		];
	else if (form == 'form_so')
		arrForm = [
			form,
			soForm.serialize()
		];
	else if (form == 'form_category')
		arrForm = [
			form,
			catForm.serialize() +
			'&isactive=' + ActiveValue()
		];
	else if (form == 'form_job')
		arrForm = [
			form,
			jobForm.serialize() +
			'&isactive=' + ActiveValue()
		];
	else if (form == 'form_greeting')
		arrForm = [
			form,
			greForm.serialize() +
			'&isactive=' + ActiveValue()
		];
	else if (form == 'form_uom')
		arrForm = [
			form,
			uomForm.serialize() +
			'&isactive=' + ActiveValue()
		];
	else if (form == 'form_customer')
		arrForm = [
			form,
			cusForm.serialize() +
			'&isactive=' + ActiveValue() +
			'&cus_greeting=' + $('#cus_greeting option:selected').val() +
			'&cus_province=' + $('#cus_province option:selected').val() +
			'&cus_city=' + $('#cus_city option:selected').val() +
			'&cus_sales=' + $('#cus_sales option:selected').val()
		];
	else if (form == 'form_supplier')
		arrForm = [
			form,
			supForm.serialize() +
			'&isactive=' + ActiveValue() +
			'&sup_greeting=' + $('#sup_greeting option:selected').val()
		];
	else if (form == 'form_province')
		arrForm = [
			form,
			provForm.serialize() +
			'&isactive=' + ActiveValue()
		];
	else if (form == 'form_city')
		arrForm = [
			form,
			cityForm.serialize() +
			'&isactive=' + ActiveValue()
		];
	else if (form == 'form_courier')
		arrForm = [
			form,
			couForm.serialize() +
			'&isactive=' + ActiveValue()
		];
	else if (form == 'form_account')
		arrForm = [
			form,
			accForm.serialize() +
			'&isactive=' + ActiveValue()
		];
	else if (form == 'form_user')
		arrForm = [
			form,
			usrForm.serialize() +
			'&isactive=' + ActiveValue() +
			'&issalesrep=' + SalesValue() +
			'&usr_greeting=' + $('#usr_greeting option:selected').val() +
			'&usr_job=' + $('#usr_job option:selected').val()
		];
	else
		arrForm = 'Form Not Found';

	return arrForm;
}

// result after insert or update data form
function resultForm(form, result) {

	if (result.success)
		Toast.fire({
			type: 'success',
			title: result.message
		}),
		// console.log(Toast),
		reloadTable(LAST_URL), //call refresh table based on last url
		errorClear(form),
		closeModalForm(form);

	if (result.error)
		if (form == 'form_product')
			errFormPro(result);
		else if (form == 'form_so')
		errFormSo(result);
	else if (form == 'form_category')
		errFormCat(result);
	else if (form == 'form_job')
		errFormJob(result);
	else if (form == 'form_greeting')
		errFormGre(result);
	else if (form == 'form_uom')
		errFormUom(result);
	else if (form == 'form_customer')
		errFormCus(result);
	else if (form == 'form_supplier')
		errFormSup(result);
	else if (form == 'form_courier')
		errFormCou(result);
	else if (form == 'form_account')
		errFormAcc(result);
	else if (form == 'form_user')
		errFormUsr(result);
}

//clear error field
function errorClear(form) {
	if (form == 'form_product')
		clearPro();
	else if (form == 'form_so')
		fillCName.removeClass('is-invalid');
	else if (form == 'form_category')
		clearCat();
	else if (form == 'form_job')
		clearJob();
	else if (form == 'form_greeting')
		clearGre();
	else if (form == 'form_uom')
		clearUom();
	else if (form == 'form_customer')
		clearCus();
	else if (form == 'form_supplier')
		clearSup();
	else if (form == 'form_courier')
		clearCou();
	else if (form == 'form_account')
		clearAcc();
	else if (form == 'form_user')
		clearUsr();
}

//readonly based on value in the form
function readonly(form, value) {
	if (value == true)
		if (form == 'form_product')
			chkdPro();
		else if (form == 'form_so')
		fillCDesc.prop('readonly', false);
	else if (form == 'form_category')
		chkdCat();
	else if (form == 'form_job')
		chkdJob();
	else if (form == 'form_greeting')
		chkdGre();
	else if (form == 'form_uom')
		chkdUom();
	else if (form == 'form_customer')
		chkdCus();
	else if (form == 'form_supplier')
		chkdSup();
	else if (form == 'form_courier')
		chkdCou();
	else if (form == 'form_account')
		chkdAcc();
	else if (form == 'form_user')
		chkdUsr();
	else
	if (form == 'form_product')
		unchkdPro();
	else if (form == 'form_so')
		fillCDesc.prop('readonly', false);
	else if (form == 'form_category')
		unchkdCat();
	else if (form == 'form_job')
		unchkdJob();
	else if (form == 'form_greeting')
		unchkdGre();
	else if (form == 'form_uom')
		unchkdUom();
	else if (form == 'form_customer')
		unchkdCus();
	else if (form == 'form_supplier')
		unchkdSup();
	else if (form == 'form_courier')
		unchkdCou();
	else if (form == 'form_account')
		unchkdAcc();
	else if (form == 'form_user')
		unchkdUsr();
}

// do close the modal form
function closeModalForm(form) {
	modalForm.modal('hide');
	modalForm.on('hidden.bs.modal', function () {
		errorClear(form);

		if (form == 'form_product')
			unchkdPro();
		else if (form == 'form_so')
			fillCName.removeClass('is-invalid');
		else if (form == 'form_category')
			unchkdCat();
		else if (form == 'form_job')
			unchkdJob();
		else if (form == 'form_greeting')
			unchkdGre();
		else if (form == 'form_uom')
			unchkdUom();
		else if (form == 'form_customer')
			unchkdCus();
		else if (form == 'form_supplier')
			unchkdSup();
		else if (form == 'form_courier')
			unchkdCou();
		else if (form == 'form_account')
			unchkdAcc();
		else if (form == 'form_user')
			unchkdUsr();
	});
}

function closeModalList() {
	modalList.modal('hide');
}

//action active checked unchecked do readonly or disable field
function isActive(form) {
	classActive.change(function (e) {
		e.preventDefault();
		if (classActive.is(':checked'))
			switch (form) {
				case 'form_product':
					unchkdPro();
					break;
				case 'form_so':
					// unchkdCat();
					break;
				case 'form_category':
					unchkdCat();
					break;
				case 'form_job':
					unchkdJob();
					break;
				case 'form_greeting':
					unchkdGre();
					break;
				case 'form_uom':
					unchkdUom();
					break;
				case 'form_customer':
					unchkdCus();
					break;
				case 'form_supplier':
					unchkdCus();
					break;
				case 'form_province':
					chkdProv();
					break;
				case 'form_city':
					chkdCity();
					break;
				case 'form_courier':
					unchkdCou();
					break;
				case 'form_account':
					unchkdAcc();
					break;
				case 'form_user':
					unchkdUsr();
					break;
				default:
					console.info('Form Not Found');
			}
		else
			switch (form) {
				case 'form_product':
					chkdPro();
					break;
				case 'form_so':
					// chkdCat();
					break;
				case 'form_category':
					chkdCat();
					break;
				case 'form_job':
					chkdJob();
					break;
				case 'form_greeting':
					chkdGre();
					break;
				case 'form_uom':
					chkdUom();
					break;
				case 'form_customer':
					chkdCus();
					break;
				case 'form_supplier':
					chkdCus();
					break;
				case 'form_province':
					chkdProv();
					break;
				case 'form_courier':
					chkdCou();
					break;
				case 'form_account':
					chkdAcc();
					break;
				case 'form_user':
					chkdUsr();
					break;
				default:
					console.log('Form Not Found');
			}

	});
}

function processDoc(id, status) {
	var optionsAction = [];
	var arrDocAction;
	if (status === 'DR') {
		arrDocAction = [{
				status: 'CO',
				name: 'Complete'
			},
			{
				status: 'VO',
				name: 'Void'
			}
		];
	} else {
		arrDocAction = [{
			status: 'VO',
			name: 'Void'
		}];
	}


	$.map(arrDocAction, function (data) {
		optionsAction[data.status] = data.name;
	});

	Swal.fire({
		title: 'Document Action',
		input: 'select',
		inputOptions: optionsAction,
		customClass: 'swal-docaction',
		showCancelButton: true,
		cancelButtonColor: '#d33',
		confirmButtonText: 'Start',
		cancelButtonText: 'Close',
		showLoaderOnConfirm: true,
		preConfirm: (generate) => {
			return new Promise(function (resolve) {
				if (LAST_URL === 'viewSo')
					url = CUST_URL + SALES + '/processDocaction?id=' + id + '&docaction=' + generate;
				else
					url = SITE_URL + '/processDocaction?id=' + id + '&docaction=' + generate;

				$.getJSON(url, function (response) {
						if (response.success) {
							Toast.fire({
								type: 'success',
								title: response.message
							});
							reloadTable(LAST_URL);
						}

						if (response.error) {
							Swal.showValidationMessage(
								response.message
							);
							resolve(false);
						}
					})
					.fail(function (jqXHR, textStatus, errorThrown) {
						console.info(errorThrown)
						alert(errorThrown)
					});
			});
		},
		allowOutsideClick: () => !Swal.isLoading()
	}).then(result => {
		if (!result.value)
			console.info('Close')
	});
}

function formatRupiah(numeric) {
	var number_string = numeric.toString(),
		split = number_string.split(','),
		sisa = split[0].length % 3,
		rupiah = split[0].substr(0, sisa),
		ribuan = split[0].substr(sisa).match(/\d{3}/gi);

	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if (ribuan) {
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.'); //penambahan separator titik setelah bilangan satuan
	}

	return rupiah ? rupiah : '';
}

function replaceChar(string) {
	return string.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/""/img, "");
}

function replaceRupiah(numeric) {
	return numeric.replace(/\./g, "");
}

function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
}

$(document).ready(function () {
	$('.select2').select2({
		placeholder: 'Select an option',
		width: '100%'
	});

	$('.datepicker').datepicker({
		format: 'dd-mm-yyyy',
		todayHighlight: true,
		todayBtn: true,
		orientation: 'bottom auto',
		autoclose: true,
		startDate: new Date(),
		autoclose: true
	})

	Toast = Swal.mixin({
		toast: true,
		position: 'top',
		showConfirmButton: false,
		timer: 4000
	});

	classNumber.on('keypress keyup blur', function (evt) {
		$(this).val($(this).val().replace(/[^\d].+/, ""));
		if ((evt.which < 48 || evt.which > 57)) {
			evt.preventDefault();
		}
	});

	$('.rupiah').autoNumeric('init', {
		aSep: '.',
		aDec: ',',
		mDec: '0'
	});
});
