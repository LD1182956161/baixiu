////匿名函数的自调用将你要写的代码封装起来给一盒
//
//(function() {
//	//把Dray看生一个对象,把被拖拽元素看成一个对象的属性,把拖拽函数看成对象的方法
//
//	//创建一个拖拽的构造函数
//	function Drag(id) {
//		//把被拖拽的元素看成一个属性,通过ID值,获取页面上被拖拽的元素,符值给当前的构造函数
//		this.ele = document.getElementById(id); //ele是被拖拽的物体
//		//	 需要将添加和设置的属性进行初始化设置
//		this.diX = 0;
//		this.diY = 0;
//		this.fnDown();
//
//	}
//
//	//给当前的构造函数原型上添加按下鼠标事件
//	Drag.prototype.fnDown = function() {
//		var that = this;
//		//	给被拖拽的元素添加按下鼠标事件
//		this.ele.ommousdown = function(e) {
//			e = e || event:
//				// 	获取固定距离
//				that.disX = e.clientX - this.offsetLeft;
//			that.disY = e.clientY - this.offsetTop;
//			//给document添加一个鼠标移动事件
//			document.onmousemove = function(e) {
//				that.fnMove(e);
//
//			};
//			document.onmousup = that.fnUp;
//
//		}
//		return false;
//	}
//	//给构造函数原型添加一个移动的方法
//
//	Drag.prototype.fnMove = function(e) {
//		e = e || event;
//
//		this.ele.style.left = e.clientX - this.disX + 'px';
//		this.ele.style.top = e.clientY - this.disY + 'px';
//
//	}
//	Drag.prtotype.fnUp = function() {
//		//弹起鼠标,取消移动事件
//		document.onmousemove = null;
//
//	}
//	//将当前的构造函数挂载到window顶级对象的下面  作为一个属性存在
//	//就可以将当前的构造函数暴露出去
//	window.Drag = Drag;
//
//})(window)



(function(window) {

	// 创建一个拖拽的构造函数  
	function Drag(id) {

		this.ele = document.getElementById(id);
		// 将需要添加和设置的属性进行初始化设置
		this.disX = 0;
		this.disY = 0;
		this.fnDown();
	}

	//　给当前的构造函数的原型上添加了一个按下方法
	Drag.prototype.fnDown = function() {

		var that = this;
		//　给被拖拽元素添加按下鼠标事件
		this.ele.onmousedown = function(e) {

			e = e || event;
			// 获取固定距离
			that.disX = e.clientX - this.offsetLeft;
			that.disY = e.clientY - this.offsetTop;

			// 给document添加一个鼠标移动事件
			document.onmousemove = function(e) {
				that.fnMove(e);
			};
			// 给document添加一个鼠标弹起事件
			document.onmouseup = that.fnUp;
		}
		return false;
	}

	// 给构造函数的原型上添加一个移动方法
	Drag.prototype.fnMove = function(e) {
		e = e || event;

		// 让当前的被拖拽元素 的位置 跟着鼠标走
		this.ele.style.left = e.clientX - this.disX + "px";
		this.ele.style.top = e.clientY - this.disY + "px";
	}

	Drag.prototype.fnUp = function() {
		// 弹起鼠标 取消移动事件
		document.onmousemove = null;
	}

	//将当前的构造函数从内部暴露出去
	window.Drag = Drag;

})(window);





