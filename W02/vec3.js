//Constractor
Vec3 = function( x,y,z ){
	this.x = x;
	this.y = y;
	this.z = z
}

//Add method
Vec3.prototype.add( v ){
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
	return this;
}
//min method
Vec3.prototype.min( v ){
	return Math.min(v.x,v.y,v.z);
}

//max method
Vec3.prototype.max( v ){
	return Math.max(v.x,v.y,v.z);
}

//mid method
Vec3.prototype.mid( v ){
	vec mid;
	if(v.x<v.z && v.x>v.y){
		mid = v.x;
	}
	else if(v.y<v.Z && v.y>v.x){
		mid = v.y;
	}
	else if(v.z<v.x && v.z>v.y){
		mid = v.z;
	}
	else{
		mid = "error";
	}
	return mid;
}

//Sum method
Vec3.prototype.sum = function{
	return this.x+this.y+this.z;
}