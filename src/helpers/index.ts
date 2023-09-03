import crypto from "crypto";

const SECRET = "EXAMPLE-REST-API";

export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (password: string, salt: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
