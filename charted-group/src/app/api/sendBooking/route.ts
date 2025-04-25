// app/api/sendBooking/route.ts
import { NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

type Booking = {
  legType: string;
  origin: string;
  countryName: string;
  destination: string;
  selectedDate: string;
  flightNumber?: string;
  timePeriod: string;
  vehicleOption: string;
  distanceKm: number;
  priceRange: { min: number; max: number };
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export async function POST(request: Request) {
  const booking: Booking = await request.json();

  console.log("Booking data:", booking);

  // build your HTML email inline
  const html = `
    <div style="font-family:sans-serif;line-height:1.4;">
      <h2 style="color:#191F32;">New Booking Request</h2>
      <p><strong>Type:</strong> ${booking.legType}</p>
      <p>
      <strong>Passenger:</strong> ${booking.firstName} ${booking.lastName}<br/>
      <strong>Email:</strong> ${booking.email}<br/>
      <strong>Phone:</strong> ${booking.phone}
      </p>
      <hr/>
      <p><strong>Country:</strong> ${booking.countryName}<br/>
        <strong>Origin:</strong> ${booking.origin}<br/>
        <strong>Destination:</strong> ${booking.destination}</p>
      <p><strong>Date:</strong> ${booking.selectedDate}<br/>
         <strong>Time Period:</strong> ${booking.timePeriod}<br/>
      ${
        booking.flightNumber
          ? `<strong>Flight #:</strong> ${booking.flightNumber}<br/>`
          : ""
      }
      </p>
      <p><strong>Vehicle:</strong> ${booking.vehicleOption}<br/>
         <strong>Distance:</strong> ${booking.distanceKm.toFixed(1)} km<br/>
         <strong>Estimated Fare:</strong> ${booking.priceRange.min} – ${
    booking.priceRange.max
  }
         </p>
    </div>
  `;

  // configure Brevo client
  const apiInstance = new brevo.TransactionalEmailsApi();
  apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.NEXT_BREVO_API_KEY || ""
  );

  const sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.htmlContent = html;
  sendSmtpEmail.subject = `New booking from ${booking.firstName} ${booking.lastName} <${booking.email}>`;
  sendSmtpEmail.sender = {
    name: "Charted Group Site",
    email: process.env.NEXT_BOOKING_SENDER_EMAIL,
  };
  sendSmtpEmail.cc = [{ email: process.env.NEXT_BOOKING_CC_EMAIL || "" }];
  sendSmtpEmail.to = [
    {
      email: process.env.NEXT_BOOKING_EMAIL || "",
      name: "Charted Group Site",
    },
  ];
  sendSmtpEmail.replyTo = {
    email: booking.email,
    name: `${booking.firstName} ${booking.lastName}`,
  };

  try {
    //console.log("Sending email via Brevo...");
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Brevo error:", err);
    return NextResponse.json(
      { error: "Failed to send via Brevo" },
      { status: 500 }
    );
  }
}
