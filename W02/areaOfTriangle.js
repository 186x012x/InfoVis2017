function AreaOfTriangle( v0, v1, v2 ){
	//vector v0v1
	var v0v1.x = v1.x - v0.x;
	var v0v1.y = v1.y - v0.y;
	var v0v1.z = v1.z - v0.z;

	//vector v0v2
	var v0v2.x = v2.x - v0.x;
	var v0v2.y = v2.y - v0.y;
	var v0v2.z = v2.z - v0.z;	
	return Math.abs(v0v1.x*v0v2.y + v0v2.x*v0v1.z + v0v1.y*v0v2.z - v0v1.z*v0v2.y - v0v2.z*v0v1.x - v0v1.y*v0v2.x)/2;
}