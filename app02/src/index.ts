import { z } from "zod";
import express from "express";

export const app = express();
app.use(express.json());

// app.post('/sum', (req, res) => {
//     const a = req.body.a;
//     const b = req.body.b;
//     const answer = a + b;
//     res.json({ answer });
// })

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body);
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const answer = parsedResponse.data.a + parsedResponse.data.b;
    res.json({ answer });
})