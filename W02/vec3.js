//Constructor
Vec3 = function( x,y,z ){
	this.x = x;
	this.y = y;
	this.z = z;
}

//Add method\\\\
Vec3.prototype.add = function( v ){
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
	return this;
}

//min method
Vec3.prototype.min = function(){
	return Math.min(this.x,this.y,this.z);
}

//max method
Vec3.prototype.max = function(){
	return Math.max(this.x,this.y,this.z);
}

//mid method
Vec3.prototype.mid = function(){
	var mid;
	if(this.x<this.z && this.x>this.y){
		mid = this.x;
	}
	else if(this.y<this.Z && this.y>this.x){
		mid = this.y;
	}
	else if(this.z<this.x && this.z>this.y){
		mid = this.z;
	}
	else{
		mid = "error";
	}
	return mid;
}

//Sum method
Vec3.prototype.sum = function(){
	return this.x+this.y+this.z;
}