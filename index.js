'use strict';

module.exports = {
	/**
	 * @param {String} templateString
	 * @param {Object} data
	 * @return {String}
	 */
	render: function(templateString, data){
		if (!templateString){
			return '';
		}

		var tags = templateString.match(/\{(.*?)\}/g),
			i, tag, match;

		if (!tags){
			return templateString;
		}

		for (i = 0; i < tags.length; i++){
			tag = tags[i];
			match = tag.match(/^\{([^.]+)(?:\.(.*))?\}$/);
			if (!match[1] || !data[match[1]]) continue;

			if (!match[2]){
				templateString = templateString.replace(match[0], data[match[1]]);
			}
		}
		return templateString;
	}
};

