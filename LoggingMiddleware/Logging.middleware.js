export const Log = async (stack, level, packageName, message) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbnViaGF2cGF0d2FsMjkyOUBnbWFpbC5jb20iLCJleHAiOjE3NTI1NTc5MjUsImlhdCI6MTc1MjU1NzAyNSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjlhMDZjM2QwLTk4NjQtNGFkYy04ZWU0LTFmMTkwMWM0OTc3NCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFudWJoYXYgcGF0d2FsIiwic3ViIjoiZWJiNjUzMjYtMmFlNC00MGExLTkzNGQtZmQ3ZjdmOTc5OGIxIn0sImVtYWlsIjoiYW51YmhhdnBhdHdhbDI5MjlAZ21haWwuY29tIiwibmFtZSI6ImFudWJoYXYgcGF0d2FsIiwicm9sbE5vIjoiMjIxODQyMiIsImFjY2Vzc0NvZGUiOiJRQWhEVXIiLCJjbGllbnRJRCI6ImViYjY1MzI2LTJhZTQtNDBhMS05MzRkLWZkN2Y3Zjk3OThiMSIsImNsaWVudFNlY3JldCI6IlRHRmpIWVhaZGdVWVpyYnQifQ.J7oaX8uBuwEv8CrADBNe81NrmJLCfTOkcWA4SSR5Wt4";

  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    const result = await response.json();
    console.log("Log success:", result);
  } catch (err) {
    console.error("Log error:", err);
  }
};
