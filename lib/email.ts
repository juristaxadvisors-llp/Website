function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

type Enquiry = {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  service: string;
  message: string;
};

function row(label: string, value: string, href?: string) {
  const inner = href
    ? `<a href="${href}" style="color:#0B1F33;text-decoration:none;">${value}</a>`
    : value;

  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid rgba(11,31,51,0.08);">
      <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.12em;color:#66717D;">${label}</p>
      <p style="margin:0;font-size:15px;color:#0B1F33;">${inner}</p>
    </td>
  </tr>`;
}

export function enquiryEmailHtml(input: Enquiry) {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const phone = escapeHtml(input.phone);
  const organisation = escapeHtml(input.organisation);
  const service = escapeHtml(input.service);
  const message = escapeHtml(input.message).replaceAll("\n", "<br />");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New enquiry</title>
  </head>
  <body style="margin:0;padding:0;background:#F7F5F0;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F7F5F0;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="width:560px;max-width:100%;background:#ffffff;border:1px solid rgba(11,31,51,0.08);">
            <tr>
              <td style="background:#0B1F33;padding:28px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;color:#C7A45A;">JURISTAX ADVISORS LLP</p>
                <h1 style="margin:10px 0 0;font-size:26px;line-height:1.25;font-weight:500;color:#F7F5F0;">New enquiry received</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;font-family:Arial,Helvetica,sans-serif;color:#16202A;">
                <p style="margin:0 0 18px;font-size:14px;line-height:1.7;color:#66717D;">A visitor submitted the website contact form.</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  ${row("NAME", name)}
                  ${row("EMAIL", email, `mailto:${email}`)}
                  ${row("PHONE", phone)}
                  ${organisation ? row("ORGANISATION", organisation) : ""}
                  ${row("SERVICE", service)}
                  <tr>
                    <td style="padding:12px 0 0;">
                      <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.12em;color:#66717D;">MESSAGE</p>
                      <p style="margin:0;font-size:15px;line-height:1.7;color:#16202A;">${message}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 28px;font-family:Arial,Helvetica,sans-serif;">
                <p style="margin:0;font-size:12px;color:#66717D;">Reply directly to this email to reach ${name}.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function enquiryEmailText(input: Enquiry) {
  return [
    "New enquiry from the Juristax website",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    input.organisation ? `Organisation: ${input.organisation}` : "",
    `Service: ${input.service}`,
    "",
    "Message:",
    input.message,
  ]
    .filter((line) => line !== "")
    .join("\n");
}
