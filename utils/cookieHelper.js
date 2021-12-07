import {v4 as uuid} from 'uuid'
import * as cookie from "cookie";

export async function cookieHelper({ req, res }) {
    const { cookies } = req
    let { esalesCustomerKey, esalesSessionKey } = cookies;
    if (!esalesCustomerKey ) {
        esalesCustomerKey = uuid()
        esalesSessionKey = uuid()
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("esalesCustomerKey", esalesCustomerKey, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
            }),
            cookie.serialize("esalesSessionKey", esalesCustomerKey, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
            })
        );
    }
    return { esalesCustomerKey, esalesSessionKey }
}