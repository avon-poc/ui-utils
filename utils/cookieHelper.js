import {v4 as uuid} from 'uuid'
import * as cookie from "cookie";

export function cookieHelper({ req, res }) {
    const { cookies } = req;
    let { esalesCustomerKey, esalesSessionKey } = cookies;
    if (!esalesCustomerKey || !esalesSessionKey) {
        esalesCustomerKey = uuid();
        esalesSessionKey = uuid();
        res.setHeader(
            "Set-Cookie",
            [cookie.serialize("esalesCustomerKey", esalesCustomerKey, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
            }),
            cookie.serialize("esalesSessionKey", esalesSessionKey, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
            })]
        );
    }
    return { esalesCustomerKey, esalesSessionKey }
}