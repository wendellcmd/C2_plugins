﻿// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.Rex_WhileLoop = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	var pluginProto = cr.plugins_.Rex_WhileLoop.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};
	
	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	instanceProto.onCreate = function()
	{
        this.condition_value = 1;
	};
	
	//////////////////////////////////////
	// Conditions
	function Cnds() {};
	pluginProto.cnds = new Cnds();    
    
	Cnds.prototype.While = function ()
	{
        var current_event = this.runtime.getCurrentEventStack().current_event;
        
        while (this.condition_value >0)
        {
            this.runtime.pushCopySol(current_event.solModifiers);
            current_event.retrigger();
            this.runtime.popSol(current_event.solModifiers);
        }
        
		return false;
	};
    
	//////////////////////////////////////
	// Actions
	function Acts() {};
	pluginProto.acts = new Acts();

	Acts.prototype.SetConditionValue = function (value)
	{ 
		this.condition_value = value;
	};

	Acts.prototype.SubtractConditionValue = function ()
	{ 
		this.condition_value -= 1;
	};    
	//////////////////////////////////////
	// Expressions
	function Exps() {};
	pluginProto.exps = new Exps();
	
	Exps.prototype.Cond = function (ret)
	{
		ret.set_int(this.condition_value);
	};
}());