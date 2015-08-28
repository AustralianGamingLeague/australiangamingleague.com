/*
 *	@file Used to created mock objects used in unit tests.
 *	Provides an easy way to change what a mocked function returns to test
 *	different code paths.
 *	Also provides an easy way to check what arguments were passed to a mocked
 *	fiunction.
 *
 *	How to use a mock object:
 *
 *  // Original Object
 *  var mathsOperations = function() {
 *  	this.add = function(a, b) {
 *  		return a + b;
 *  	};
 *  };
 *  
 *  // Mock Object
 *  var mockMathsObject = mockObject.NewMockObject('mathsOperations');
 *  
 *  // Mock add function to return 10
 *  mockMathsObject.Mock('add', 10);
 *  
 *  console.log(mockMathsObject.add(5, 5)); // prints 10
 *  
 *  console.log(mockMathsObject.GetArguments('add')); // prints [5, 5]
 *  
 *  // Change return value
 *  mockMathsObject.SetReturnValue('add', 45);
 *  
 *  console.log(mockMathsObject.add(5, 5)); // prints 45
 *  
 *  The last print does not make sense but demonstrates changing the return value.
 *
 *	@author Matt Lambert
 */

// TODO Use Proxy(target, handler) to implement functionality to throw an error
// if an unmocked function is called on the mocked object. Could also use this
// to mock other functions, such as hasOwnProperty. NOTE if using Proxy, can't
// use this module on the front end as most browsers do not support this feature
// yet.

'use strict';
//==============================================================================
//	Constants
//==============================================================================

var DEFAULT_CLASS = 'Object';

//==============================================================================
//	Public functions
//==============================================================================

/*	public object NewMockObject(objectClass)
 *
 * 	Create a new mock object.
 *
 * 	@param {string} objectClass - What object are you mocking. (optional)
 *
 *	@return {object} new mock object
 */
module.exports.NewMockObject = function (objectClass) {
	if (typeof objectClass === 'undefined') {
		objectClass = DEFAULT_CLASS;
	}

	// Return an instance of MockObject named after the objectClass argument.
	// This will allow instanceof to work as expected for mocked objects.
	var [objectClass] = MockObject;
	return new [objectClass]();
};

//==============================================================================
//	Private functions
//==============================================================================

/*	private undefined MockObject(objectClass)
 *
 * 	Mock object.
 */
function MockObject () {

	var mockData = {};

	// Mock a function
	this.Mock = function (name, returnValue) {
		mockData[name].returnValue = returnValue;
		this[name] = function () {
			for (var i = 0; i < arguments.length; i++) {
				mockData[name].args[i] = arguments[i];
			}
			return mockData[name].returnValue;
		};
	};

	// Set what you want a mocked function to return
	this.SetReturnValue = function (name, value) {
		if (!mockData.hasOwnProperty(name)) {
			throw new Error('Cannot set a return value for function \'' + name
				+ '\' because it has not been mocked yet. Call mockObject.Mock(name)');
		}
		mockData[name].returnValue = value;
	};

	// Get the arguments passed to a mocked function
	// Will return arguments from most recent call.
	this.GetArguments = function (name) {
		if (!mockData.hasOwnProperty(name)) {
			throw new Error('Cannot set a return value for function \'' + name
				+ '\' because it has not been mocked yet. Call mockObject.Mock(name)');
		}
		return mockData[name].args;
	};
}
