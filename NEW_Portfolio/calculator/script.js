function insert(num) {
	document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
	const edit = document.form.textview.value;
	document.form.textview.value = edit.substring(0, edit.length-1);
}

function equal() {
	const eqvel = document.form.textview.value;
	if (eqvel) {
		document.form.textview.value = eval(eqvel);
	}
}