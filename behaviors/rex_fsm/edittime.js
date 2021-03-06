﻿function GetBehaviorSettings()
{
	return {
		"name":			"state",
		"id":			"Rex_FSM",
		"version":		"0.1",   		
		"description":	"Finite state machine",
		"author":		"Rex.Rainbow",
		"help url":		"",
	    "category":		"Variable",
		"flags":		0
	};
};

//////////////////////////////////////////////////////////////
// Actions
AddAction(0, 0, "Clean all memory", "Memory", 
          "Clean {my} all memory", 
          "Clean all memory.", 
          "CleanMemory");
AddAnyTypeParam("Index", "Index of memory, can be number of string", 0);
AddAnyTypeParam("Value", "Value of memory", 0);
AddAction(1, 0, "Set a memory value", "Memory", 
          "Set {my} Mem[<i>{0}</i>] to <i>{1}</i>", 
          "Set the value stored in memory in fsm.", 
          "SetMemory");
AddAction(2, 0, "Request", "Request", 
          "Request {my}", 
          "Request a state transfer.", 
          "Request");
AddStringParam("CSV table", "The state transfer logic in CSV table.", '""');
AddComboParamOption("Simple notation");
AddComboParamOption("Javascript");
AddComboParam("Code format", "The code format of state transfer logic", 0);
AddAction(3, 0, "Load logic from CSV", "Advance: Logic (CSV)", 
          "Load state transfer logic from csv table <i>{0}</i> in <i>{1}</i> format",
          "Load state transfer logic from csv table.", "CSV2Logic");
AddStringParam("State", "Transfer from state.", '""');        
AddStringParam("Logic code", "The logic code of state transfer.", '""');
AddComboParamOption("Simple notation");
AddComboParamOption("Javascript");
AddComboParam("Code format", "The code format of state transfer logic", 0);
AddAction(4, 0, "Load logic", "Advance: Logic", 
          "Load <i>{0}</i> state transfer logic <i>{1}</i> in <i>{2}</i> format",
          "Load state transfer logic from code string.", "String2Logic");          
AddObjectParam("Function", "Function object for controlling the game world");
AddAction(5, 0, "Connect to function object", "Advance: Setup", 
          "Connect to function object <i>{0}</i>", 
          "Connect to function object.", "ConnectFn");   
AddStringParam("CSV table", "The state transfer logic in CSV table.", '""');
AddAction(7, 0, "Load action from CSV", "Advance: Action (CSV)", 
          "Load state transfer action from csv table <i>{0}</i>",
          "Load state transfer action from csv table.", "CSV2Action");          
AddStringParam("State", "Transfer from state.", '""');   
AddStringParam("State", "Transfer to state.", '""');       
AddStringParam("Action code", "The action code of state transfer.", '""');
AddAction(8, 0, "Load action", "Advance: Action", 
          "Load <i>{0}</i> -> <i>{1}</i> action <i>{1}</i>",
          "Load state transfer action from code string.", "String2Action");   
AddStringParam("CSV table", "The state transfer logic in CSV table.", '""');
AddAction(9, 0, "Load enter-exit action from CSV", "Advance: Action (CSV)", 
          "Load state enter-exit action from csv table <i>{0}</i>",
          "Load state enter-exit action from csv table.", "CSV2EnterExit");          
AddStringParam("State", "State name.", '""');   
AddStringParam("Enter code", "The code of state enter.", '""');     
AddStringParam("Exit code", "The code of state exit.", '""');
AddAction(10, 0, "Load enter-exit action", "Advance: Action", 
          "Load <i>{0}</i>'s enter action to <i>{1}</i>, exist action to <i>{2}</i>",
          "Load state enter-exit action from code string.", "String2EnterExit"); 
AddStringParam("Name", "State name", '""');
AddAction(11, 0, "Transit to state", "Request", 
          "Transit {my} to <i>{0}</i>", "Transit to state.",  "Transit");          
AddStringParam("Code", "JS function code", '""');
AddAction(12, 0, "Inject JS function objects", "Advance: JS Function", 
          "Inject JS <i>{0}</i>", "Inject JS function objects.", "InjectJSFunctionObjects");
