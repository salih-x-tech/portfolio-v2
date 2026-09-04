import { SignJWT, jwtVerify } from "jose";

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not defined");
}

const secretKey = new TextEncoder().encode(secret);

export async function createAdminToken() {
  return await new SignJWT({
    role: "admin",
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);

    if (payload.role !== "admin") {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(token: string | undefined) {
  if (!token) {
    return false;
  }

  return await verifyAdminToken(token);
}