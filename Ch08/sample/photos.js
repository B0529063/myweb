if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.photos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// 07.jpg
	this.instance = new lib._07();
	this.instance.setTransform(55.9,52.4);
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(72).to({_off:false},0).wait(13));

	// 06.jpg
	this.instance_1 = new lib._06();
	this.instance_1.setTransform(55.9,52.4);
	this.instance_1._off = true;

	this.timeline.addTween(Tween.get(this.instance_1).wait(60).to({_off:false},0).wait(25));

	// 05.jpg
	this.instance_2 = new lib._05();
	this.instance_2.setTransform(55.9,52.4);
	this.instance_2._off = true;

	this.timeline.addTween(Tween.get(this.instance_2).wait(48).to({_off:false},0).wait(37));

	// 04.jpg
	this.instance_3 = new lib._04();
	this.instance_3.setTransform(55.9,52.4);
	this.instance_3._off = true;

	this.timeline.addTween(Tween.get(this.instance_3).wait(36).to({_off:false},0).wait(49));

	// 03.jpg
	this.instance_4 = new lib._03();
	this.instance_4.setTransform(55.9,52.4);
	this.instance_4._off = true;

	this.timeline.addTween(Tween.get(this.instance_4).wait(24).to({_off:false},0).wait(61));

	// 02.jpg
	this.instance_5 = new lib._02();
	this.instance_5.setTransform(55.9,52.4);
	this.instance_5._off = true;

	this.timeline.addTween(Tween.get(this.instance_5).wait(12).to({_off:false},0).wait(73));

	// 01.jpg
	this.instance_6 = new lib._01();
	this.instance_6.setTransform(55.9,52.4);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_6}]}).wait(85));

	// 圖層 1
	this.instance_7 = new lib.元件1("synched",0);
	this.instance_7.setTransform(164.4,139.4,1,1,0,0,0,165.5,140);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_7}]}).wait(85));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-1.1,-0.6,331,280);


// symbols:
(lib._07 = function() {
	this.initialize(images._07);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,245,190);


(lib._06 = function() {
	this.initialize(images._06);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,245,190);


(lib._05 = function() {
	this.initialize(images._05);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,245,190);


(lib._04 = function() {
	this.initialize(images._04);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,245,190);


(lib._03 = function() {
	this.initialize(images._03);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,245,190);


(lib._02 = function() {
	this.initialize(images._02);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,245,190);


(lib._01 = function() {
	this.initialize(images._01);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,245,190);


(lib.元件1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.photo();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,331,280);


(lib.photo = function() {
	this.initialize(images.photo);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,331,280);