AddComboParamOption("No");
AddComboParamOption("Yes");
AddComboParam("Activated", "Enable the behavior.",1);
AddAction(13, 0, "Set activated", "Setup", "Set {my} activated to <i>{0}</i>", "Enable the object's cursor behavior.", "SetActivated");
AddStringParam("Name", "State name", '""');
AddAction(14, 0, "Set next state", "Logic", 
          "Set next state to <i>{0}</i>", 'Set next state. Used in "Condition: On transfer logic"',  "NextStateSet");          
          
//////////////////////////////////////////////////////////////
// Conditions
AddStringParam("Name", "State name", '""');
AddCondition(0, cf_trigger, "On enter state", "Action", 
             "On {my} enter to <i>{0}</i>", 
			 "Triggered when enter state.", 
			 "OnEnter");
AddStringParam("Name", "State name", '""');
AddCondition(1, cf_trigger, "On exit state", "Action", 
             "On {my} exit from <i>{0}</i>", 
			 "Triggered when exit state.", 
			 "OnExit");
AddStringParam("Name", "Exit from state", '""');
AddStringParam("Name", "Enter to state", '""');
AddCondition(2, cf_trigger, "On state transfer", "Action", 
             "On {my} exit from <i>{0}</i> and enter to <i>{1}</i>", 
			 "Triggered when state transfer.", 
			 "OnTransfer");             
AddCondition(3, cf_trigger, "On default enter", "Action", 
             "On {my} enter to any state", 
			 "Triggered when no enter callback.", 
			 "OnDefaultEnter");             
AddCondition(4, cf_trigger, "On default exit", "Action", 
             "On {my} exit from any state", 
			 "Triggered when no exit callback.", 
			 "OnDefaultExit"); 
AddCondition(5, cf_trigger, "On state changing", "Action", 
             "On {my} state changing", 
			 "Triggered when state changing. Useful when debugging.", 
			 "OnStateChanging");
AddStringParam("Name", "State name", '""');
AddCondition(6, cf_trigger, "On transfer logic", "Logic", 
             "On {my} <i>{0}</i> transfer logic", 
			 "Triggered to get next state.", 
			 "OnLogic");
AddStringParam("Name", "State name", '""');
AddCondition(7, 0, "Compare current state", "State", 
             " {my} Current state = <i>{0}</i>", 
			 "Compare current state.", 
			 "IsCurState");
AddAnyTypeParam("Index", "Index of memory, can be number of string", 0);
AddCmpParam("Comparison", "Choose the way to compare the current speed.");
AddAnyTypeParam("Value", "Value of memory", 0);
AddCondition(8, cf_deprecated, "Compare mem value", "Mem", 
             " {my} <i>{0}</i> <i>{1}</i> <i>{2}</i>", 
			 "Compare mem value.", 
			 "CmpMemValue");			 
             
//////////////////////////////////////////////////////////////
// Expressions
AddExpression(0, ef_return_string, "Current state", "State", "CurState", "Get current state.");
AddExpression(1, ef_return_string, "Previous state", "State", "PreState", "Get previous state.");
AddAnyTypeParam(0, "The index of memory to get, can be number of string.", 0);
AddExpression(2, ef_deprecated | ef_return_any | ef_variadic_parameters, 
              "Get memory", "Memory", "Mem", 
              "Get the value from memory by index.");


ACESDone();

// Property grid properties for this plugin
var property_list = [
    new cr.Property(ept_combo, "Debug mode", "Off", "Enable to show error message.", "Off|On"),
	new cr.Property(ept_combo, "Activated", "Yes", "Enable if you wish this to begin at the start of the layout.", "No|Yes"),
    new cr.Property(ept_text, "Initial state", "Off", "Set initial state."),
	new cr.Property(ept_text, "Default memory", "", 'Set initial value of memory, ex:"{"x":10, "y":20}".'),     
	];
	
// Called by IDE when a new behavior type is to be created
function CreateIDEBehaviorType()
{
	return new IDEBehaviorType();
}

// Class representing a behavior type in the IDE
function IDEBehaviorType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new behavior instance of this type is to be created
IDEBehaviorType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function()
{
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}
