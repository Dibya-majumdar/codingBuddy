// export const Base_Url="http://localhost:3000"
// export const Base_Url="/api"


export const Base_Url=location.hostname === "localhost" ? "http://localhost:3000" : "/api";