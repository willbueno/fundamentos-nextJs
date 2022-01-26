// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'API Test',
    method: req.method,
    age: req.query.age,
  })
}
