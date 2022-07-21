// source: https://mmazzarolo.com/blog/2022-02-05-creating-and-deploying-a-proxy-server-in-5-minutes/

// In Vercel, any file inside the "api" directory is exposed on an "/api" endpoint.

// For an API route to work, you need to export a function as default (a.k.a request handler),
// which then receives the following parameters:
// - req: The request object.
// - res: The response object.
// See https://vercel.com/docs/serverless-functions/supported-languages#node.js for details.
export default async function handler(req, res) {
  res.status(200).send(`Hello world!`)
}
