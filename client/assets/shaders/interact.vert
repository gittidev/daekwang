void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    
    // Z축 깊이를 위한 변형 추가 (입체감)
    mvPosition.z += sin(position.x * 10.0 + u_time) * 0.1;
    
    gl_Position = projectionMatrix * mvPosition;
}
