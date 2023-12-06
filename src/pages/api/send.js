import { EmailTemplate } from "../../../components/contact-form";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("body", body)
        const { email, name, message } = body;
        const data = await resend.emails.send({
            from: "Brett <noreply@sbarciela.ar>",
            to: email,
            subject: "This is Brett Westwood",
            react: EmailTemplate({ firstName: name }),

        });

        if(data.status === 'success') {
            return NextResponse.json({ message: 'Email Successfully Sent!' })
        }
        return NextResponse.json(data)
    } catch (error) {
           console.log('error', error)
    }

}