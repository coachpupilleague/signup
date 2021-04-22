var callback_validateDiscord = function(value) {
	// validating discord names with regex
	return /^[^#@\:]*#\d{4}$/.test(value);
}

var sanitize = function(value) {
	value = value.trim();
	value = value.startsWith('=') ? value.slice(1) : value;
	return value;
}