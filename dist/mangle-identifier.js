if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', './private/util'], function (exports, _privateUtil) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	exports['default'] = function (name) {
		return forbiddenNames.has(name) ? '_' + name : name.replace(/[^a-zA-Z0-9$_]/g, function (_) {
			return '_' + _.charCodeAt(0);
		});
	};

	var needsMangle = function needsMangle(name) {
		return forbiddenNames.has(name) || !propertyNameOk(name);
	},
	    propertyNameOk = function propertyNameOk(name) {
		return name.search(/[^a-zA-Z0-9$_]/) === -1;
	};

	exports.needsMangle = needsMangle;
	exports.propertyNameOk = propertyNameOk;
	var unmangle = function unmangle(name) {
		if (name[0] === '_') {
			var rest = name.slice(1);
			if (forbiddenNames.has(rest)) return rest;
		}
		return name.replace(/_\d+/g, function (match) {
			var charCode = match.slice(1);
			var n = Number.parseInt(charCode);
			var ch = String.fromCharCode(n);
			return ch === '\u0000' ? match : ch;
		});
	};

	exports.unmangle = unmangle;
	var forbiddenNames = (0, _privateUtil.newSet)(['abstract', 'arguments', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'comment', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'function*', 'global', 'goto', 'if', 'implements', 'import', 'in', 'instanceOf', 'int', 'interface', 'label', 'long', 'module', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield']);
});
//# sourceMappingURL=data:application/json;base64,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c0NvbnRlbnQiOlsiaW1wb3J0IHsgbmV3U2V0IH0gZnJvbSAnLi9wcml2YXRlL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IG5hbWUgPT5cblx0Zm9yYmlkZGVuTmFtZXMuaGFzKG5hbWUpID9cblx0XHQnXycgKyBuYW1lIDpcblx0XHRuYW1lLnJlcGxhY2UoL1teYS16QS1aMC05JF9dL2csIF8gPT4gJ18nICsgXy5jaGFyQ29kZUF0KDApKVxuXG5leHBvcnQgY29uc3Rcblx0bmVlZHNNYW5nbGUgPSBuYW1lID0+XG5cdFx0Zm9yYmlkZGVuTmFtZXMuaGFzKG5hbWUpIHx8ICFwcm9wZXJ0eU5hbWVPayhuYW1lKSxcblxuXHRwcm9wZXJ0eU5hbWVPayA9IG5hbWUgPT5cblx0XHRuYW1lLnNlYXJjaCgvW15hLXpBLVowLTkkX10vKSA9PT0gLTFcblxuZXhwb3J0IGNvbnN0XG5cdHVubWFuZ2xlID0gbmFtZSA9PiB7XG5cdFx0aWYgKG5hbWVbMF0gPT09ICdfJykge1xuXHRcdFx0Y29uc3QgcmVzdCA9IG5hbWUuc2xpY2UoMSlcblx0XHRcdGlmIChmb3JiaWRkZW5OYW1lcy5oYXMocmVzdCkpXG5cdFx0XHRcdHJldHVybiByZXN0XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoL19cXGQrL2csIG1hdGNoID0+IHtcblx0XHRcdGNvbnN0IGNoYXJDb2RlID0gbWF0Y2guc2xpY2UoMSlcblx0XHRcdGNvbnN0IG4gPSBOdW1iZXIucGFyc2VJbnQoY2hhckNvZGUpXG5cdFx0XHRjb25zdCBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUobilcblx0XHRcdHJldHVybiBjaCA9PT0gJ1xcMCcgPyBtYXRjaCA6IGNoXG5cdFx0fSlcblx0fVxuXG5jb25zdCBmb3JiaWRkZW5OYW1lcyA9IG5ld1NldChbXG5cdCdhYnN0cmFjdCcsXG5cdCdhcmd1bWVudHMnLFxuXHQnYm9vbGVhbicsXG5cdCdicmVhaycsXG5cdCdieXRlJyxcblx0J2Nhc2UnLFxuXHQnY2F0Y2gnLFxuXHQnY2hhcicsXG5cdCdjbGFzcycsXG5cdCdjb21tZW50Jyxcblx0J2NvbnN0Jyxcblx0J2NvbnRpbnVlJyxcblx0J2RlYnVnZ2VyJyxcblx0J2RlZmF1bHQnLFxuXHQnZGVsZXRlJyxcblx0J2RvJyxcblx0J2RvdWJsZScsXG5cdCdlbHNlJyxcblx0J2VudW0nLFxuXHQnZXZhbCcsXG5cdCdleHBvcnQnLFxuXHQnZXh0ZW5kcycsXG5cdCdmYWxzZScsXG5cdCdmaW5hbCcsXG5cdCdmaW5hbGx5Jyxcblx0J2Zsb2F0Jyxcblx0J2ZvcicsXG5cdCdmdW5jdGlvbicsXG5cdCdmdW5jdGlvbionLFxuXHQnZ2xvYmFsJyxcblx0J2dvdG8nLFxuXHQnaWYnLFxuXHQnaW1wbGVtZW50cycsXG5cdCdpbXBvcnQnLFxuXHQnaW4nLFxuXHQnaW5zdGFuY2VPZicsXG5cdCdpbnQnLFxuXHQnaW50ZXJmYWNlJyxcblx0J2xhYmVsJyxcblx0J2xvbmcnLFxuXHQnbW9kdWxlJyxcblx0J25hdGl2ZScsXG5cdCduZXcnLFxuXHQnbnVsbCcsXG5cdCdwYWNrYWdlJyxcblx0J3ByaXZhdGUnLFxuXHQncHJvdGVjdGVkJyxcblx0J3B1YmxpYycsXG5cdCdyZXR1cm4nLFxuXHQnc2hvcnQnLFxuXHQnc3RhdGljJyxcblx0J3N1cGVyJyxcblx0J3N3aXRjaCcsXG5cdCdzeW5jaHJvbml6ZWQnLFxuXHQndGhpcycsXG5cdCd0aHJvdycsXG5cdCd0aHJvd3MnLFxuXHQndHJhbnNpZW50Jyxcblx0J3RydWUnLFxuXHQndHJ5Jyxcblx0J3R5cGVvZicsXG5cdCd2YXInLFxuXHQndm9pZCcsXG5cdCd3aGlsZScsXG5cdCd3aXRoJyxcblx0J3lpZWxkJ1xuXSlcbiJdLCJzb3VyY2VSb290IjoiL3NyYyJ9