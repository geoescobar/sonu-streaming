import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=daa6987ad4904bf3b683133d2c32a6d9&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

function Login() {
  return (
    <div>
      <div className="flex flex-row min-h-screen justify-center items-center bg-[#363537]">
        <a
          className="p-4 bg-[#0CCE6B] text-[#363537] hover:underline"
          href={AUTH_URL}
        >
          Login With Spotify
        </a>
      </div>
    </div>
  );
}

export default Login;
