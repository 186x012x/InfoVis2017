function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;

    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );


    //task 1
    var vertices = [
        [-1,-1,-1], // v0
        [-1,-1, 1], // v1
        [ 1,-1, 1], // v2
        [ 1,-1,-1], // v3
        [-1, 1,-1], // v4
        [-1, 1, 1], // v5
        [ 1, 1, 1], // v6
        [ 1, 1,-1]  // v7
    ];

    var faces = [
        [0,7,3],
        [0,4,7],
        [5,1,2],
        [5,2,6],
        [1,4,0],
        [1,5,4],
        [3,6,2],
        [3,7,2],
        [4,6,7],
        [4,5,6],
        [1,3,2],
        [1,0,3]
    ];

    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );

    var geometry = new THREE.Geometry();
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.vertices.push( v6 );
    geometry.vertices.push( v7 );

    var id0 = faces[0];
    var id1 = faces[1];
    var id2 = faces[2];
    var id3 = faces[3];
    var id4 = faces[4];
    var id5 = faces[5];
    var id6 = faces[6];
    var id7 = faces[7];
    var id8 = faces[8];
    var id9 = faces[9];
    var id10 = faces[10];
    var id11 = faces[11];
    var f0 = new THREE.Face3(id0[0],id0[1],id0[2]);
    var f1 = new THREE.Face3(id1[0],id1[1],id1[2]);
    var f2 = new THREE.Face3(id2[0],id2[1],id2[2]);
    var f3 = new THREE.Face3(id3[0],id3[1],id3[2]);
    var f4 = new THREE.Face3(id4[0],id4[1],id4[2]);
    var f5 = new THREE.Face3(id5[0],id5[1],id5[2]);
    var f6 = new THREE.Face3(id6[0],id6[1],id6[2]);
    var f7 = new THREE.Face3(id7[0],id7[1],id7[2]);
    var f8 = new THREE.Face3(id8[0],id8[1],id8[2]);
    var f9 = new THREE.Face3(id9[0],id9[1],id9[2]);
    var f10 = new THREE.Face3(id10[0],id10[1],id10[2]);
    var f11 = new THREE.Face3(id11[0],id11[1],id11[2]);

    geometry.faces.push(f0);
    geometry.faces.push(f1);
    geometry.faces.push(f2);
    geometry.faces.push(f3);
    geometry.faces.push(f4);
    geometry.faces.push(f5);
    geometry.faces.push(f6);
    geometry.faces.push(f7);
    geometry.faces.push(f8);
    geometry.faces.push(f9);
    geometry.faces.push(f10);
    geometry.faces.push(f11);

    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;

    geometry.faces[0].color = new THREE.Color( 'red' );
    geometry.faces[1].color = new THREE.Color( 'blue');
    geometry.faces[2].color = new THREE.Color( 'green');
    geometry.faces[3].color = new THREE.Color( 'yellow');
    geometry.faces[4].color = new THREE.Color( 'skyblue');
    geometry.faces[5].color = new THREE.Color( 'black');
    geometry.faces[6].color = new THREE.Color( 'white');
    geometry.faces[7].color = new THREE.Color( 'orange');
    geometry.faces[8].color = new THREE.Color( 'pink');
    geometry.faces[9].color = new THREE.Color( 'gray');
    geometry.faces[10].color = new THREE.Color( 'brown');
    geometry.faces[11].color = new THREE.Color( 'silver');

    var triangle = new THREE.Mesh(geometry,material);

    scene.add(triangle);




    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        triangle.rotation.x += 0.001;
        triangle.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}