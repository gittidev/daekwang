uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

// 입체감 있는 파도 효과를 위한 함수
float wave(float x, float t) {
    return sin(x * 0.1 + t) * 0.5 + 0.5;  // 기본적인 파도 효과
}

float depthEffect(float x, float y) {
    return sin(x * 0.1 + y * 0.1 + u_time) * 0.3;  // 깊이 효과를 높임
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    // 시간에 따른 파도 높이
    float waveHeight = wave(uv.x * 10.0, u_time) * 0.4 + 0.4;

    // 깊이를 위한 Z축 변화
    float depth = depthEffect(uv.x, uv.y);

    // 파도 색상과 깊이를 결합
    vec3 color = vec3(0.0, 0.5, 1.0) * waveHeight + vec3(0.0, 0.3, 0.5) * depth;

    gl_FragColor = vec4(color, 1.0);
}
