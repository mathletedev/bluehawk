export const __port__ = process.env.PORT || "4000";
export const __prod__ = process.env.NODE_ENV === "production";
export const __clientUri__ = __prod__ ? "" : "http://localhost:3000";
